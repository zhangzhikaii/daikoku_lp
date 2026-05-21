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

type PassByPoint = PositionPoint<"PassByPoint">;
type StopPoint = PositionPoint<"StopPoint"> & { showId: string };
type StartPoint = PositionPoint<"StartPoint">;
type DestinationPoint = PositionPoint<"DestinationPoint">;
type Onboard = BasePoint<"Onboard">;

export type PointWithPosition =
  | PassByPoint
  | StopPoint
  | StartPoint
  | DestinationPoint;

export type Point =
  | PassByPoint
  | StopPoint
  | StartPoint
  | DestinationPoint
  | Onboard;

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

export type ProductLink = {
  title: string;
  url: string;
};

export type Activity = {
  title: string;
  imageUrl: string;
  products: ProductLink[];
  shortDescription: string;
};
