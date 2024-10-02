import React, { useContext, useEffect } from "react";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";
import { ActivityIndicator, StyleSheet } from "react-native";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  // Asegúrate de que currentLocation esté disponible antes de ejecutar el efecto
  useEffect(() => {
    if (currentLocation) {
      console.log("Updated current location:", currentLocation);
    }
  }, [currentLocation]);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 20 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={120}
        strokeColor="rgba(255,0,0,1.0)"
        fillColor="rgba(255,0,0,0.3)"
      />
      {/* Solo renderiza Polyline si hay ubicaciones */}
      {locations.length > 0 && (
        <Polyline
          coordinates={locations.map((loc) => loc.coords)}
          strokeColor="rgba(0, 0, 255, 1.0)"
          strokeWidth={3}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 400,
    width: "100%",
  },
});

export default Map;
