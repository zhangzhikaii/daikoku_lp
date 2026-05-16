"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";
import { daikokuMorningPoints } from "../../../../db/routes/daikokuMorning";
import { PointWithPosition } from "@/types/locationPoint";

const containerStyle = {
  width: "100%",
  height: "700px",
};

const icon = {
  path: `
    M 12,2
    A 10,10 0 1,0 12,22
    A 10,10 0 1,0 12,2

    M 12,7
    A 5,5 0 1,1 12,17
    A 5,5 0 1,1 12,7
  `,
  fillColor: "red",
  fillOpacity: 1,
  strokeWeight: 0,
  fillRule: "evenodd",
  scale: 1.5,
};

export default function GoogleMapComponent() {
  const pointsWithPosition = daikokuMorningPoints.reduce<PointWithPosition[]>(
    (acc, point) => {
      if ("position" in point) acc.push(point);
      return acc;
    },
    [],
  );

  const center = useMemo(() => {
    if (pointsWithPosition.length === 0) {
      return {
        lat: 35.6809591,
        lng: 139.7673068,
      };
    }

    const total = pointsWithPosition.reduce(
      (acc, point) => {
        acc.lat += point.position.lat;
        acc.lng += point.position.lng;
        return acc;
      },
      { lat: 0, lng: 0 },
    );

    return {
      lat: total.lat / pointsWithPosition.length,
      lng: total.lng / pointsWithPosition.length,
    };
  }, [pointsWithPosition]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? "KEY",
  });

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="p-30">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={11}
            options={{
              streetViewControl: false,
              mapTypeControl: true,
              fullscreenControl: true,
              zoomControl: true,
            }}
          >
            {pointsWithPosition.map((point) => (
              <Marker key={point.id} position={point.position} icon={icon} />
            ))}
          </GoogleMap>
        </div>
      </div>
    </div>
  );
}
