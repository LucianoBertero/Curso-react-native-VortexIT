import React, { useContext } from "react";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";
import { ActivityIndicator } from "react-native";
import { StyleSheet } from "react-native";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  console.log(currentLocation);
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
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={120}
        strokeColor="rgba(255,0,0,1.0)" // Prueba otro color de borde
        fillColor="rgba(255,0,0,0.3)" // Prueba otro color de relleno
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 400, // Ajusta el tamaño según tus necesidades
    width: "100%",
  },
});

export default Map;
