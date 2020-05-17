import React from "react"
import { Link } from "gatsby"


export default function CTAButton(props) {
    return (

        <Link to={props.to} href="#" className="cta-button"> {props.text}</Link>
    )
}