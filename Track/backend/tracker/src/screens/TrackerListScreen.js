import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackerListScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>Track List Screen</Text>
      <Button
        title="go to track detail"
        onPress={() => navigation.navigate("TrackDetail")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackerListScreen;
