import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const TabBar = ({ state, descriptors, navigation }) => {
  const [activeTab, setActiveTab] = useState(state.routes[state.index].name);
  
  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      const currentTab = state.routes[state.index].name;
      setActiveTab(currentTab);
    });

    return unsubscribe;
  }, [navigation, state]);

  const iconConfig = {
    Home: { icon: "home-outline", component: Ionicons, size: 26 },
    Wallet: { icon: "wallet-outline", component: Ionicons, size: 24 },
    Contact: { icon: "mail-outline", component: Ionicons, size: 24 },
    Transactions: { icon: "arrow-right-arrow-left", component: FontAwesome6, size: 21 },
    Settings: { icon: "settings-outline", component: Ionicons, size: 24 },
  };

  const handlePress = (route, index) => {
    const isFocused = state.index === index;
    if (!isFocused) {
      setActiveTab(route.name);
      navigation.navigate(route.name, route.params);
    }
  };

  useEffect(() => {
  console.log("active:",activeTab)
  }, [activeTab])

  return (
    <View
      className={` flex-row bottom-0 justify-around items-center px-2 py-2 m-4 rounded-full ${
        activeTab === "Settings" ? "bg-black m-0 px-6 pb-6 rounded-none" : "bg-stone-900 absolute"
      }`}
    >
      {state.routes.map((route, index) => {
        if (!iconConfig[route.name]) return null;

        const isFocused = state.index === index;
        const IconComponent = iconConfig[route.name].component;
        const iconName = iconConfig[route.name].icon;
        const iconSize = iconConfig[route.name].size;
        const iconColor = isFocused ? "#fff" : "#b2b2b2";

        return (
          <TouchableOpacity
            key={index}
            className="flex-1"
            onPress={() => handlePress(route, index)}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={descriptors[route.key].options.tabBarAccessibilityLabel}
            testID={descriptors[route.key].options.tabBarTestID}
          >
            <View className={`self-center ${route.name === "Home" ? "bg-stone-800 p-2.5 px-3 rounded-2xl" : ""}`}>
              <IconComponent name={iconName} size={iconSize} color={iconColor} />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
