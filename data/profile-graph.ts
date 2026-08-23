export type ProfileGraphEntry = {
  id: string
  title: string
  subtitle?: string
  period?: string
  detail: string
  href?: string
}

export const profileIdentity = {
  id: "david-puchalla",
  title: "David Puchalla",
  subtitle: "Systems Architect · Independent Researcher · Founder of webOwie",
  detail:
    "Systems architecture, open-source intelligence, cybersecurity, AI, automation, digital strategy and evidence-based research.",
  href: "/",
} satisfies ProfileGraphEntry

export const additionalQualificationEntries: ProfileGraphEntry[] = [
  {
    id: "qualification-iso-27001",
    title: "ISO/IEC 27001:2022 Information Security Associate™",
    subtitle: "SkillFront",
    period: "16.08.2026",
    detail: "Certification ID: 99083765767087. Dokumentierter Nachweis der Information-Security-Associate-Zertifizierung.",
    href: "/certificates/",
  },
  {
    id: "qualification-iso-20000",
    title: "ISO/IEC 20000 IT Service Management Associate™",
    subtitle: "SkillFront",
    period: "16.08.2026",
    detail: "Certification ID: 97831472998834. Dokumentierter Nachweis der IT-Service-Management-Associate-Zertifizierung.",
    href: "https://www.linkedin.com/posts/davidpuchalla_iso20000-itsm-itservicemanagement-activity-7494752357210169344-xFKG",
  },
]

export const careerEntries: ProfileGraphEntry[] = [
  {
    id: "career-puchalla-pro",
    title: "Freiberuflicher Systemarchitekt & Strategischer Unternehmensberater",
    subtitle: "puchalla.pro & bnd.zone",
    period: "03/2024 – heute",
    detail: "Open-Source-Infrastrukturen, CRM/DMS/Grid-Systeme, OSINT/SOCMINT, digitale Strategie und Automatisierung.",
  },
  {
    id: "career-ackermann",
    title: "IT-Berater",
    subtitle: "Hausverwaltung Ackermann",
    period: "09/2023 – 03/2024",
    detail: "Digitalisierung, Open-Source-CRM/DMS, Backup- und Informationssicherheitsstrategien.",
  },
  {
    id: "career-sky",
    title: "Shopleiter / Sky Sales Advisor",
    subtitle: "Sky Deutschland",
    period: "06/2022 – 12/2023",
    detail: "Vertriebsstruktur, KPI-basierte Steuerung und B2B/B2C-Vertrieb.",
  },
  {
    id: "career-agency",
    title: "Selbstständiger Handelsvertreter",
    subtitle: "Puchalla Marketing Agency",
    period: "08/2018 – 05/2022",
    detail: "Direktvertrieb, B2B/B2C-Akquise, Energie, Telekommunikation und Fundraising.",
  },
  {
    id: "career-lichtblick",
    title: "Handelsvertreter §84 HGB",
    subtitle: "LichtBlick SE",
    period: "04/2018 – 08/2018",
    detail: "Kundenaufbau, Verkaufs- und Marketingstrategien sowie Vertragsabschlüsse.",
  },
  {
    id: "career-nobily",
    title: "Operativer Logistik-Support & Auftragsabwicklung",
    subtitle: "Nobily GmbH",
    period: "01/2016 – 12/2016",
    detail: "Auftragssteuerung, Bestandsmanagement, Kommissionierung und Versandvorbereitung.",
  },
  {
    id: "career-iltrans",
    title: "Disponent für internationale LKW-Verkehre",
    subtitle: "Iltrans Deutschland GmbH",
    period: "01/2014 – 09/2014",
    detail: "Kapazitäts-, Preis- und Auftragssteuerung sowie Zoll- und Logistikprozesse.",
  },
  {
    id: "career-sat-attack",
    title: "Kaufmännischer Projektmanager & Vertriebsspezialist",
    subtitle: "Fenster Germany c/o SAT ATTACK GmbH",
    period: "06/2013 – 12/2013",
    detail: "Einkauf, Verkauf, Kalkulation, Baustellenlogistik und Projektschnittstellen.",
  },
  {
    id: "career-bilstein",
    title: "Mitarbeiter Qualitätssicherung & Wareneingang",
    subtitle: "Bilstein Group",
    period: "01/2008 – 12/2008",
    detail: "Wareneingangskontrolle, Qualitätsprüfung und EDV-gestützte Dokumentation.",
  },
]

