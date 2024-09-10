import react from "react";
import { Text, StyleSheet, View } from "react-native";

export const ComponentsScreen = () => {
  const greeting = "Hi there!";
  const name = "Luciano";
  return (
    <View>
      <Text style={styles.textStyles}>Getting started with React Native</Text>
      <Text style={styles.subHeaderStyles}>my name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: { fontSize: 45 },
  subHeaderStyles: {
    fontSize: 20,
  },
});
