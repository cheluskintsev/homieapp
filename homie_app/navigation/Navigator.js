import React from "react";
import { View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Icon } from "react-native-elements";
import FavoritesView from "../FavoritesView";
import MoreSettingsView from "../MoreSettingsView";
import ProfileView from "../ProfileView";
import SearchView from "../SearchView";
import SettingsView from "../SettingsView";
import StoreView from "../StoreView";

const BottomNavigator = createBottomTabNavigator(
  {
    Store: { screen: StoreView },
    Search: { screen: SearchView },
    Favorites: { screen: FavoritesView },
    Profile: { screen: ProfileView }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "Store":
            return (
              <Icon type="font-awesome" name="shopping-bag" color="black" />
            );
          case "Search":
            return <Icon type="font-awesome" name="search" color="black" />;
          case "Favorites":
            return <Icon type="font-awesome" name="heart" color="black" />;
          case "Profile":
            return <Icon type="font-awesome" name="user" color="black" />;
          default:
            null;
        }
        return <Icon type="font-awesome" name={iconName} color="black" />;
      },
      tabBarOptions: {
        showLabel: false
      }
    })
  }
);

export const stack = {
  Main: { screen: BottomNavigator },
  MoreSettings: { screen: MoreSettingsView },
  Settings: { screen: SettingsView }
};

export const RootNavigator = createStackNavigator(stack, {
  mode: "card",
  headerMode: "float",
  initialRouteName: "Main"
});

class Navigator extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RootNavigator />
      </View>
    );
  }
}

export default Navigator;
