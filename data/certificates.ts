export type Certificate = {
  title: string
  issuer: string
  category: "Cybersecurity" | "Data & OSINT" | "Marketing" | "Management & Sales" | "Law & Compliance" | "Education"
  date: string
  url: string
  credentialId?: string
  source: "Google Drive" | "Verification" | "Profile"
}

export const certificateCollectionUrl =
  "https://drive.google.com/file/d/1wnK540HeIFLKPMvd3l9HUcT0YIqh9aww/view"

export const certificates: Certificate[] = [
  {
    title: "Certificate of Completion: OSINT",
    issuer: "Online course certificate",
    category: "Data & OSINT",
    date: "Certificate record",
    url: "https://drive.google.com/file/d/1sjxV1T2SUaNQBusj__7RQ4K5DIclGRac/view",
    source: "Google Drive",
  },
  {
    title: "Certificate of Completion: Data Cleaning",
    issuer: "Online course certificate",
    category: "Data & OSINT",
    date: "Certificate record",
    url: "https://drive.google.com/file/d/1u-Ojs02PXG90_fJoUQzU1xRWZU0ea-j0/view",
    source: "Google Drive",
  },
  {
    title: "Cyberkriminalität und digitale Strafverfolgung",
    issuer: "Course participation record",
    category: "Cybersecurity",
    date: "2025",
    url: "https://drive.google.com/file/d/1y86dz6ULSEcRTpn9cQtzCHhl9PxdlGBp/view",
    source: "Google Drive",
  },
  {
    title: "Digitaler Selbstschutz 1: Souveräner Umgang mit Zugangsdaten",
    issuer: "Technische Hochschule Lübeck / FutureLearnLab",
    category: "Cybersecurity",
    date: "September 2025",
    url: "https://drive.google.com/file/d/15bLZSNH90MMmr9POYSSTtHPHbmDl1OwW/view",
    credentialId: "sha256$9a6f2fb0d4db18312cabb131dd4b8bb4b2567b0c6eb9aefa4749206baca2124f",
    source: "Google Drive",
  },
  {
    title: "Digitaler Selbstschutz 2",
    issuer: "Technische Hochschule Lübeck / FutureLearnLab",
    category: "Cybersecurity",
    date: "2025",
    url: "https://drive.google.com/file/d/1LwubbheAVwipnz7cyVI53Sb-MvAj7wVG/view",
    source: "Google Drive",
  },
  {
    title: "EU-Zertifikat Systemarchitekt",
    issuer: "Certificate record",
    category: "Education",
    date: "2026",
    url: "https://drive.google.com/file/d/17-9DTwrQRozyKQpAEreI29LFelbneoJW/view",
    source: "Google Drive",
  },
  {
    title: "Social Media Management",
    issuer: "Online course certificate",
    category: "Marketing",
    date: "Certificate record",
    url: "https://drive.google.com/file/d/1rfwyzIj5ywljwYnMOSjKnR9VRcQuOJBC/view",
    source: "Google Drive",
  },
  {
    title: "Suchmaschinenmarketing",
    issuer: "Technische Hochschule Lübeck / FutureLearnLab",
    category: "Marketing",
    date: "August 2025",
    url: "https://drive.google.com/file/d/1r8cGEDj_bnzBcdT6ziNhyVRkVNSKHJCe/view",
    credentialId: "0xb26201858f14e8af2c31a8ab8ffb1aa7288d3b22b0ce24fd1be0d83ba37116e1",
    source: "Google Drive",
  },
  {
    title: "Persuasive Design",
    issuer: "Technische Hochschule Lübeck / FutureLearnLab",
    category: "Marketing",
    date: "August 2025",
    url: "https://drive.google.com/file/d/1DKQAu5NiUuXZtXm1E2j3ew416vJawqY-/view",
    credentialId: "0x38db29295554262a1dfdb1e553c83cf9fb9577c1",
    source: "Google Drive",
  },
  {
    title: "Digitale Zertifikate",
    issuer: "Technische Hochschule Lübeck / FutureLearnLab",
    category: "Education",
    date: "2025",
    url: "https://drive.google.com/file/d/1jYNNQi7dA7f_VTG4W7IlIguvZIcr8bMJ/view",
    source: "Google Drive",
  },
  {
    title: "Medien & Kommunikation",
    issuer: "Technische Hochschule Lübeck / FutureLearnLab",
    category: "Marketing",
    date: "October 2024",
    url: "https://drive.google.com/file/d/1D-UN5qeW4B0iYH3rh9-PXfXqWY3Yn7nn/view",
    credentialId: "https://futurelearnlab.de/hub/mod/ilddigitalcert/view.php?issuedid=428",
    source: "Google Drive",
  },
  {
    title: "Social Media Tools",
    issuer: "Technische Hochschule Lübeck / FutureLearnLab",
    category: "Marketing",
    date: "Certificate record",
    url: "https://drive.google.com/file/d/1Gge_SJsTj2PuQy0DDAimCFqGULw8NeFW/view",
    source: "Google Drive",
  },
  {
    title: "Recht im Vertrieb I",
    issuer: "FutureLearnLab",
    category: "Law & Compliance",
    date: "Certificate record",
    url: "https://drive.google.com/file/d/1MW3rssV7byVtS19hzkFD_nfd0DSo1ZTH/view",
    source: "Google Drive",
  },
  {
    title: "Recht im Vertrieb II",
    issuer: "FutureLearnLab",
    category: "Law & Compliance",
    date: "Certificate record",
    url: "https://drive.google.com/file/d/1b5SDCb7gntQQIPdO-C6n4SCjN2KU-CA3/view",
    source: "Google Drive",
  },
  {
    title: "IHK-Prüfungszeugnis",
    issuer: "Industrie- und Handelskammer",
    category: "Education",
    date: "Qualification record",
    url: "https://drive.google.com/file/d/1qpf84rPwFMuMm5rUp-36VRJpNw5523rw/view",
    source: "Google Drive",
  },
  {
    title: "Sales Management",
    issuer: "HubSpot Academy",
    category: "Management & Sales",
    date: "December 2022",
    url: "https://www.linkedin.com/in/davidpuchalla/",
    credentialId: "0d44ee64f6e54dde8d311aa84387a096",
    source: "Profile",
  },
  {
    title: "Frictionless Sales",
    issuer: "HubSpot Academy",
    category: "Management & Sales",
    date: "December 2022",
    url: "https://www.linkedin.com/in/davidpuchalla/",
    credentialId: "2f5b4e61c4434c9aa710beaffd2de164",
    source: "Profile",
  },
]
