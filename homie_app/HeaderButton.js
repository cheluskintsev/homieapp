import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements";

const HeaderButton = ({ navigation, type = "settings" }) => {
  console.log(navigation);
  console.log(type);
  const buttonTypes = {
    settings: {
      title: "settings",
      icon: "cogs",
      view: "Settings"
    },
    moreSettings: {
      title: "moreSettings",
      icon: "cogs",
      view: "MoreSettings"
    },
    else: {
      title: "else",
      icon: "else",
      view: "else"
    },
    bliat: {
      title: "bliat",
      icon: "bliat",
      view: "BliatView"
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Settings")}
      style={{
        paddingRight: 10
      }}
    >
      <Icon name={buttonTypes[type].icon} type="font-awesome" color="black" />
    </TouchableOpacity>
  );
};

export default HeaderButton;
