import { SiteHeader, SiteFooter } from "@/components/site-chrome"
import { Hero } from "@/components/hero"
import { AuthorityBar } from "@/components/authority-bar"
import { Pillars } from "@/components/pillars"
import { Dashboard } from "@/components/dashboard"
import { ContactClose } from "@/components/contact-close"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AuthorityBar />
        <Pillars />
        <Dashboard />
        <ContactClose />
      </main>
      <SiteFooter />
    </>
  )
}
