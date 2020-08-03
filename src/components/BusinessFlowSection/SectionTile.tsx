import React from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  data: {
    title: string
    description: string
    svgIcon: any
  }
  step: number
  isLast: boolean
}

export default function SectionTile(props: Props) {
  return (
    <OakAnimateElement>
      <div className="business-flow-sectiontile">
        <div className="business-flow-sectiontile--image">
          <img src={require(`../../assets/${props.data.svgIcon}`)} />
        </div>
        <div className="business-flow-sectiontile--content">
          <h3 className="heading--3 business-flow-sectiontile--content--heading">
            {props.data.title}
          </h3>
          <p className="business-flow-sectiontile--content--description">
            {props.data.description}
          </p>
        </div>
      </div>
    </OakAnimateElement>
  )
}
