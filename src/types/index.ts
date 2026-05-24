type BasePoint<T extends PointType> = {
  id: number;
  name: string;
  type: T;
  description?: string;
};

export type Position = {
  lat: number;
  lng: number;
};

type PositionPoint<T extends PointType> = BasePoint<T> & {
  position: Position;
};

type StopPoint = PositionPoint<"StopPoint"> & { showId: string };

export type PointWithPosition =
  | PositionPoint<"PassByPoint">
  | StopPoint
  | PositionPoint<"StartPoint">
  | PositionPoint<"DestinationPoint">;

export type Point = PointWithPosition | BasePoint<"Onboard">;

export type PointType =
  | "PassByPoint"
  | "StopPoint"
  | "StartPoint"
  | "DestinationPoint"
  | "Onboard";

export const pointType: Record<PointType, string> = {
  PassByPoint: "Pass by",
  StopPoint: "Main stop",
  StartPoint: "Starting location",
  DestinationPoint: "Arrive back at",
  Onboard: "",
};

export type Optioin = {
  title: string;
  shortDescription: string;
  url: string;
  imageUrl?: string;
};

export type Price = {
  discountPrice?: number;
  basePrice: number;
};

export type Activity = {
  title: string;
  imageUrl: string;
  options: Optioin[];
  shortDescription: string;
  points: Point[];
  price?: Price;
};
