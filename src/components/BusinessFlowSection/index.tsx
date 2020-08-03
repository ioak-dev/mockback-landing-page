import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/BusinessFlowSection.json"

export default function BusinessFlowSection() {
  return (
    <div className="business-flow-section column-layout">
      <h2 className="business-flow-section--heading heading--2">
        How it works
      </h2>
      <div className="business-flow-section--container">
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
