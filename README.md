# puchalla.pro Catalog & Research

A statically generated Next.js platform combining:

- a searchable B2B product catalog designed for 500+ products;
- puchalla.pro company and systems-architecture content;
- the webOwie Research Lab portfolio;
- GitHub Pages deployment;
- structured links to ORCID, GitHub and future DOI-based outputs.

## Local development

```bash
npm ci
npm run dev
```

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

The research section follows the planned single-source structure:

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

The current site contains the public-facing research portfolio. The structured export repository can later be connected as a build-time data source.

## GitHub Pages

`.github/workflows/pages.yml` builds the static `out/` directory and deploys it after changes reach `main`.

The custom domain is declared in `public/CNAME` as `puchalla.pro`. GitHub Pages must also be enabled in the repository settings with **Source: GitHub Actions**, and the domain DNS records must point to GitHub Pages.

## Scholarly publication path

```text
GitHub → Release → Zenodo DOI → ORCID → OpenAlex → Google Scholar / ResearchID
```

ORCID: `0009-0002-0223-0929`
