import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const NavigationTab = ({ backgroundColor, color, onPress, title }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: backgroundColor,
          width: 90,
          height: 40,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            color: color,
            fontSize: 16
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationTab;
