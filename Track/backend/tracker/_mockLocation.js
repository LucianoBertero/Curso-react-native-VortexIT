import * as Location from "expo-location";

const tenMetersWithDegrees = 0.001;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accurancy: 5,
      altitydeAccurance: 5,
      altitude: 5,
      longitude: -122.03412186 + increment * tenMetersWithDegrees,
      latitude: 37.33233141 + increment * tenMetersWithDegrees,
    },
  };
};

counter = 0;
const watchId = Location._getCurrentWatchId();
console.log("Watch ID:", watchId);

setInterval(() => {
  const location = getLocation(counter);
  console.log("Emitting location:", location, "with watchId:", watchId);

  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: watchId || "test-watch-id", // Asegura que watchId no sea undefined
    location: location,
  });
  counter++;
}, 100);
