import React, { useContext, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLinks";
import { Context } from "../context/AuthContext";
import { useFocusEffect } from "@react-navigation/native";

const SinginScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(Context);
  useFocusEffect(
    useCallback(() => {
      return () => {
        clearErrorMessage();
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in to your account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={(credentials) =>
          signin(credentials, () => {
            navigation.navigate("MainFlow");
          })
        }
      />

      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="Signup"
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

export default SinginScreen;
