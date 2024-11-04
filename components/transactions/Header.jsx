import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { TouchableOpacity } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "expo-router";
import { ROUTES } from "../../constants/Routes";

const Header = () => {
  const navigation = useNavigation();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  const navigate = (to) => {
    navigation.navigate(to);
  };

  return (
    <View className="flex-row w-full p-5 items-center justify-between border">
      <TouchableOpacity
        onPress={() => navigate(ROUTES.TABS.Home)}
        className="flex-row items-center"
      >
        <Entypo name="chevron-left" size={19} color="white" />
        <Text className="text-white text-lg ml-1 font-semibold">Home</Text>
      </TouchableOpacity>
      <View className="flex-row items-center">
        <FontAwesome6 name="calendar" size={19} color="white" />
        <Text className="text-white text-lg ml-2 font-semibold">
          {formattedDate}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
