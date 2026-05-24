export const metadata = {
  title: "Daikoku Morning Visit",
};

import GoogleMapComponent from "@/components/GoogleMap";
import { daikokuMorning } from "@/db/activities/daikokuMorning";

export default function DaikokuMorning() {
  return <GoogleMapComponent activity={daikokuMorning} />;
}
