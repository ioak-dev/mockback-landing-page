import React, { ReactNode } from "react"
import "./styles/oak-button.scss"

interface Props {
  icon?: string // points to "mat" material icon
  faIcon?: string
  svg?: string
  action?: any
  variant?:
    | "block"
    | "outline"
    | "appear"
    | "disappear"
    | "regular"
    | "disabled"
    | "drama"
  theme?: "primary" | "secondary" | "default"
  darkMode?: boolean
  children?: ReactNode
}

const OakButton = (props: Props) => {
  const getStyle = () => {
    let style = props.theme ? props.theme : ""
    style += props.darkMode ? "" : " light"
    style += props.variant ? ` ${props.variant}` : ""

    if (!props.children) {
      style += " icon"
    }

    return style
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={`oak-button ${getStyle()}`} onClick={props.action}>
      <div className="button-label-container">
        {props.faIcon && <i className={props.faIcon} />}
        {props.children && props.children}
      </div>
    </button>
  )
}

export default OakButton
