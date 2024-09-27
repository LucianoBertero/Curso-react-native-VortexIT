import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async (navigation) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigation.navigate("MainFlow"); // Usa navigation.navigate aquí
  } else {
    navigation.navigate("Signin"); // Dirige a Signin si no hay token
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }, callback) => {
    console.log("entro a sign up ");

    try {
      const response = await trackerApi.post("signup", { email, password });

      await AsyncStorage.setItem("token", response.data.token);

      dispatch({ type: "signup", payload: response.data.token });

      if (callback) {
        callback();
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

const signin =
  (dispatch) =>
  async ({ email, password }, callback) => {
    try {
      const response = await trackerApi.post("signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      if (callback) {
        callback();
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign in",
      });
    }
  };

const signout = (dispatch) => async (navigation) => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigation.navigate("Signin");
};
const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, clearErrorMessage, tryLocalSignin, signout },
  { token: null, errorMessage: "" }
);
