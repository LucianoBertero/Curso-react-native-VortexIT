import { Image, StyleSheet, Platform, View } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView } from "react-native";
import { gradients } from "@/gradients";
import GradientItem from "@/components/GradientItem";
import { Redirect, Stack, useLocalSearchParams } from "expo-router";
import { LinearGradient, LinearGradientPoint } from "expo-linear-gradient";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type GradientDirection =
  | "topToBottom"
  | "bottomToTop"
  | "leftToRight"
  | "rightToLeft";

interface GradientDirections {
  [key: string]: {
    start: LinearGradientPoint;
    end: LinearGradientPoint;
  };
}

const gradientDirections: GradientDirections = {
  topToBottom: { start: { x: 0, y: 0 }, end: { x: 0, y: 1 } },
  bottomToTop: { start: { x: 0, y: 1 }, end: { x: 0, y: 0 } },
  leftToRight: { start: { x: 0, y: 0 }, end: { x: 1, y: 0 } },
  rightToLeft: { start: { x: 1, y: 0 }, end: { x: 0, y: 0 } },
};

export default function GradientDetailsScreen() {
  const [direction, setDirection] = useState<GradientDirection>("topToBottom");
  const params = useLocalSearchParams<{
    gradientName: string;
    colors: string;
  }>();
  console.log(params.colors);
  console.log(params.gradientName);

  if (!params.gradientName || !params.colors)
    return <Redirect href={"+not-found"}></Redirect>;

  return (
    <>
      <Stack.Screen options={{ title: params.gradientName }}></Stack.Screen>
      <ScrollView contentContainerStyle={styles.container}>
        <LinearGradient
          colors={params.colors.split(",")}
          style={StyleSheet.absoluteFill}
          start={gradientDirections[direction].start}
          end={gradientDirections[direction].end}
        ></LinearGradient>
        <View
          style={{
            width: "100%",
            alignSelf: "center",
            position: "absolute",
            bottom: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginBottom: 12,
            }}
          >
            <ThemedText>{direction}</ThemedText>
            <ThemedText>{params.colors.replace(",", "-")}</ThemedText>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity onPress={() => setDirection("topToBottom")}>
              <Ionicons
                name="chevron-down-circle"
                size={40}
                color={"white"}
              ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDirection("bottomToTop")}>
              <Ionicons
                name="chevron-up-circle"
                size={40}
                color={"white"}
              ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDirection("leftToRight")}>
              <Ionicons
                name="chevron-forward-circle"
                size={40}
                color={"white"}
              ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDirection("rightToLeft")}>
              <Ionicons
                name="chevron-back-circle"
                size={40}
                color={"white"}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 150 : 0,
    padding: 16,
  },
});
