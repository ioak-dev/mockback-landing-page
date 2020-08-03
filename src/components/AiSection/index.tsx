import React from "react"
import "./style.scss"
import content from "../../assets/content/AiSection.json"
import CallToAction from "../HeroSection/CallToAction"
import OakAnimateElement from "../oakfly/OakAnimateElement"
// import aiSection from "../../assets/ai_section.png"
import aiSection from "../../assets/artificial-intelligence.svg"

export default function AiSection() {
  return (
    <div className="ai-section">
      {/* <div className="ai-section--image"> */}
      <img
        className="company-profile--logo--oneauth"
        src={aiSection}
        alt="Powered by Artificial intelligence"
      />
      {/* </div> */}
      <div className="ai-section--content">
        <OakAnimateElement>
          <div className="ai-section--content--container">
            <h2 className="ai-section--content--container--heading heading--2">
              {content.title}
            </h2>
            <div className="ai-section--content--container--description">
              <p className="heading--4">{content.description}</p>
              {/* <CallToAction data={content.callToAction} /> */}
            </div>
          </div>
        </OakAnimateElement>
      </div>
    </div>
  )
}
