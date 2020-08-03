import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/FeatureSection.json"

export default function FeatureSection() {
  return (
    <div className="feature-section">
      <h2 className="heading--2 feature-section--heading">Features</h2>
      <div className="feature-section--container column-layout">
        {content.data.map(item => (
          <SectionTile data={item} key={item.title} />
        ))}
      </div>
    </div>
  )
}
