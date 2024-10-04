import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface GradientItemsProps {
  colors: string[];
  gradientName: string;
}

export default function GradientItem({
  colors,
  gradientName,
}: GradientItemsProps) {
  return (
    <Link
      href={{ pathname: "gradient-details", params: { gradientName, colors } }}
      asChild
    >
      <TouchableOpacity style={styles.container}>
        <LinearGradient colors={colors} style={styles.gradient}>
          <Text style={styles.text}>{gradientName}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexGrow: 1,
  },
  gradient: {
    width: "100%",
    height: 200,
    padding: 12,
    justifyContent: "flex-end",
  },

  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
