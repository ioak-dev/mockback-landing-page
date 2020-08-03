import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/KeySection.json"

export default function KeySection() {
  return (
    <div className="key-section column-layout">
      <div className="key-section--heading">
        <h2 className="heading--2">
          {/* Key<span className="emphasize-text"> features </span>that sets us
          apart */}
          Key features
        </h2>
      </div>
      <div className="key-section--container">
        {content.data.map(item => (
          <SectionTile data={item} key={item.title} />
        ))}
      </div>
    </div>
  )
}
