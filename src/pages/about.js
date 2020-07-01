import React from "react";
import Image from "gatsby-image";
import Wrapper from "../components/wrapper";
import Amanda from "../images/about-amanda.jpg";
import { IoIosWater } from '/react-icons/io';





function About() {

    return (

        <div className="panels" id="about-page">
            <div class="about-title"><h1>Our Story</h1></div>

            <div className="about-content">
                <div className="about-column">
                    <Wrapper>
                        <p>ExquisiteWater was founded in 2015 by Amanda Sunny, a Nigerian-American environmental consultant (currently based in San Jose, CA). After visiting Nigeria several times throughout her life, she grew discouraged at the lack of water sanitation near her mother's home village in south-eastern Nigeria.
                </p>
                        <p>Amanda received her Master's Degree in Public Health in 2015, and decided to use her knowledge and understanding to bring water sanitation solutions to Nigeria. She has team members in Nigeria, as well as across the United States. Together the ExquisiteWater team aims to provide education, support, and community-maintained sanitization tools and methods to communities in need. </p>
                    </Wrapper>
                </div>
                <div className="about-column">
                    <img className="about-image" src={Amanda} alt="Photo of Amanda" />
                </div>
            </div>



        </div>

    )
}

function Services() {
    return (
        <div className="panels" id="services">
            <h2>Our Services</h2>
            <div>
                <span><IoIosWater /></span>
                <span>Water Testing</span>
            </div>
            <div>
                <span><IoIosWater /></span>
                <span>Technology</span>
            </div>
            <div>
                <span><IoIosWater /></span>
                <span>Community Support</span>
            </div>

        </div>

    )
}

export { About, Services }

