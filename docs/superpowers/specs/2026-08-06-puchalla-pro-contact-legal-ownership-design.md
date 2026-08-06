# puchalla.pro Contact, Legal Pages and Ownership Design

Date: 2026-08-06
Status: Proposed for implementation

## 1. Objective

Convert the current portfolio into a clearly owned puchalla.pro presence with:

- David Puchalla as the identifiable provider and responsible person
- puchalla.pro as the public business/brand designation
- a first-party contact form instead of a LinkedIn-only contact action
- separate Impressum and privacy pages
- a service address used only as a c/o postal address
- no third-party company presented as owner, operator or author of the website

## 2. Verified source facts

The available order communication from Anschrift.net documents:

- an Impressum-Service order with postal receipt, scanning and digital delivery
- the service address format:
  - real name or permitted organisation/pseudonym
  - c/o Block Services
  - Stuttgarter Str. 106
  - 70736 Fellbach
- the instruction that a person responsible for a website must be named with their real name
- puchalla.pro and webOwie among the postal aliases associated with the customer account

The service provider is not the owner of puchalla.pro. It acts only as a postal/impressum-address service.

## 3. Public identity model

### Provider

David Puchalla

### Business/brand designation

puchalla.pro

Recommended wording:

> puchalla.pro ist ein Angebot von David Puchalla.

Do not describe puchalla.pro as a GmbH, UG, registered company or public authority unless a corresponding legal registration is verified.

### Postal address

David Puchalla / puchalla.pro  
c/o Block Services  
Stuttgarter Str. 106  
70736 Fellbach  
Germany

The address may be published only while the service contract is active and the alias puchalla.pro remains assigned to the account.

### Electronic contact

Primary public email:

`admin@puchalla.email`

LinkedIn remains a secondary profile link, not the primary contact mechanism.

## 4. Explicit exclusions

The public site must not use or imply ownership of, appointment by or affiliation with a public authority unless independently verified.

The following test/account alias must not be published as a provider, organisation, authority or credential:

- Bundesamt für Sicherheit und Informationstechnik (Institution oeae5)
- BSI David Puchalla

Reason: a postal alias or test database identifier does not establish a legal organisation, public mandate, institutional affiliation or ownership.

Third-party firms connected to an account for testing or data access must not appear as the owner or operator of puchalla.pro unless there is a current, documented contractual role that requires disclosure.

## 5. Information architecture

### Main navigation

- Startseite
- Leistungen
- webOwie
- Zertifikate
- Research
- Kontakt

### Footer

- Kontakt
- Impressum
- Datenschutz
- GitHub
- LinkedIn
- ORCID

## 6. Contact page

Create `/kontakt` as a first-party page.

### Required fields

- Name
- Email
- Subject/category
- Message

### Optional fields

- Company
- Telephone
- Project URL

### Categories

- Strategic digital consulting
- Social media and content
- SEO/SEM
- Sales and conversion
- AI and automation
- webOwie
- Research/journalistic request
- Other

### UX requirements

- clear validation messages
- explicit success and failure states
- no forced newsletter consent
- no Google reCAPTCHA
- privacy notice linked immediately below the form
- accessible labels and keyboard operation

## 7. Contact-form architecture

Implement a Next.js route handler at `/api/contact`.

### Processing flow

1. Client validates required fields.
2. Server validates and normalises all input again.
3. Honeypot and request-rate controls reject automated abuse.
4. Server sends the message through SMTP configured only through environment variables.
5. The browser receives a minimal success/error response.
6. Full message content is not written to application logs.

### Environment variables

- `CONTACT_SMTP_HOST`
- `CONTACT_SMTP_PORT`
- `CONTACT_SMTP_USER`
- `CONTACT_SMTP_PASSWORD`
- `CONTACT_FROM`
- `CONTACT_TO`

`CONTACT_TO` should point to an address controlled by David Puchalla.

## 8. Impressum page

Create `/impressum` with a conservative, fact-based structure.

### Core content

- provider: David Puchalla
- business designation: puchalla.pro
- postal address using the active c/o service
- email address
- responsible person for journalistic-editorial content where applicable

### Conditional fields

Include only when verified:

- telephone number
- VAT ID
- economic identification number
- commercial register and register number
- supervisory authority
- professional chamber

Do not invent missing registration or tax data.

## 9. Privacy page

Create `/datenschutz` covering at least:

- controller identity and contact details
- Vercel hosting and server logs
- contact-form processing
- email communication
- Vercel Analytics if actually enabled
- external links to GitHub, LinkedIn, ORCID, Clarivate/Web of Science and Google Drive
- legal bases
- storage periods or determination criteria
- data-subject rights
- complaint authority

No cookie banner should be added unless the deployed site actually uses non-essential cookies or comparable tracking that requires consent.

## 10. Ownership and branding

All visible ownership signals must point to puchalla.pro and David Puchalla:

- page metadata
- structured data
- footer copyright
- contact sender identity
- repository links
- legal pages
- favicon and social preview

Remove any wording that makes an external development firm, database provider, postal service or test integration appear to own or operate the site.

Recommended footer line:

> © 2026 David Puchalla · puchalla.pro · Systeme. Strategien. Kontrolle.

## 11. Visual design

Use an accessible light-first design with a dark webOwie technology section.

### Light surfaces

- page background: warm white or very light grey
- cards: white
- body text: dark anthracite
- secondary text: sufficiently high-contrast grey
- primary action: puchalla.pro blue

### Dark surfaces

Reserve dark styling for:

- webOwie product demonstration
- technology diagrams
- selected research/OSINT components

This preserves the technical identity without making the full site unreadable.

## 12. Certificate integration

Retain the existing searchable certificate data but improve it with:

- issuer logos from official sources where licence and linking permit
- individual certificate detail routes
- original-document and verification links kept separate
- issuer explanation
- credential ID
- issue date
- related service areas

ResearcherID must be described as a Web of Science researcher identifier operated by Clarivate, not as an academic degree or certificate.

## 13. webOwie search integration

Phase 1:

- local search over services, certificates, projects and research metadata

Phase 2:

- optional webOwie API escalation for semantic search and deeper research

The public site must remain usable when the webOwie service is unavailable.

## 14. Error handling

- contact failures produce a generic user-facing message without exposing SMTP details
- server logs contain error class and request ID, not message bodies
- external certificate/document links receive clear unavailable states
- webOwie API failures fall back to local results

## 15. Testing

### Functional

- contact validation
- successful SMTP delivery
- rate limiting
- honeypot rejection
- legal-page routing
- footer and navigation links
- certificate search and filters

### Security/privacy

- HTML/script injection attempts
- oversized payloads
- malformed email addresses
- log inspection for personal message content
- environment variables excluded from source control

### Accessibility

- keyboard navigation
- focus visibility
- form labels and errors
- colour contrast
- mobile layout

## 16. Implementation boundary

Implementation may proceed after confirmation that:

1. the Anschrift.net service is currently active;
2. puchalla.pro remains assigned as an accepted postal alias;
3. `admin@puchalla.email` is the intended public contact address;
4. no additional verified company/register/VAT data must be included.
