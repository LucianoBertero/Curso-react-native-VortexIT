import React, { useContext, useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Context } from "../context/BlogContext";
import { BLogPostForm } from "../components/BLogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const route = useRoute();
  const { id } = route.params;
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BLogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) =>
        editBlogPost(id, title, content, () => {
          navigation.pop();
        })
      }
    ></BLogPostForm>
    // <View>
    //   <Text style={styles.label}>Edit Title:</Text>
    //   <TextInput
    //     style={styles.input}
    //     value={title}
    //     onChange={(newTitle) => setTitle(newTitle)}
    //   ></TextInput>
    // </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default EditScreen;
