import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import {
  textBlock,
  rootContainer,
  mediaContainer,
  textBlockImage,
  aboutContainer,
} from "./about.module.scss";
import SEO from "../components/SEO";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout addHeaderPadding={true} className={rootContainer}>
      <main>
        <div className={aboutContainer}>
          <div className={textBlock}>
            <h1>About Us</h1>

            <StaticImage
              src="../images/Screenshot 2022-12-27 072441.png"
              alt="LIM'S CHOMA ZONE LOGO"
              placeholder="blurred"
              className={textBlockImage}
              layout="fullWidth" />

            Lims Lounge & Restaurant is a family owned Kenyan restaurant founded by John Kamau Karanja. The business has been serving patrons with help from John's wife, Caroline Kamau, and his two sons Simon and Steve Kamau since 2013.
          </div>
          <div className={mediaContainer}>
            <h1>Media</h1>
            <ul>
              <li>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/oLy67sFhL9Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </li>
              <li>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tQjFKTEeOAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </li>
              <li>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/xBU1TsUVcvQ?start=781" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => (
  <SEO>
    <title>About | Lim's Choma Zone</title>
  </SEO>
);