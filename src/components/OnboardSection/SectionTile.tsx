import React from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  data: {
    title: string
    description: string
  }
  step: number
  isLast: boolean
}

export default function SectionTile(props: Props) {
  return (
    <div className="onboard-sectiontile">
      <div className="onboard-sectiontile--stepnumber">
        <div>{props.step}</div>
      </div>
      <hr className="desktop-only" />
      <div className="desktop-only">
        <OakAnimateElement direction="right">
          <div className="onboard-sectiontile--content">
            <h4 className="heading--4 onboard-sectiontile--content--heading">
              {props.data.title}
            </h4>
            <p>{props.data.description}</p>
          </div>
        </OakAnimateElement>
      </div>
      <div className="mobile-only">
        <OakAnimateElement direction="down">
          <div className="onboard-sectiontile--content">
            <h4 className="heading--4 onboard-sectiontile--content--heading">
              {props.data.title}
            </h4>
            <p>{props.data.description}</p>
          </div>
        </OakAnimateElement>
      </div>
      {!props.isLast && <hr className="mobile-only" />}
    </div>
  )
}
