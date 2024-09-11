import React, { useReducer } from "react";
import { Image, Text, StyleSheet, View, Button } from "react-native";
import { useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const { count } = state;

  return (
    <View>
      <Button
        title="Increse"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      ></Button>
      <Button
        title="drecrement"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      ></Button>
      <Text>Current Count: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
