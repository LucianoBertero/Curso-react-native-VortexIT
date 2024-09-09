import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ComponentsScreen from "./src/screens/ComponentsScreen";

export default function App() {
  return (
    <View>
      <ComponentsScreen></ComponentsScreen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
