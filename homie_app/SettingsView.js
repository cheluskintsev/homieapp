import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

class SettingsView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
          Settings
        </Text>
      ),
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate("MoreSettings")}
          style={{
            paddingRight: 10
          }}
        >
          <Icon name="cogs" type="font-awesome" color="black" />
        </TouchableOpacity>
      )
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
          SETTINGS
        </Text>
      </View>
    );
  }
}

export default SettingsView;
