import React from "react"
import { Link } from "gatsby"
import { FaBars } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'



export default function Header() {
    return (
        <div class='header'>

            <div class='header-title'><h1 class="title">ExquisiteWater</h1></div>
            <a href="#main-menu" class="menu-toggle" aria-label="Open main menu">
                <FaBars class="menu-icon" />
            </a>
            <nav id="main-menu" class="main-menu">
                <a href="#" class="menu-close">
                    <IoMdClose class="menu-x" />
                </a>
                <ul class="header-links">
                    <Link class="link" to="/" href="#" activeClassName="link-active">Home</Link>
                    <Link class="link" to="/about/" href="#" activeClassName="link-active">About Us</Link>
                    <Link class="link" to="/contact/" href="#" activeClassName="link-active">Contact</Link>
                    <Link class="donate-link" id="donate-header" to="/donate/" href="#" activeClassName="donate-link-active">Donate</Link>


                </ul>
            </nav>
            <a href="#main-menu-toggle"
                class="backdrop"
                tabindex="-1"
                aria-hidden="true" hidden></a>
        </div>
    )
}