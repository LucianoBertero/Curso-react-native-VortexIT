import React, { useContext } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import AuthForm from "../components/AuthForm";

import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../components/NavLinks";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign up for tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={signup} // Solo debería llamar a `signup`
      />

      <NavLink
        text="Already have an account? Sign in instead"
        routeName="Signin"
      ></NavLink>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SignupScreen;
