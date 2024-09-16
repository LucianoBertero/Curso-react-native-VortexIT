import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { useRoute } from "@react-navigation/native"; // Hook para acceder a la ruta actual
import yelp from "../api/yelp";

export const ResultsShowScreen = () => {
  const [result, setResult] = useState(null);
  const route = useRoute();
  const { id } = route.params;

  const getResul = async (id) => {
    const result = await yelp.get(`/${id}`);
    setResult(result.data);
  };

  useEffect(() => {
    getResul(id);
  }, [id]);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => {
          return photo;
        }}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }}></Image>;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
  },
});
