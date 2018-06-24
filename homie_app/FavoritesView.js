import React from "react";
import { View, Text } from "react-native";

class FavoritesView extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            fontSize: 36
          }}
        >
          FAVORITES
        </Text>
      </View>
    );
  }
}

export default FavoritesView;
