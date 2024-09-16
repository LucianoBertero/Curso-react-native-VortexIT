import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

export const ResultDetails = ({ results }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: results.image_url }} style={styles.image} />
      <Text style={styles.name}> {results.name} </Text>
      <Text>
        {results.rating} Stars, {results.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
