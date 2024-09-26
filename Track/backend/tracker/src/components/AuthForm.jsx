import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Input } from "react-native-elements"; // Ensure the correct library
import Spacer from "./Spacer";

const AuthForm = ({
  headerText = "",
  errorMessage = "",
  onSubmit,
  submitButtonText,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Spacer>
        <Text style={styles.title}>{headerText}</Text>
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
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => {
            console.log(
              "Submit button pressed with email:",
              email,
              "password:",
              password
            );
            onSubmit({ email, password });
          }}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "400",
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
  },
});

export default AuthForm;
