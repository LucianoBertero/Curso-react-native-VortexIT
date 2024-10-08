import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { BLogPostForm } from "../components/BLogPostForm";

const CreateScreen = ({ navigation }) => {
  //   const [title, setTitle] = useState("");
  //   const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <BLogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    ></BLogPostForm>
    // <View>
    //   <Text style={styles.label}>Enter Title:</Text>
    //   <TextInput
    //     style={styles.input}
    //     value={title}
    //     onChangeText={(newTitle) => setTitle(newTitle)} // Cambiar onChange por onChangeText
    //   />
    //   <Text style={styles.label}>Enter Content:</Text>
    //   <TextInput
    //     style={styles.input}
    //     value={content}
    //     onChangeText={(newContent) => setContent(newContent)} // Cambiar onChange por onChangeText
    //   />
    //   <Button
    //     title="Add Blog Post"
    //     onPress={() => {
    //       addBlogPost(title, content, () => {
    //         navigation.navigate("Index");
    //       });
    //     }}
    //   />
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

export default CreateScreen;
