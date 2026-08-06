import { readFile, writeFile } from "node:fs/promises"
import { resolve } from "node:path"

const source = resolve(process.argv[2] || "data/products.csv")
const destination = resolve("data/products.json")

function parseCsv(input) {
  const rows = []
  let row = []
  let field = ""
  let quoted = false

  for (let index = 0; index < input.length; index += 1) {
    const character = input[index]
    const next = input[index + 1]

    if (character === '"' && quoted && next === '"') {
      field += '"'
      index += 1
    } else if (character === '"') {
      quoted = !quoted
    } else if (character === "," && !quoted) {
      row.push(field.trim())
      field = ""
    } else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && next === "\n") index += 1
      row.push(field.trim())
      if (row.some(Boolean)) rows.push(row)
      row = []
      field = ""
    } else {
      field += character
    }
  }

  row.push(field.trim())
  if (row.some(Boolean)) rows.push(row)
  return rows
}

function normalize(value = "") {
  return value.trim()
}

const raw = (await readFile(source, "utf8")).replace(/^\uFEFF/, "")
const [headerRow, ...dataRows] = parseCsv(raw)

if (!headerRow) throw new Error("CSV contains no header row.")

const headers = headerRow.map((header) => header.trim())
const required = ["sku", "name", "category", "description"]
const missing = required.filter((field) => !headers.includes(field))

if (missing.length) {
  throw new Error(`Missing required columns: ${missing.join(", ")}`)
}

const products = dataRows.map((values, rowIndex) => {
  const record = Object.fromEntries(headers.map((header, index) => [header, normalize(values[index])]))

  for (const field of required) {
    if (!record[field]) throw new Error(`Row ${rowIndex + 2}: ${field} is required.`)
  }

  return {
    sku: record.sku,
    name: record.name,
    category: record.category,
    description: record.description,
    ...(record.manufacturer ? { manufacturer: record.manufacturer } : {}),
    ...(record.unit ? { unit: record.unit } : {}),
    ...(record.image ? { image: record.image } : {}),
    ...(record.datasheet ? { datasheet: record.datasheet } : {}),
    ...(record.inquiryUrl ? { inquiryUrl: record.inquiryUrl } : {}),
    ...(record.tags ? { tags: record.tags.split("|").map((tag) => tag.trim()).filter(Boolean) } : {}),
  }
})

const duplicateSkus = products
  .map((product) => product.sku)
  .filter((sku, index, all) => all.indexOf(sku) !== index)

if (duplicateSkus.length) {
  throw new Error(`Duplicate SKU values: ${[...new Set(duplicateSkus)].join(", ")}`)
}

products.sort((a, b) => a.category.localeCompare(b.category, "de") || a.name.localeCompare(b.name, "de"))
await writeFile(destination, `${JSON.stringify(products, null, 2)}\n`, "utf8")

console.log(`Imported ${products.length} products into ${destination}`)
