import React from "react"

import SEO from "../components/seo"
import HeaderSection from "../components/HeaderSection"
import TermsSection from "../components/TermsPage/TermsSection"
import FooterSection from "../components/FooterSection"
import CopyrightSection from "../components/CopyrightSection"

const TermsPage = () => (
  <div className="page-terms">
    <SEO title="Terms and conditions" />
    <HeaderSection black />
    <TermsSection />
    <FooterSection />
    <CopyrightSection />
  </div>
)

export default TermsPage
