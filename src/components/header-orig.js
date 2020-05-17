import React from "react"
import { Link } from "gatsby"

export default function Header() {
    return (
        <div class='header'>
            <div class='header-title'><h1 class="title">ExquisiteWater</h1></div>
            <div class='header-links'>
                <Link class="link" to="/" activeClassName="link-active">Home</Link>
                <Link class="link" to="/about/" activeClassName="link-active">About Us</Link>
                <Link class="link" to="/donate/" activeClassName="link-active">Donate</Link>
                <Link class="link" to="/contact/" activeClassName="link-active">Contact</Link>
            </div>
        </div>
    )
}