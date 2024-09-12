import React, { useState } from "react";
import { View, Text } from "react-native";
import { SearchBar } from "../components/SearchBar";
import yelp from "../api/yelp";

export const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log(searchTerm);
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => searchApi(term)}
      ></SearchBar>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>Wew have found {results.length}</Text>
    </View>
  );
};
