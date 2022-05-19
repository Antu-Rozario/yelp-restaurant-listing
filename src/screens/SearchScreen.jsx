import { useState } from "react";
import { StyleSheet, Text, View,ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errMsg] = useResults();
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={(text) => setTerm(text)}
        onTermSubmit={() => searchApi(term)}
      />
    
      {errMsg ? <Text>{errMsg}</Text> : null}
      <ScrollView>
      <ResultsList  title="Cost Effective" results={filterResultsByPrice("$")} />
      <ResultsList  title="Bit Pricier" results={filterResultsByPrice("$$")} />
      <ResultsList  title="Big Spender" results={filterResultsByPrice("$$$")} />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
