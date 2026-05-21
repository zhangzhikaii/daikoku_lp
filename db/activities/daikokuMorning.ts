import { Activity, Point } from "@/types";
import {
  daikokuPosition,
  hotelStartPosition,
  rainbowBridgePosition,
  shinkukuStationEastPosition,
  tokyoTowerPosition,
} from "../points";

export const daikokuMorningPoints: Point[] = [
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

export const daikokuMorning: Activity = {
  title: "Daikoku PA (Morning)",
  imageUrl: "/daikoku-morning-2.jpeg",
  products: [
    {
      title: "Daikoku PA (Morning)",
      url: "https://carlifejapan.rezdy.com/763018/morning-daikoku-pa-car-meet-visit?_gl=1*1r6fjxd*_gcl_au*MTc1NjU2MTE0OS4xNzc4MDY3Mzk1LjEyNzk1MDgyODAuMTc3ODA3NTM0Ny4xNzc4MDc1MzQ2*_ga*MTE4NTMzODc0NS4xNzc3MTMwMzQz*_ga_J7SXS0R0D6*czE3NzgwNjczMTkkbzckZzEkdDE3NzgwNzU0ODUkajQ5JGwwJGg0NjMwOTk5Njk",
    },
  ],
  shortDescription:
    "In the calm of the morning, away from the nighttime crowds, watch classic and collector cars gather in Tokyo’s prestigious Meiji Jingu Gaien before setting off on a relaxed cruise toward Daikoku PA.",
};