export const educationEntries: ProfileGraphEntry[] = [
  {
    id: "education-logistics",
    title: "Fachkraft für Lagerlogistik",
    subtitle: "Städtische Kaufmannsschule Hagen / Südwestfälische IHK zu Hagen",
    period: "08/2010 – 06/2013",
    detail:
      "Dreijährige Berufsausbildung mit Verbundanteilen bei WILA Lichttechnik, der Kreishandwerkerschaft Iserlohn und SAT ATTACK. IHK-Prüfungszeugnis vom 25.06.2013.",
  },
]

export const skillEntries: ProfileGraphEntry[] = [
  { id: "skill-system-architecture", title: "Systems Architecture", detail: "Modulare Infrastruktur, Systemintegration und technische Gesamtarchitektur." },
  { id: "skill-open-source", title: "Open Source", detail: "Linux-, Container- und offene Infrastruktur-Stacks sowie reproduzierbare Deployments." },
  { id: "skill-osint", title: "OSINT & SOCMINT", detail: "Recherche, Verifikation, digitale Spuren, Social-Media-Analyse und Relationship Mapping." },
  { id: "skill-cybersecurity", title: "Cybersecurity", detail: "Informationssicherheit, digitale Eigensicherung, Risikoanalyse und Incident-orientierte Architektur." },
  { id: "skill-ai", title: "Artificial Intelligence", detail: "Lokale KI, Agenten, Retrieval, Analyseautomatisierung und AI-gestützte Research-Workflows." },
  { id: "skill-data-viz", title: "Data Visualization & Graphs", detail: "Interaktive Dashboards, Beziehungsgraphen und visuelle Systemmodelle." },
  { id: "skill-automation", title: "Automation", detail: "Prozessautomatisierung, Datenpipelines und wiederholbare technische Workflows." },
  { id: "skill-crm-dms", title: "CRM & DMS", detail: "Digitale Geschäftsprozesse, Dokumentenmanagement und strukturierte Informationssysteme." },
  { id: "skill-sales", title: "Sales Strategy", detail: "B2B/B2C-Vertriebsarchitektur, KPI-Steuerung, Akquise und Verkaufspsychologie." },
  { id: "skill-seo", title: "SEO, SEA & Marketing Automation", detail: "Suchmaschinenmarketing, digitale Kampagnen und datengetriebene Marketing-Automation." },
  { id: "skill-logistics", title: "Supply Chain & Logistics", detail: "Lagerlogistik, Disposition, Warenfluss, Bestandsführung und operative Lieferketten." },
  { id: "skill-research", title: "Digital Research", detail: "Reproduzierbare Recherche, Datenanalyse und evidenzbasierte Entscheidungsunterstützung." },
]

export const researchEntries: ProfileGraphEntry[] = [
  { id: "research-webowie-search", title: "webOwie Search Engine", subtitle: "Research output", detail: "Search- und Research-Komponente für den modularen webOwie-Stack." },
  { id: "research-webowie-platform", title: "webOwie Intelligence Platform", subtitle: "Research output", detail: "Modulare Intelligence-Plattform für OSINT, AI, Cybersecurity, Automatisierung und Analyse." },
  { id: "research-dashboard", title: "webOwie Dashboard", subtitle: "Research output", detail: "Interaktive Oberfläche für Systeme, Datenquellen und Analyseergebnisse." },
  { id: "research-webowie-ai", title: "webOwie AI", subtitle: "Research output", detail: "AI-Komponenten für lokale Analyse-, Retrieval- und Agenten-Workflows." },
  { id: "research-osint-framework", title: "OSINT Framework", subtitle: "Research output", detail: "Werkzeuge und Methoden für strukturierte Open-Source-Intelligence-Workflows." },
  { id: "research-intelligence-dashboard", title: "Research Intelligence Dashboard", subtitle: "Research output", detail: "Visualisierung und Zusammenführung reproduzierbarer Research-Daten." },
  { id: "research-docker-stack", title: "Docker Intelligence Stack", subtitle: "Research output", detail: "Containerisierte Infrastruktur für Research-, Search- und Intelligence-Dienste." },
  { id: "profile-orcid", title: "ORCID", subtitle: "0009-0002-0223-0929", detail: "Persistente wissenschaftliche Identität.", href: "https://orcid.org/0009-0002-0223-0929" },
  { id: "profile-github", title: "GitHub", subtitle: "@puchadave", detail: "Öffentliche Repositories, Software und technische Projektartefakte.", href: "https://github.com/puchadave" },
  { id: "profile-linkedin", title: "LinkedIn", subtitle: "David Puchalla", detail: "Berufliches Profil und öffentliche Fachbeiträge.", href: "https://www.linkedin.com/in/davidpuchalla/" },
]
