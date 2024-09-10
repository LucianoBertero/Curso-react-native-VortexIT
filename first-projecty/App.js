import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen"; // Asegúrate del nombre correcto
import { ComponentsScreen } from "./src/screens/ComponentsScreen";
import { ListScreen } from "./src/screens/ListScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListScreen">
        <Stack.Screen
          name="Component"
          component={ComponentsScreen}
          options={{ title: "Components" }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
