import React from "react"
import { Link } from "gatsby"
import CTAStyles from "./cta-button.scss"

export const CTAButtonOrange =
    (function (props) {
        return (

            <Link to={props.to} href="#" className="cta-button-orange"> {props.text}</Link>
        )
    })

export const CTAButtonBlue =
    (function (props) {
        return (

            <Link to={props.to} href="#" className="cta-button-blue"> {props.text}</Link>
        )
    })