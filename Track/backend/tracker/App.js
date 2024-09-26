import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView, StyleSheet } from "react-native";

import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SingupScreen";
import SinginScreen from "./src/screens/SinginScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackerListScreen from "./src/screens/TrackerListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function TrackListFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackList" component={TrackerListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signup">
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signin"
            component={SinginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MainFlow" options={{ headerShown: false }}>
            {() => (
              <Tab.Navigator>
                <Tab.Screen
                  name="TrackListFlow"
                  component={TrackListFlow}
                  options={{ headerShown: false }}
                />
                <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
                <Tab.Screen name="Account" component={AccountScreen} />
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App></App>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
});
