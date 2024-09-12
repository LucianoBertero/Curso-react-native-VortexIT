import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen"; // Asegúrate del nombre correcto
import { ComponentsScreen } from "./src/screens/ComponentsScreen";
import { ListScreen } from "./src/screens/ListScreen";
import { ImageScreen } from "./src/screens/ImageScreen";
import { CounterScreen } from "./src/screens/CounterScreen";
import { ColorScreen } from "./src/screens/ColorScreen";
import { SquareScreen } from "./src/screens/SquareScreen";
import { TextScreen } from "./src/screens/TextScreen";
import { BoxScreen } from "./src/screens/BoxScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Component"
          component={ComponentsScreen}
          options={{ title: "Components" }}
        />

        <Stack.Screen
          name="SquareScreen"
          component={SquareScreen}
          options={{ title: "Square Screen" }}
        />
        <Stack.Screen
          name="ColorScreen"
          component={ColorScreen}
          options={{ title: "Color Screen" }}
        />
        <Stack.Screen
          name="CurrentCount"
          component={CounterScreen}
          options={{ title: "Current Count" }}
        />
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{ title: "Image Screen" }}
        />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{ title: "List Screens" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "App" }}
        />

        <Stack.Screen
          name="TextScreen"
          component={TextScreen}
          options={{ title: "Text Screen" }}
        />

        <Stack.Screen
          name="BoxScreen"
          component={BoxScreen}
          options={{ title: "Box Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
