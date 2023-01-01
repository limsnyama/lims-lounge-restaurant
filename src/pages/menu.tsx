import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import {
  menuRoot,
  foodCard,
  foodName,
  foodPrice,
  foodSectionCardContainer,
  homeCardImage,
} from "./menu.module.scss";
import SEO from "../components/SEO";

const menuSectionData: SectionProps[] = [
  {
    name: "Main Dishes",
    items: [
      {
        image: (
          <StaticImage
            src="../images/ig/matumbo-stew.jpg"
            alt="Samosas"
            className={homeCardImage}
            placeholder="blurred"
            layout="fullWidth" />
        ),
        name: "Matumbo Stew",
        description: "Goat Tripe",
        priceInUSD: {
          dollars: 10,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Mbuzi Kaanga",
        description: "Goat Stew",
        priceInUSD: {
          dollars: 15,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Mutura",
        description: "African Sausage",
        priceInUSD: {
          dollars: 20,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Fried Fish",
        description: "Deep fried fish ",
        priceInUSD: {
          dollars: 16,
          cents: 0,
        },
      },
    ],
  },
  {
    name: "Sides",
    items: [
      {
        image: undefined,
        name: "Ugali",
        description: "Corn Meal",
        priceInUSD: {
          dollars: 5,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Chips",
        description: "Fries",
        priceInUSD: {
          dollars: 10,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Chapati",
        description: "Kenyan Flat Bread",
        priceInUSD: {
          dollars: 2,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Mokimo",
        description: "Mashed Potatoes, Corn",
        priceInUSD: {
          dollars: 10,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Sukuma Wiki",
        description: "Collard Greens",
        priceInUSD: {
          dollars: 5,
          cents: 0,
        },
      },
      {
        image: (
          <StaticImage
              src="../images/ig/samosa.jpg"
              alt="Samosas"
              className={homeCardImage}
              placeholder="blurred"
              layout="fullWidth" />
        ),
        name: "Samosas",
        description: "A meat or veggie stuffed pastry",
        priceInUSD: {
          dollars: 1,
          cents: 50,
        },
      },
      {
        image: (
          <StaticImage
            src="../images/ig/sausage.jpg"
            alt="Samosas"
            className={homeCardImage}
            placeholder="blurred"
            layout="fullWidth" />
        ),
        name: "Sausages",
        description: "",
        priceInUSD: {
          dollars: 2,
          cents: 0,
        },
      },
    ],
  },
  {
    name: "Nyama Choma (goat)",
    items: [
      {
        image: (
          <StaticImage
            src="../images/ig/nyama-choma-legs.jpg"
            alt="Samosas"
            className={homeCardImage}
            placeholder="blurred"
            layout="fullWidth" />
        ),
        name: "Mguu",
        description: "Whole Leg",
        priceInUSD: {
          dollars: 70,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Nusu Mguu",
        description: "Half Leg",
        priceInUSD: {
          dollars: 40,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Mkono",
        description: "Front Leg",
        priceInUSD: {
          dollars: 60,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Mbavu",
        description: "Ribs",
        priceInUSD: {
          dollars: 70,
          cents: 0,
        },
      },
      {
        image: (
          <StaticImage
            src="../images/ig/nyama-choma-sliced.jpg"
            alt="Samosas"
            className={homeCardImage}
            placeholder="blurred"
            layout="fullWidth" />
        ),
        name: "Pieces by Price",
        description: "",
        priceInUSD: {
          dollars: 30,
          cents: 0,
        },
      },
    ],
  },
  {
    name: "Supu / Soup",
    items: [
      {
        image: undefined,
        name: "Goat soup",
        description: undefined,
        priceInUSD: {
          dollars: 5,
          cents: 0,
        },
      },
    ],
  },
  {
    name: "Beverage",
    items: [
      {
        image: undefined,
        name: "Coke",
        description: undefined,
        priceInUSD: {
          dollars: 4,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Sprite",
        description: undefined,
        priceInUSD: {
          dollars: 4,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Fanta Orange",
        description: undefined,
        priceInUSD: {
          dollars: 4,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Pepsi",
        description: undefined,
        priceInUSD: {
          dollars: 4,
          cents: 0,
        },
      },
    ],
  },
  {
    name: "Juice",
    items: [
      {
        image: undefined,
        name: "Mango",
        description: undefined,
        priceInUSD: {
          dollars: 4,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Passion",
        description: undefined,
        priceInUSD: {
          dollars: 4,
          cents: 0,
        },
      },
      {
        image: undefined,
        name: "Orange",
        description: undefined,
        priceInUSD: {
          dollars: 4,
          cents: 0,
        },
      },
    ],
  },
];

interface USDPrice {
  dollars: number,
  cents: number,
}

function Price(props: {priceInUSD: USDPrice}) {
  if (!props.priceInUSD) {
    return null;
  }

  const dollars = String(props.priceInUSD.dollars).padStart(1, '0');
  const cents = String(props.priceInUSD.cents).padStart(2, '0');
  return (
    <div className={foodPrice}>
      ${dollars}.{cents}
    </div>
  );
}

interface FoodCardProps {
  image: React.ReactElement | undefined,
  name: string,
  description: string | undefined,
  priceInUSD: USDPrice,
}

function FoodCard(props: FoodCardProps) {
  return (
    <div className={foodCard}>
      {props.image && props.image}
      <div className={foodName}>{props.name}</div>
      <Price priceInUSD={props.priceInUSD} />
      {props.description &&
        <div>{props.description}</div>}
    </div>
  )
}

interface SectionProps {
  name: string,
  items: FoodCardProps[],
}

function Section(props: SectionProps) {
  const cards = props.items
    .map(item => <FoodCard key={props.name + item.name} {...item} />);

  return (
    <div>
      <h1>{props.name}</h1>
      <div className={foodSectionCardContainer}>
        {cards}
      </div>
    </div>
  )
}

interface MenuProps {
  sectionData: SectionProps[],
}

function Menu(props: MenuProps) {
  const sections = props.sectionData
    .map(section => (
      <Section key={section.name} name={section.name} items={section.items} />
    ));

    return (
      <div>
        {sections}
      </div>
    );
}

const MenuPage: React.FC<PageProps> = () => {
  return (
    <Layout addHeaderPadding={true}>
      <main className={menuRoot}>
        <div>
          <Menu sectionData={menuSectionData}/>
        </div>
      </main>
    </Layout>
  )
}

export default MenuPage

export const Head: HeadFC = () => (
  <SEO>
    <title>Menu | Lim's Choma Zone</title>
  </SEO>
);
