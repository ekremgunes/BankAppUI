import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "expo-router";
import { ROUTES } from "../../constants/Routes";

const Header = ({leftTitle,navigateTo,rightTitle,rightIcon,rightAction=null}) => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate(navigateTo);
  };

  return (
    <View className="flex-row w-full p-5 items-center justify-between border">
      <TouchableOpacity
        onPress={navigate}
        className="flex-row items-center"
      >
        <Entypo name="chevron-left" size={19} color="white" />
        <Text className="text-white text-lg ml-1 font-semibold">{leftTitle}</Text>
      </TouchableOpacity>
      <Pressable onPress={rightAction} className="flex-row items-center">
        <FontAwesome6 name={rightIcon} size={19} color="white" />
        <Text className="text-white text-lg ml-2 font-semibold">
          {rightTitle}
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
