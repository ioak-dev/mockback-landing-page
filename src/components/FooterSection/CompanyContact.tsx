import React from "react"
import "./style.scss"

interface Props {
  data: {
    faIcon: string
    label: string
  }[]
}

export default function CompanyContact(props: Props) {
  return (
    <div className="company-contact">
      <div className="company-contact--title">Contact information</div>
      <div className="company-contact--contact">
        {props.data.map((contact, index) => (
          <div className="company-contact--contact--mode" key={index}>
            <i className={contact.faIcon} />
            <p>{contact.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
