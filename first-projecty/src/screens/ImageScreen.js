import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { ImageDetail } from "../components/ImageDetail";

export const ImageScreen = ({ navigation }) => {
  return (
    <View>
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={9}
      ></ImageDetail>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={7}
      ></ImageDetail>
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={4}
      ></ImageDetail>
    </View>
  );
};

const styles = StyleSheet.create({});
