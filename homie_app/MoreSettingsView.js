import React from "react";
import { Text, View } from "react-native";

class MoreSettingsView extends React.Component {
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
          MORE SETTINGS
        </Text>
      </View>
    );
  }
}

export default MoreSettingsView;
