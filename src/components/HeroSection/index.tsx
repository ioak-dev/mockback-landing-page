import React from "react"
import "./style.scss"
import OakButton from "../oakfly/OakButton"
import HeaderSection from "../HeaderSection"
import CallToAction from "./CallToAction"
import HeroContent from "./HeroContent"
import Illustration from "./Illustration"
import content from "../../assets/content/HeroSection.json"

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-section--container column-layout">
        <HeaderSection />
        <div className="hero-section--container--content">
          <Illustration illustration={content.illustration} />
          <HeroContent data={content} />
        </div>
      </div>
    </div>
  )
}
