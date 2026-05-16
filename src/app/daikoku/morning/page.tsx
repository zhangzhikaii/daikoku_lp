"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";
import { daikokuMorningPoints } from "../../../../db/routes/daikokuMorning";
import { pointType, PointWithPosition } from "@/types/locationPoint";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const markerIcon = {
  path: `
    M 12,2
    A 10,10 0 1,0 12,22
    A 10,10 0 1,0 12,2

    M 12,7
    A 5,5 0 1,1 12,17
    A 5,5 0 1,1 12,7
  `,
  fillColor: "#ef4444",
  fillOpacity: 1,
  strokeWeight: 0,
  fillRule: "evenodd",
  scale: 1.5,
};

const getTypeColor = (type: PointWithPosition["type"]) => {
  switch (type) {
    case "StartPoint":
      return "bg-green-500";
    case "Destination":
      return "bg-red-500";
    case "StopPoint":
      return "bg-blue-500";
    case "PassBy":
      return "bg-neutral-400";
    case "Onboard":
      return "bg-yellow-500";
    default:
      return "bg-black";
  }
};

export default function GoogleMapComponent() {
  const pointsWithPosition = daikokuMorningPoints.reduce<PointWithPosition[]>(
    (acc, point) => {
      if ("position" in point) acc.push(point);
      return acc;
    },
    [],
  );

  const defaultCenter = useMemo(() => {
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
    <div className="min-h-screen bg-neutral-50 text-black font-sans px-4 lg:px-8 py-16">
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 h-[80vh]">
          {/* LEFT ITINERARY */}
          <aside className="bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col">
            <div className="px-5 py-5 border-b border-neutral-100">
              <h2 className="text-2xl font-semibold">Route</h2>
            </div>

            <div className="overflow-y-auto flex-1">
              {daikokuMorningPoints.map((point, index) => {
                return (
                  <button
                    key={point.id}
                    className={`
                      w-full text-left px-5 py-4 transition-all border-b border-neutral-100
                      hover:bg-neutral-50
                    `}
                  >
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-3 h-3 rounded-full ${getTypeColor(point.type)}`}
                        />
                        {index !== daikokuMorningPoints.length - 1 && (
                          <div className="w-px flex-1 min-h-[30px] bg-neutral-300 mt-1" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-semibold text-base">
                            {point.name}
                          </h3>

                          <span className="text-xs text-neutral-500 whitespace-nowrap">
                            {pointType[point.type]}
                          </span>
                        </div>

                        {point.description && (
                          <p className="text-sm text-neutral-600 mt-1 leading-relaxed">
                            {point.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT MAP */}
          <section className="rounded-3xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={defaultCenter}
              zoom={11}
              options={{
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: true,
                zoomControl: true,
              }}
            >
              {pointsWithPosition.map((point) => (
                <Marker
                  key={point.id}
                  position={point.position}
                  icon={markerIcon}
                />
              ))}
            </GoogleMap>
          </section>
        </div>
      </main>
    </div>
  );
}
