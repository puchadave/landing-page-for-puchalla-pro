# David Puchalla · Portfolio, Catalog & Research

Static Next.js portfolio and GitHub Pages platform for **David Puchalla / puchalla.pro**.

## Public sections

- `/` — personal portfolio with profile image, roles, selected systems and researcher-profile links;
- `/certificates/` — searchable certificate and qualification matrix;
- `/research/` — webOwie Research Lab profile, projects and planned publication pipeline;
- `/products/` — structured B2B product catalog designed for 500+ products.

## Identity links

- ORCID: `0009-0002-0223-0929`
- GitHub: `https://github.com/puchadave`
- LinkedIn: `https://www.linkedin.com/in/davidpuchalla/`
- OpenAlex, Web of Science / ResearcherID and Zenodo directory links are exposed without inventing unresolved platform-specific author IDs.

## Certificate architecture

Certificate metadata is maintained in:

```text
data/certificates.ts
```

The public matrix is rendered by:

```text
components/certificate-grid.tsx
app/certificates/page.tsx
```

The repository stores titles, issuers, categories, dates, credential IDs and reference URLs. Original personal PDF documents remain in Google Drive and are linked from the portfolio instead of being copied indiscriminately into the public source repository.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static export is written to `out/`.

## Product import

1. Download or copy `public/products-template.csv`.
2. Add the real product records. Required columns:
   - `sku`
   - `name`
   - `category`
   - `description`
3. Optional columns:
   - `manufacturer`
   - `unit`
   - `image`
   - `datasheet`
   - `inquiryUrl`
   - `tags` separated by `|`
4. Save the file as `data/products.csv`.
5. Run:

```bash
npm run import:products -- data/products.csv
npm run build
```

The importer validates required fields and duplicate SKUs, then writes the canonical `data/products.json` file used by the static catalog.

## Research architecture

```text
research-profile/
├── profile.yaml
├── biography.md
├── employment.yaml
├── education.yaml
├── websites.yaml
├── research-areas.yaml
├── projects.yaml
├── software.yaml
├── publications.bib
├── datasets.yaml
├── certificates.yaml
└── export/
    ├── orcid/
    ├── researchid/
    ├── zenodo/
    ├── crossref/
    ├── github/
    └── cv/
```

## GitHub Pages

`.github/workflows/pages.yml` builds the static `out/` directory and deploys it after changes reach `main`.

The custom domain is declared in `public/CNAME` as `puchalla.pro`. GitHub Pages must be enabled with **Source: GitHub Actions**, and the domain DNS records must point to GitHub Pages.

## Scholarly publication path

```text
GitHub → Release → Zenodo DOI → ORCID → OpenAlex → Google Scholar / ResearcherID
```
