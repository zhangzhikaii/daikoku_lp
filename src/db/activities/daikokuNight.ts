import { Activity, Point, Optioin } from "@/types";
import {
  daikokuPosition,
  hotelStartPosition,
  rainbowBridgePosition,
  shinkukuStationEastPosition,
  tokyoTowerPosition,
} from "../points";

export const daikokuNightPoints: Point[] = [
  {
    id: 1,
    name: "Shinjuku",
    type: "StartPoint",
    position: hotelStartPosition,
    description: "meet your guide, have a brief of the tour",
  },
  {
    id: 2,
    name: "Car",
    type: "Onboard",
    description: "(an hour drive)",
  },
  {
    id: 3,
    name: "Tokyo Tower",
    type: "PassByPoint",
    position: tokyoTowerPosition,
    description: "",
  },
  {
    id: 4,
    name: "Rainbow Bridge",
    type: "PassByPoint",
    position: rainbowBridgePosition,
    description: "",
  },
  {
    id: 5,
    name: "Daikoku PA",
    type: "StopPoint",
    showId: "1",
    position: daikokuPosition,
    description: "Stay here to experience the car meet for an hour",
  },
  {
    id: 6,
    name: "Car",
    type: "Onboard",
    description: "(an hour drive)",
  },
  {
    id: 7,
    name: "Shinjuku",
    type: "DestinationPoint",
    position: shinkukuStationEastPosition,
    description: "say goodbye with your guide",
  },
];

export const daikokuNightOptions: Optioin[] = [
  {
    title: "Daikoku PA (Night)",
    imageUrl: "/noah.png",
    price: { basePrice: 10800 },
    shortDescription: "Daikoku PA Car Meet Visit",
    url: "https://carlifejapan.rezdy.com/763004/daikoku-pa-car-meet-visit?_gl=1%2A1lavcmo%2A_gcl_au%2AMTc1NjU2MTE0OS4xNzc4MDY3Mzk1LjEyNzk1MDgyODAuMTc3ODA3NTM0Ny4xNzc4MDc1MzQ2%2A_ga%2AMTE4NTMzODc0NS4xNzc3MTMwMzQz%2A_ga_J7SXS0R0D6%2AczE3NzgwNjczMTkkbzckZzEkdDE3NzgwNzU0NzckajU3JGwwJGg0NjMwOTk5Njk.&lang=en",
  },
  {
    title: "Daikoku PA (Night, with Toyota GR86)",
    price: { basePrice: 15500 },
    imageUrl: "/gr86.png",
    shortDescription: "Daikoku PA Car Meet Visit in a GR86",
    url: "https://carlifejapan.rezdy.com/763009/daikoku-pa-car-meet-visit-in-a-gr86?_gl=1*1awzq87*_gcl_au*MTc1NjU2MTE0OS4xNzc4MDY3Mzk1LjEyNzk1MDgyODAuMTc3ODA3NTM0Ny4xNzc4MDc1MzQ2*_ga*MTE4NTMzODc0NS4xNzc3MTMwMzQz*_ga_J7SXS0R0D6*czE3NzgwNjczMTkkbzckZzEkdDE3NzgwNzU0ODIkajUyJGwwJGg0NjMwOTk5Njk",
  },
  {
    title: "Daikoku PA (Night, with Toyota Supra)",
    price: { basePrice: 35000 },
    imageUrl: "/supra.png",
    shortDescription: "Ride in style! Ride the GR Supra to Daikoku.",
    url: "https://carlifejapan.rezdy.com/763011/ride-in-style-ride-the-gr-supra-to-daikoku?_gl=1*1r6fjxd*_gcl_au*MTc1NjU2MTE0OS4xNzc4MDY3Mzk1LjEyNzk1MDgyODAuMTc3ODA3NTM0Ny4xNzc4MDc1MzQ2*_ga*MTE4NTMzODc0NS4xNzc3MTMwMzQz*_ga_J7SXS0R0D6*czE3NzgwNjczMTkkbzckZzEkdDE3NzgwNzU0ODUkajQ5JGwwJGg0NjMwOTk5Njk",
  },
  {
    title: "Daikoku PA (Night, with Nissan GTR-35)",
    price: { basePrice: 35000 },
    imageUrl: "/gtr2017.png",
    shortDescription:
      "Our Premium Option! Authentic Ride the GT-R35 to Daikoku",
    url: "https://carlifejapan.rezdy.com/764766/our-premium-option-authentic-ride-the-gt-r35-to-daikoku?_gl=1*1c8107n*_gcl_au*MTEzMTAwMTA4OS4xNzc5MTE3NzA4LjEyNDg4NDY3MjQuMTc3OTI1MTIxNC4xNzc5MjUxMjE0*_ga*MTE4NTMzODc0NS4xNzc3MTMwMzQz*_ga_J7SXS0R0D6*czE3NzkyNTEyMDYkbzIwJGcxJHQxNzc5MjU0NzEwJGoyNiRsMCRoMjIxMjg5OTcw",
  },
];

export const daikokuNight: Activity = {
  id: "daikokuNight",
  title: "Daikoku PA (Night)",
  imageUrl: "/daikoku-6.avif",
  options: daikokuNightOptions,
  points: daikokuNightPoints,
  price: { basePrice: 13500, discountPrice: 10800 },
  shortDescription:
    "As the city lights come alive, supercars, tuned machines, and street icons gather in one of Japan’s most legendary car meet spots. The atmosphere is electric — engines rev, cameras flash, and every arrival turns heads.",
};
