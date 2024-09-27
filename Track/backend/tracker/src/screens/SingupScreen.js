import React, { useContext, useCallback, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import { useFocusEffect } from "@react-navigation/native";
import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../components/NavLinks";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignin } =
    useContext(AuthContext);
  useFocusEffect(
    useCallback(() => {
      return () => {
        clearErrorMessage();
      };
    }, [])
  );

  useEffect(() => {
    tryLocalSignin(navigation);
  }, []);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign up for tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign up"
        onSubmit={(credentials) =>
          signup(credentials, () => {
            navigation.navigate("MainFlow");
          })
        }
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
