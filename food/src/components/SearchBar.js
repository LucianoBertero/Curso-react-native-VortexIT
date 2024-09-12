import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.Background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        value={term}
        autoCorrect={false}
        onChangeText={onTermChange}
        styles={styles.inputStyle}
        onEndEditing={onTermSubmit}
        placeholder="Search"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  Background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
