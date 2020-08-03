import React from "react"
import "./style.scss"

interface Props {
  illustration: string
}
export default function Illustration(props: Props) {
  return (
    <div className="hero-illustration">
      <img src={require(`../../assets/${props.illustration}`)} />
    </div>
  )
}
