export type BasePoint = {
  id: number;
  name: string;
  type: PointType;
  description?: string;
};

export type PointWithPosition = BasePoint & {
  position: {
    lat: number;
    lng: number;
  };
};

export type Point = BasePoint | PointWithPosition;

export type PointType =
  | "PassBy"
  | "StopPoint"
  | "StartPoint"
  | "Destination"
  | "Onboard";

export const pointType: Record<PointType, string> = {
  PassBy: "Pass by",
  StopPoint: "Main stop",
  StartPoint: "Starting location",
  Destination: "Arrive back at",
  Onboard: "",
};
