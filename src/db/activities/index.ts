import { Activity } from "@/types";
import { daikokuMorning } from "./daikokuMorning";
import { daikokuNight } from "./daikokuNight";
import { hakone } from "./hakone";

export const activities: Activity[] = [daikokuMorning, daikokuNight, hakone];

export const getProduct = (id: string): Activity | undefined => {
  switch (id) {
    case "daikokuMorning":
      return daikokuMorning;
    case "daikokuNight":
      return daikokuNight;
    case "hakone":
      return hakone;
  }
};
