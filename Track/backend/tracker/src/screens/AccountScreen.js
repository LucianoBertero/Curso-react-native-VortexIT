import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context"; // Nuevo import

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={() => signout(navigation)} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
