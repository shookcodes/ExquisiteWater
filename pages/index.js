import React from "react"
import { CTAButtonOrange, CTAButtonBlue } from "../components/cta-button.js"
import { FaAngleDown } from 'react-icons/fa'
import { Header, Footer } from "../components/header.js"
import KidsAtPumps from "../images/kids-at-pumps.jpg"
import KidsAtPumpsMedium from "../images/kids-at-pumps-medium.jpg"
import KidsAtPumpsSmall from "../images/kids-at-pumps-small.jpg"
import WaterBagSmall from "../images/water-bag-small.jpg"
import IsuVideo from "../videos/isuniocha-no-sound.mp4"


export default () =>

    <div class='container'>
        <Header />
        <div class="content-container">

            <div class="panels" id="hero-container">
                <img class="hero-image-small" src={WaterBagSmall} />
                <img class="hero-image-tablet" src={KidsAtPumpsSmall} />
                <img class="hero-image-medium" src={KidsAtPumpsMedium} />
                <img class="hero-image" src={KidsAtPumps} />
                <div class="hero-info">
                    <span class="hero-text">Everyone deserves access to clean drinking water.</span>

                    <CTAButtonOrange class="hero-cta" text="Help Our Cause" to="/donate" />
                </div>
                <div class="hero-overflow-hider" />
            </div>
            <div class="panels" id="content-block">
                <span class="block-text"><h2>Over 80% of Nigerians don't have access to safe water.</h2>
                    <br></br>
                    <p>Our mission is to change that.</p>
                </span>
                <FaAngleDown class="down" />
            </div>
            <div class="panels" id="content-video">
                <video
                    className="video-player"

                    loop
                    muted
                    autoPlay
                >
                    <source
                        src={IsuVideo}
                        type="video/mp4"
                        class="isu-video"
                    />
                    Your browser does not support HTML5 video.
                </video>
                <div class="video-info">
                    <span class="video-text"><p>We build lasting relationships with rural communities in Nigeria to implement and sustain water sanitation solutions.</p></span>
                    <CTAButtonBlue class="video-cta" text="Learn More" to="/about" />
                </div>
            </div>
            <Footer class="front-page-footer" />
        </div>


    </div>

