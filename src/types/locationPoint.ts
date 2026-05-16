export type BasePoint = {
  id: number;
  name: string;
  type: "PassThrough" | "StopPoint" | "StartPoint" | "Destination" | "Onboard";
  description?: string;
};

export type PointWithPosition = BasePoint & {
  position: {
    lat: number;
    lng: number;
  };
};

export type Point = BasePoint | PointWithPosition;
