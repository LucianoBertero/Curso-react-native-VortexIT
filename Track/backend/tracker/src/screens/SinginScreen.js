import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SinginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignUP s</Text>
      <Button
        title="Go to SignIn"
        onPress={() => {
          navigation.navigate("Signup");
        }}
      ></Button>
      <Button
        title="Go to MainFlow"
        onPress={() => {
          navigation.navigate("MainFlow");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SinginScreen;
