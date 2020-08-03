import React from "react"
import "./style.scss"
import mockbackWhite from "../../assets/mockback_white.svg"
import mockbackBlack from "../../assets/mockback_black.svg"
import { Link } from "gatsby"

interface Props {
  black?: boolean
}

export default function HeaderSection(props: Props) {
  return (
    <div className="header-section">
      <Link to="/" title="Go to landing page">
        <img
          className="logo"
          src={props.black ? mockbackBlack : mockbackWhite}
          alt="Mockback logo"
        />
      </Link>
    </div>
  )
}
