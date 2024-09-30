import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import useLocation from "../hooks/useLocation";
import { Context as LocationContext } from "../context/LocationContext";
import { useFocusEffect, useIsFocused } from "@react-navigation/native"; // Importa el hook
import TrackForm from "../components/TrackForm";

const TrackerCreateScreen = () => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const isFocused = useIsFocused();
  const [err] = useLocation(isFocused, (location) => {
    addLocation(location, recording);
  });

  useFocusEffect(
    React.useCallback(() => {
      console.log("Entering screen");

      return () => {
        console.log("Leaving screen"); // Acción cuando la pantalla se desenfoca
      };
    }, [])
  );

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={styles.title}>Create a Track</Text>
      <Map />
      <TrackForm></TrackForm>
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 55,
  },
});

export default TrackerCreateScreen;
