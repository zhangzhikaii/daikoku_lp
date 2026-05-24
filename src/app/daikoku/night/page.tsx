"use client";

import GoogleMapComponent from "@/components/GoogleMap";
import { daikokuNightPoints } from "../../../../db/activities/daikokuNight";

export default function DaikokuNight() {
  return <GoogleMapComponent points={daikokuNightPoints} />;
}
