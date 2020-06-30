import React, { useState, useEffect } from "react"
import Image from 'gatsby-image';
import { graphql } from "gatsby"

import Layout from "../components/layout"

import IsuVideo from "../videos/isuniocha-no-sound.mp4"
import { HeroPanel, TextPanel, VideoPanel } from "../components/panel"

import About from "./about"




export default function App({ data }) {

  const sources = [
    data.mobileHeroImage.childImageSharp.fluid,
    {
      ...data.mobileHeroImage.childImageSharp.fluid,
      media: `(orientation:portrait)`
    },

    {
      ...data.desktopHeroImage.childImageSharp.fluid,
      media: `(orientation:landscape)`,
    },


  ]


  return (
    <Layout>

      <HeroPanel
        id="hero-container"
        class="hero-image"
        fluid={sources}
        heroText="We bring clean water to communities in need."
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
