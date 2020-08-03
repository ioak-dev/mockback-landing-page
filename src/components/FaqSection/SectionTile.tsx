import React from "react"
import "./style.scss"

interface Props {
  data: {
    title: string
    description: string
  }
}

export default function SectionTile(props: Props) {
  return (
    <div className="sectiontile">
      <p className="sectiontile--faq-title">{props.data.title}</p>
      <p dangerouslySetInnerHTML={{ __html: props.data.description }} />
    </div>
  )
}
