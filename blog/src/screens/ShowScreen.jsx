import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native"; // Hook para acceder a la ruta actual
import { Context as blogContext } from "../context/BlogContext";
const ShowScreen = () => {
  const route = useRoute();
  const { id } = route.params;

  const { state } = useContext(blogContext);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  console.log(id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
      <Text>ID: {id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
