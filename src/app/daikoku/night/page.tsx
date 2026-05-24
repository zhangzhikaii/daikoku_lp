"use client";

import GoogleMapComponent from "@/components/GoogleMap";
import { daikokuNight } from "../../../../db/activities/daikokuNight";

export default function DaikokuNight() {
  return <GoogleMapComponent activity={daikokuNight} />;
}
