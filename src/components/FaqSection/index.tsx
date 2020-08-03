import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/FaqSection.json"

export default function FaqSection() {
  return (
    <div className="faq-section">
      <div className="faq-section--container column-layout">
        <h2 className="heading--2 faq-section--container--title">
          Common questions
        </h2>
        {content.data.map(item => (
          <SectionTile data={item} key={item.title} />
        ))}
      </div>
    </div>
  )
}
