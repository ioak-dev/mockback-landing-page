import React, { useState } from "react"
import "./style.scss"
import SectionTile from "./SectionTile"
import content from "../../assets/content/ContactSection.json"
import OakButton from "../oakfly/OakButton"
import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <div className="contact-section">
      <div className="contact-section--container">
        <div className="contact-section--container--content">
          <h2 className="heading--2">{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <div className="contact-section--container--form">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
