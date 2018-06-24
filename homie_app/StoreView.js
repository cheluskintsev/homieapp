import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

class StoreView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: <Text style={{ fontSize: 18, color: "black" }}>STORE</Text>
    };
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
          STORE
        </Text>
      </View>
    );
  }
}

export default StoreView;
