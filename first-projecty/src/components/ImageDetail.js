import React from "react";
import { Image, Text, StyleSheet, View } from "react-native";

export const ImageDetail = ({ imageSource, title, score }) => {
  return (
    <View>
      <Image source={imageSource}></Image>
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
