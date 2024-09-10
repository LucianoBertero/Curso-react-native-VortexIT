import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

export const ListScreen = () => {
  const friends = [
    { name: "friend #1", age: 20, key: "1" },
    { name: "friend #2", age: 45, key: "2" },
    { name: "friend #3", age: 32, key: "3" },
    { name: "friend #4", age: 27, key: "4" },
    { name: "friend #5", age: 53, key: "5" },
    { name: "friend #6", age: 30, key: "6" },
    { name: "friend #7", age: 25, key: "7" },
    { name: "friend #8", age: 40, key: "8" },
  ];
  return (
    <FlatList
      //   horizontal
      //   showsHorizontalScrollIndicator={false}
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={(element) => {
        return (
          <Text style={styles.textStyles}>
            {element.item.name} - Age {element.item.age} - Key{" "}
            {element.item.key}
          </Text>
        );
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyles: { marginVertical: 45 },
});
