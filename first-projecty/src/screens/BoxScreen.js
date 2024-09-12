import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}> Child #1</Text>
      <Text style={styles.textTwoStyle}> Child #2</Text>
      <Text style={styles.textThirdStyle}> Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    alignItems: "center",
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    alignSelf: "flex-end",
  },
  textThirdStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});
