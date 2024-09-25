import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return { ...state, isSignedIn: true };

    case "add_error":
      return { ...state, errorMessage: action.payload };

    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    console.log("Intentando registrarse con:", email, password);
    try {
      const response = await trackerApi.post(`signup`, {
        email: email,
        password: password,
      });
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error(
        "Error en el registro:",
        error.response ? error.response.data : error.message
      );
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up",
      });
    }
  };
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signout },
  { isSignedIn: false }
);
