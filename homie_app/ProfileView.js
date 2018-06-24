import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HeaderButton from "./HeaderButton";

class ProfileView extends React.Component {
  static navigationOptions = navigation => {
    return {
      headerTitle: "Profile",
      headerRight: <HeaderButton navigation={navigation} type="settings" />
    };
  };

  render() {
    const { navigation } = this.props;
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
          PROFILE
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          style={{
            marginTop: 20,
            paddingVertical: 20,
            paddingHorizontal: 40,
            borderColor: "black",
            borderWidth: 2,
            borderRadius: 20
          }}
        >
          <Text
            style={{
              fontSize: 20
            }}
          >
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProfileView;
