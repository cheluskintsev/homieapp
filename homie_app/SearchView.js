import React from "react";
import { View, Text } from "react-native";

class SearchView extends React.Component {
  static navigationOptions = {
    title: "Search"
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            fontSize: 36
          }}
        >
          SEARCH
        </Text>
      </View>
    );
  }
}

export default SearchView;
