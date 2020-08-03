import React from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import CallToAction from "../HeroSection/CallToAction"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  data: {
    title: string
    description: string
  }
}
export default function SpecialitySection(props: Props) {
  return (
    <div className="speciality-section column-layout">
      <OakAnimateElement direction="right">
        <h2
          className="speciality-section--heading heading--2"
          dangerouslySetInnerHTML={{ __html: props.data.title }}
        />
      </OakAnimateElement>
      <OakAnimateElement direction="left">
        <div className="speciality-section--content">
          <p>{props.data.description}</p>
          {/* <CallToAction data={content.callToAction} /> */}
        </div>
      </OakAnimateElement>
    </div>
  )
}
