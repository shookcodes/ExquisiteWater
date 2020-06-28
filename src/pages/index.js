import React, { useState, useEffect } from "react"
import Image from 'gatsby-image';
import { graphql } from "gatsby"

import Layout from "../components/layout"
import KidsAtPumps from "../images/kids-at-pumps.jpg"
import KidsAtPumpsMedium from "../images/kids-at-pumps-medium.jpg"
import KidsAtPumpsSmall from "../images/kids-at-pumps-small.jpg"
import WaterBagSmall from "../images/water-bag-small.jpg"
import IsuVideo from "../videos/isuniocha-no-sound.mp4"
import { HeroPanel, TextPanel, VideoPanel } from "../components/panel"

import About from "./about"




export default function App({ data }) {

    const sources = [
        data.mobileHeroImage.childImageSharp.fluid,
        {
            ...data.tabletHeroImage.childImageSharp.fluid,
            media: `(min-width: 768px) and (max-width: 1023px)`,
        },
        {
            ...data.tabletWideHeroImage.childImageSharp.fluid,
            media: `(min-width: 1024px) and (max-width: 1199px)`,
        },
        {
            ...data.desktopHeroImage.childImageSharp.fluid,
            media: `(min-width: 1200px)`,
        },


    ]


    return (
        <Layout>

            <HeroPanel
                id="hero-container"
                fluid={sources}
                heroText="Everyone deserves access to clean drinking water."
                ctaText="Help Our Cause"
                to="/donate"
            />

            <TextPanel
                id="content-block"
                class="block-text"
                h2="Over 80% of Nigerians don't have access to safe water."
                p="Our mission is to change that."
            />
            <VideoPanel
                id="content-video"
                src={IsuVideo}
                class="isu=video"
                p="We build lasting relationships with rural communities in Nigeria to implement and sustain water sanitation solutions."
                buttonText="Learn More"
                to="/about"
            />

            <About />

        </Layout >

    )
};

export const pageQuery = graphql`
query {
    mobileHeroImage: file(relativePath: { eq: "water-bag-small.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tabletHeroImage: file(
        relativePath: { eq: "kids-at-pumps-small.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tabletWideHeroImage: file(
        relativePath: { eq: "kids-at-pumps-medium.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
      desktopHeroImage: file(
      relativePath: { eq: "kids-at-pumps.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
