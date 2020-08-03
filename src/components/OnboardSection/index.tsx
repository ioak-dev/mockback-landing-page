import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/OnboardSection.json"

export default function OnboardSection() {
  return (
    <div className="onboard-section">
      <h2 className="onboard-section--heading heading--2">Getting Started</h2>
      <div className="onboard-section--container">
        {content.data.map((item, index) => (
          <SectionTile
            data={item}
            key={item.title}
            step={index + 1}
            isLast={content.data.length === index + 1}
          />
        ))}
      </div>
    </div>
  )
}
