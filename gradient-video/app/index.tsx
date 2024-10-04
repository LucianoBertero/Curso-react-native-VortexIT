import { Image, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView } from "react-native";
import { gradients } from "@/gradients";
import GradientItem from "@/components/GradientItem";

export default function HomeScreen() {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {gradients.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: "row" }}>
            {row.map(({ name, colors }, index) => (
              <GradientItem
                colors={colors}
                gradientName={name}
                key={index}
              ></GradientItem>
            ))}
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "ios" ? 130 : 50,
  },
});
