import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/Map";
import MapView from "react-native-maps";

const TrackerCreateScreen = () => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text> Create a Track</Text>
      <Map></Map>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackerCreateScreen;
