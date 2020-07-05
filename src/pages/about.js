import React from "react";
import Image from "gatsby-image";
import Wrapper from "../components/wrapper";

import { FadeInSection } from "../components/fadeInAnimation.js"
import { IoIosWater } from "react-icons/io";
import { FaPeopleCarry } from "react-icons/fa";
import { GiWateringCan } from "react-icons/gi";
import Amanda from "../images/about-amanda.jpg";

function About() {
    return (
        <div className="panels" id="about-page">
            <div class="about-title">
                <h1>Our Story</h1>
            </div>

            <div className="about-content">
                <div className="about-column">
                    <Wrapper>
                        <p>
                            ExquisiteWater was founded in 2015 by Amanda Sunny, a
                            Nigerian-American environmental consultant (currently based in San
                            Jose, CA). After visiting Nigeria several times throughout her
                            life, she grew discouraged at the lack of water sanitation near
                            her mother's home village in south-eastern Nigeria.
            </p>
                        <p>
                            Amanda received her Master's Degree in Public Health in 2015, and
                            decided to use her knowledge and understanding to bring water
                            sanitation solutions to Nigeria. She has team members in Nigeria,
                            as well as across the United States. Together the ExquisiteWater
                            team aims to provide education, support, and community-maintained
              sanitization tools and methods to communities in need.{" "}
                        </p>
                    </Wrapper>
                </div>
                <div className="about-column">
                    <img className="about-image" src={Amanda} alt="Photo of Amanda" />
                </div>
            </div>
        </div>
    );
}

function Services() {
    return (
        <div className="panels" id="services">
            <h1>Our Services</h1>
            <div className="services">
                <FadeInSection>
                    <div className="column">
                        <div>
                            <span className="services-icon"><IoIosWater /></span>
                        </div>
                        <h2>Water Testing</h2>
                        <span>
                            We continuously test the water in the current sources that rural
                            villages supply their water from. We then bring our results to the
                            local leaders and governments and discuss solutions.
          </span>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="column">
                        <div>
                            <span className="services-icon"><GiWateringCan /></span>
                        </div>
                        <h2>Technology</h2>
                        <span>
                            We develop and improve existing water purification technologies to
                            enhance the sustainability and accessibility to water in rural
                            areas. Technologies include water boiling kits, ferrocement tanks,
                            and bio-char purification chambers.
          </span>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="column">
                        <div>
                            <span className="services-icon"><FaPeopleCarry /></span>
                        </div>
                        <h2>Community Support</h2>
                        <span>
                            We develop and maintain lasting relationships with communities and
                            provide continuous support by hosting training and townhouse events
                            to further education of health and water purification.
          </span>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
}

export { About, Services };
