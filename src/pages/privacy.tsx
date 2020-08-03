// If you don't want to use TypeScript you can delete this file!
import React from "react"
import SEO from "../components/seo"
import HeaderSection from "../components/HeaderSection"
import PrivacySection from "../components/PrivacyPage/PrivacySection"
import FooterSection from "../components/FooterSection"
import CopyrightSection from "../components/CopyrightSection"

const PrivacyPage = () => (
  <div className="page-privacy">
    <SEO title="Privacy policy" />
    <HeaderSection black />
    <PrivacySection />
    <FooterSection />
    <CopyrightSection />
  </div>
)

export default PrivacyPage
