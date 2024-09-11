import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

export const TextScreen = () => {
  return (
    <View>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
