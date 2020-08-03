import React from "react"
import "./style.scss"
import content from "../../assets/content/FaqSection.json"
import { Link } from "gatsby"

export default function CopyrightSection() {
  return (
    <div className="copyright-section">
      <div className="copyright-section--copyright desktop-only">
        © 2020 ioak.io
      </div>
      <span className="desktop-only">|</span>
      <Link to="/terms" title="Terms and conditions">
        Terms and conditions
      </Link>
      <span>|</span>
      <Link to="/privacy" title="Privacy policy">
        Privacy policy
      </Link>
    </div>
  )
}
