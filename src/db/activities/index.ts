import { Activity } from "@/types";
import { daikokuMorning } from "./daikokuMorning";
import { daikokuNight } from "./daikokuNight";
import { hakone } from "./hakone";

export const activities: Activity[] = [daikokuMorning, daikokuNight, hakone];

export const getProduct = (id: string) =>
  activities.find((activity) => activity.id === id);
