import React from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  data: {
    title: string
    description: string
    illustration: any
  }
}

export default function SectionTile(props: Props) {
  return (
    <div>
      <OakAnimateElement>
        <div className="feature-sectiontile">
          {/* <img src={require(`../../assets/${props.data.illustration}`)} /> */}
          <h3 className="heading--3">{props.data.title}</h3>
          <p>{props.data.description}</p>
        </div>
      </OakAnimateElement>
    </div>
  )
}
