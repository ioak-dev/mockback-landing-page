import React from "react"
import "./style.scss"
import content from "../../assets/content/DemoSection.json"
import OakButton from "../oakfly/OakButton"
import CallToAction from "../HeroSection/CallToAction"

export default function DemoSection() {
  const demo = () => {
    console.log("*** redirect to demo")
  }
  return (
    <div className="demo-section">
      <div className="demo-section--container">
        <div className="demo-section--container-content">
          <h3 className="heading--3">{content.tour.title}</h3>
          <p>{content.tour.description}</p>
          <CallToAction data={content.tour.callToAction} />
        </div>
        <hr />
        <div className="demo-section--container-content">
          <h3 className="heading--3">{content.cta.title}</h3>
          <p>{content.cta.description}</p>
          <CallToAction data={content.cta.callToAction} />
        </div>
      </div>
    </div>
  )
}
