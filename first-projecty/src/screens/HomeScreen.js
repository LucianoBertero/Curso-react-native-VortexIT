import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Component")}
      />

      <Button
        title="Go to List Demo"
        onPress={() => {
          navigation.navigate("ListScreen");
        }}
      ></Button>
      <Button
        title="Go to Image Screen"
        onPress={() => {
          navigation.navigate("ImageScreen");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
