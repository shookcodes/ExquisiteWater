import React from "react"
import Header from "../components/header.js"
import KidsAtPumps from "../images/kids-at-pumps.jpg"
import KidsAtPumpsSmall from "../images/kids-at-pumps-small.jpg"
import WaterBagSmall from "../images/water-bag-small.jpg"
import { Link } from "gatsby"

export default () =>
    <div class='container'>
        <Header />
        <div class="content-container">
            <div class="hero-container">
                <img class="hero-image-small" src={WaterBagSmall} />
                <img class="hero-image-medium" src={KidsAtPumpsSmall} />
                <img class="hero-image" src={KidsAtPumps} />
                <div class="hero-info">
                    <span class="hero-text">Everyone deserves access to clean drinking water.</span>

                    <Link class="hero-cta-button" to="/donate/" activeClassName="cta-button-active">Join Our Cause</Link>
                </div>
            </div>
        </div>
    </div>
