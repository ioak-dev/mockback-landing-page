import React, { ReactNode, useEffect, useState } from "react"
import "./styles/oak-animate-element.scss"

interface Props {
  children?: ReactNode
  direction?: "down" | "up" | "right" | "left"
}

const OakAnimateElement = (props: Props) => {
  const [elementsToShow, setElementsToShow] = useState<any>()
  useEffect(() => {
    setElementsToShow(document.querySelectorAll(".show-on-scroll"))
    loop()
  }, [])

  const scroll =
    typeof window !== "undefined"
      ? window.requestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60)
        }
      : () => console.log("window not supported in SSR")

  const isElementInViewport = el => {
    // special bonus for those using jQuery
    // if (typeof jQuery === "function" && el instanceof jQuery) {
    //   el = el[0]
    // }
    var rect = el.getBoundingClientRect()
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight))
    )
  }

  const loop = () => {
    document
      .querySelectorAll(".oak-animate-element")
      .forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add("is-visible")
        } else {
          element.classList.remove("is-visible")
        }
      })

    scroll(loop)
  }
  return (
    <div className={`oak-animate-element ${props.direction || "up"}`}>
      {props.children}
    </div>
  )
}

export default OakAnimateElement
