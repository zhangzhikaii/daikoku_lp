"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";
import { daikokuMorningPoints } from "../../../../db/routes/daikokuMorning";
import { PointType, pointType, PointWithPosition } from "@/types/locationPoint";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const getTypeColor = (type: PointWithPosition["type"]) => {
  switch (type) {
    case "StartPoint":
      return "#22c55e";
    case "Destination":
      return "#ef4444";
    case "StopPoint":
      return "#3b82f6";
    case "PassBy":
      return "#a3a3a3";
    case "Onboard":
      return "#eab308";
    default:
      return "#000000";
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
      lat: total.lat / pointsWithPosition.length - 0.05,
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

  const markerIcon = (pointType: PointType) => {
    return {
      url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="6.5"
        fill="${getTypeColor(pointType)}"
      />

      <circle
        cx="12"
        cy="12"
        r="5"
        fill="white"
      />
    </svg>
  `)}`,
      scaledSize: new google.maps.Size(36, 36),
      anchor: new google.maps.Point(18, 18),
    };
  };

  return (
    <div className="min-h-screen bg-white text-black px-8 py-16">
      <main className="max-w-4xl mx-auto my-20">
        <div className="flex flex-col md:grid md:grid-cols-[300px_1fr] lg:grid-cols-[360px_1fr] gap-6 md:h-[70vh]">
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
                      w-full text-left px-5 pt-2 transition-all
                      hover:bg-neutral-50
                    `}
                  >
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-3 h-3 rounded-full`}
                          style={{
                            backgroundColor: getTypeColor(point.type),
                          }}
                        />
                        {index !== daikokuMorningPoints.length - 1 && (
                          <div className="w-px flex-1 min-h-[20px] bg-neutral-300 mt-1" />
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
          <section className="h-[70vh] rounded-3xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
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
                  icon={markerIcon(point.type)}
                />
              ))}
            </GoogleMap>
          </section>
        </div>
      </main>
    </div>
  );
}
