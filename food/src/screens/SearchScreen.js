import React, { useState } from "react";

import { View, Text } from "react-native";
import { SearchBar } from "../components/SearchBar";
import { useResults } from "../hooks/useResults";
import { ResultsList } from "../components/ResultsList";

export const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  console.log(results);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList title="Cost Effective"></ResultsList>
      <ResultsList title="Big Pricer"></ResultsList>
      <ResultsList title="Bigg Spender"></ResultsList>
    </View>
  );
};
