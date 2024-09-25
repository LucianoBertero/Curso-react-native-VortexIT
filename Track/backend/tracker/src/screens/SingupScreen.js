import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text style={styles.title}>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        label="Password"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({ email, password })} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
  title: {
    fontSize: 40,
    fontWeight: "400",
  },
});

export default SignupScreen;
