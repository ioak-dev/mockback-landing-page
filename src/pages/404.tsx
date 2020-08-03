import React from "react"

import SEO from "../components/seo"
import HeaderSection from "../components/HeaderSection"
import FooterSection from "../components/FooterSection"
import CopyrightSection from "../components/CopyrightSection"
import "./style.scss"

const NotFoundPage = () => (
  <div className="page-404">
    <SEO title="404: Not found" />
    <div className="page-404--container">
      <HeaderSection black />
      <div className="column-layout">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist...</p>
      </div>
      <div>
        <FooterSection />
        <CopyrightSection />
      </div>
    </div>
  </div>
)

export default NotFoundPage
