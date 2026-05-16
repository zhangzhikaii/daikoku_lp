import { Point } from "@/types/locationPoint";

export const daikokuMorningPoints: Point[] = [
  {
    id: 1,
    name: "Shinjuku",
    type: "StartPoint",
    position: {
      lat: 35.690896,
      lng: 139.690778,
    },
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
    type: "PassBy",
    position: {
      lat: 35.654693,
      lng: 139.745429,
    },
    description: "",
  },
  {
    id: 4,
    name: "Rainbow Bridge",
    type: "PassBy",
    position: {
      lat: 35.636782,
      lng: 139.763005,
    },
    description: "",
  },
  {
    id: 5,
    name: "Daikoku PA",
    type: "StopPoint",
    position: {
      lat: 35.461683,
      lng: 139.680226,
    },
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
    type: "Destination",
    position: {
      lat: 35.692658,
      lng: 139.700556,
    },
    description: "say goodbye with your guide",
  },
];
