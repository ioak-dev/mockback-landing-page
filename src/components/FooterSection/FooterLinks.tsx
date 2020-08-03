import React from "react"
import "./style.scss"
import FooterLinkGroup from "./FooterLinkGroup"

interface Props {
  data: {
    group: string
    list: {
      href: string
      label: string
    }[]
  }[]
}

export default function FooterLinks(props: Props) {
  return (
    <div className="footer-links">
      {props.data.map((item, index) => (
        <FooterLinkGroup data={item} key={index} />
      ))}
    </div>
  )
}
