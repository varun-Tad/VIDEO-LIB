/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid } from "uuid";
import img1 from "../../images/imgOne.jpeg";
import img2 from "../../images/imgTwo.jpeg";
import img3 from "../../images/imgThree.jpeg";
import img4 from "../../images/imgFour.jpeg";
import img5 from "../../images/imgFive.jpeg";
import img6 from "../../images/imgSix.webp";
import img7 from "../../images/imgSeven.jpeg";
import img8 from "../../images/imgEight.jpeg";
import img9 from "../../images/imgNine.jpeg";
import img10 from "../../images/imgTen.webp";

export const videos = [
  // {
  //   _id: "Wo5dMEP_BbI",
  //   title: "Awesome Video about Coding",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  //   creator: "Soham Shah",
  // },
  // {
  //   _id: "F_Riqjdh2oM",
  //   title: "Neural Networks from Scratch - P.1 Intro and Neuron Code",
  //   creator: "Sentdex",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  // },
  {
    _id: uuid(),
    id: 1,
    name: "Top 10 Most Valuable Luxury Brands",
    category: "Brands",
    img: img1,
    channelName: "Fashion Today",
    url: "https://www.youtube.com/embed/rmGT4KoxKas",
    watchLaterExists: false,
  },
  {
    _id: uuid(),
    id: 2,
    name: "BRUTALLY HONEST Luxury Brand Tier List",
    category: "Brands",
    img: img2,
    channelName: "Fashion up",
    url: "https://www.youtube.com/embed/Sz51U7ojbtk",
    watchLaterExists: false,
  },
  {
    _id: uuid(),
    id: 3,
    name: "Pronounce 30 Hardest Fashion Brands & Names (CORRECTLY)",
    category: "Brands",
    img: img3,
    channelName: "Julian Michael",
    url: "https://www.youtube.com/embed/6RMD87AiHV8",
    watchLaterExists: false,
  },
  {
    _id: uuid(),
    id: 4,
    name: "Versace Spring Summer 2022 | Fashion Show",
    category: "Shows",
    img: img4,
    channelName: "Versace",
    url: "https://www.youtube.com/embed/zsu2WRFaUoQ",
    watchLaterExists: false,
  },
  {
    _id: uuid(),
    id: 5,
    name: "Best of the spring/summer 22 fashion shows | Bazaar UK",
    category: "Shows",
    img: img5,
    channelName: "Harpers Bazaar",
    url: "https://www.youtube.com/embed/1ZyneUUVzdA",
    watchLaterExists: false,
  },
  {
    _id: uuid(),
    id: 6,
    name: "Women’s Fall-Winter 2022 Fashion Show | LOUIS VUITTON",
    category: "Shows",
    img: img6,
    channelName: "Louis Vuitton",
    url: "https://www.youtube.com/embed/yekdy9NZCdw",
    watchLaterExists: false,
  },
  {
    _id: uuid(),
    id: 7,
    name: "GIVENCHY | Spring Summer 2022 RTW Show",
    category: "Shows",
    img: img7,
    channelName: "Givenchy",
    url: "https://www.youtube.com/embed/8JKrvQxkIE0",
    watchLaterExists: false,
  },
  {
    _id: uuid(),
    id: 8,
    name: "Fashion School: 16 Ways to Learn Everything About Fashion",
    category: "Courses",
    img: img8,
    channelName: "Tad Var",
    url: "https://www.youtube.com/embed/obHklzJPhnY",
    watchLaterExists: false,
  },

  {
    _id: uuid(),
    id: 9,
    name: "New York Fashion Week & Gigi Hadid | Vlog 54",
    category: "Vlogs",
    img: img9,
    channelName: "Fashion Today",
    url: "https://www.youtube.com/embed/oXVwuRsBYXI",
    watchLaterExists: false,
  },

  {
    _id: uuid(),
    id: 10,
    name: "Paris fashion week with Dior | vlog",
    category: "Vlogs",
    img: img10,
    channelName: "Manu Rios",
    url: "https://www.youtube.com/embed/liOCXfHhnCs",
    watchLaterExists: false,
  },
];
