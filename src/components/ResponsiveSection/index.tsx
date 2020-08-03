import React from "react"
import "./style.scss"
import content from "../../assets/content/ResponsiveSection.json"
import OakAnimateElement from "../oakfly/OakAnimateElement"
import screenshot from "../../assets/screenshot/macbookpro.png"

export default function ResponsiveSection() {
  return (
    <div className="responsive-section">
      <div className="responsive-section--content">
        <OakAnimateElement>
          <div className="responsive-section--content--container">
            <h2 className="responsive-section--content--container--heading heading--2">
              {content.title}
            </h2>
            <div className="responsive-section--content--container--description">
              <p className="heading--4">{content.description}</p>
            </div>
          </div>
        </OakAnimateElement>
      </div>
      <img
        className="company-profile--logo--oneauth"
        src={screenshot}
        alt="Responsive user interface"
      />
    </div>
  )
}
