import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
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
    console.log("entro a sign in ");
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

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin },
  { isSignedIn: false, errorMessage: "" }
);
