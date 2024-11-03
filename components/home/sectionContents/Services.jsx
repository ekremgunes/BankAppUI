import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const Services = () => {
  return (
    <TouchableOpacity
      onPress={{}}
      className="bg-stone-800 rounded-3xl flex-1 px-4 p-3 h-32 flex-col justify-between"
    >
      <View className="bg-stone-700 w-14 h-14 rounded-2xl justify-center items-center">
        <SimpleLineIcons name="grid" size={24} color="white" />
      </View>
      <Text className="text-white tracking-wide font-bold text-md">
        Services
      </Text>
    </TouchableOpacity>
  );
};

export default Services;

const styles = StyleSheet.create({});
