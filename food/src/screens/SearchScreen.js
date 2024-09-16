import React, { useState } from "react";

import { View, Text, ScrollView } from "react-native";
import { SearchBar } from "../components/SearchBar";
import { useResults } from "../hooks/useResults";
import { ResultsList } from "../components/ResultsList";

export const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        ></ResultsList>
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Big Pricer"
          navigation={navigation}
        ></ResultsList>
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Bigg Spender"
          navigation={navigation}
        ></ResultsList>
      </ScrollView>
    </>
  );
};
