import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View className="absolute flex-row bottom-0 justify-around items-center bg-stone-900 px-2 py-1.5 m-4 rounded-full">
      {state.routes.map((route, index) => {
        var content = "";
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if (
          !["Home", "Settings", "Wallet", "Contact", "Transactions"].includes(
            route.name
          )
        )
          return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        switch (label) {
          case "Home":
            content = (
              <View className="bg-stone-700 p-2.5 px-3 justify-self-center self-center rounded-2xl">
                <Ionicons
                  name="home-outline"
                  size={26}
                  color={isFocused ? "#fff" : "#b2b2b2"}
                />
              </View>
            );
            break;
          case "Wallet":
            content = (
              <Ionicons
                name="wallet-outline"
                size={24}
                color={isFocused ? "#fff" : "#b2b2b2"}
              />
            );
            break;
          case "Contact":
            content = (
              <Ionicons
                name="mail-outline"
                size={24}
                color={isFocused ? "#fff" : "#b2b2b2"}
              />
            );
            break;
          case "Transactions":
            content = (
              <FontAwesome6
                name="arrow-right-arrow-left"
                size={21}
                color={isFocused ? "#fff" : "#b2b2b2"}
              />
            );
            break;
          case "Settings":
            content = (
              <Ionicons
                name="settings-outline"
                size={24}
                color={isFocused ? "#fff" : "#b2b2b2"}
              />
            );
            break;
          default:
            break;
        }

        return (
          <TouchableOpacity
            key={index}
            className="bg-inherit flex-1"
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
          >
            <View className="self-center">{content}</View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({});
