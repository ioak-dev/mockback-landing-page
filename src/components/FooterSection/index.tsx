import React from "react"
import "./style.scss"
import content from "../../assets/content/FooterSection.json"
import CompanyProfile from "./CompanyProfile"
import FooterLinks from "./FooterLinks"
import CompanyContact from "./CompanyContact"

export default function FooterSection() {
  return (
    <div className="footer-section">
      <div className="footer-section--container">
        <CompanyProfile data={content.companyProfile} />
        <CompanyContact data={content.contact} />
        <FooterLinks data={content.links} />
      </div>
    </div>
  )
}
