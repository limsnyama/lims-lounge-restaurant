import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import DirectionsAndHours from "../components/DirectionsAndHours";
import {
  heroShotImage,
  heroShotText,
  heroShotContainer,
  heroShotTextColumn,
  growToFill,
  ctaSection,
} from "./index.module.scss";
import SEO from "../components/SEO";

function HeroSection() {
  return (
    <div className={heroShotContainer}>
      <div>
        <div className={heroShotTextColumn}>
          <div className={growToFill}>
            <div>
              <StaticImage
                src="../images/ig/nyama-choma-legs.jpg"
                alt="Samosas"
                className={heroShotImage}
                placeholder="blurred"
                layout="fullWidth" />
            </div>
          </div>
          <div style={{ overflow: "visible" }}>
            <div className={heroShotText}>
              <div>
                <h1>Lims Lounge & Restaurant
                </h1>
                <h2>The Seattle Kamakis</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={growToFill}>
          <div className={growToFill}>
            <div>
              <StaticImage
                src="../images/ig/all-food-together.jpg"
                alt="Various foods on a table"
                className={heroShotImage}
                placeholder="blurred"
                layout="fullWidth" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderOnlineSection() {
  return (
    <div className={ctaSection}>
      <div>
        <a href="https://www.ubereats.com/store/lims-choma-zone/UcZ6RrAzXRGbiBg7vWL5pA" target="_blank">
          <button>Order Online</button>
        </a>
      </div>
    </div>
  );
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <HeroSection />
        <OrderOnlineSection />
        <DirectionsAndHours />
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <SEO>
    <title>Home Page</title>
    <meta
      name="description"
      content="Lims Lounge & Restaurant is a family run business offering authentic Kenyan cuizine." />
  </SEO>
);

