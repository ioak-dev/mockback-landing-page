import React from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  data: {
    title: string
    description: string
    faIcon: any
  }
}

export default function SectionTile(props: Props) {
  return (
    <OakAnimateElement>
      <div className="key-sectiontile">
        <img
          src={require(`../../assets/${props.data.faIcon}`)}
          alt={props.data.title}
        />
        {/* <i className={props.data.faIcon} /> */}
        <div className="key-sectiontile--content">
          <h3 className="heading--3 key-sectiontile--content--heading">
            {props.data.title}
          </h3>
          <p>{props.data.description}</p>
        </div>
      </div>
    </OakAnimateElement>
  )
}
