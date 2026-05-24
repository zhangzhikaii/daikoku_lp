"use client";

import GoogleMapComponent from "@/components/GoogleMap";
import { daikokuMorningPoints } from "../../../../db/activities/daikokuMorning";

export default function DaikokuMorning() {
  return <GoogleMapComponent points={daikokuMorningPoints} />;
}
