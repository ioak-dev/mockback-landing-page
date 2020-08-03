import React from "react"
import "./style.scss"
import { Link } from "gatsby"

interface Props {
  data: {
    group: string
    list: {
      href: string
      label: string
    }[]
  }
}

export default function FooterLinkGroup(props: Props) {
  return (
    <div className="footer-link-group">
      <div className="footer-link-group--title">{props.data.group}</div>
      <div className="footer-link-group--content">
        {props.data.list.map((item, index) => (
          <Link to={item.href} key={index} title={item.label}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
