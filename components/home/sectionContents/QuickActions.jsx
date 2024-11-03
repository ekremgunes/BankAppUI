import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const QuickActions = () => {
  const scanQR = () => {};

  const create = () => {};

  return (
    <View className="flex-col h-32 justify-between w-16 mr-2">
      <TouchableOpacity
        style={{ borderRadius: 18 }}
        className="bg-stone-800 flex-1 justify-center items-center"
        onPress={scanQR}
      >
        <MaterialCommunityIcons name="qrcode-scan" size={24} color="white" />
      </TouchableOpacity>

      <View className="my-1"/>

      <TouchableOpacity
        style={{ borderRadius: 18 }}
        className="bg-stone-800 flex-1 justify-center items-center"
        onPress={create}
      >
        <MaterialCommunityIcons name="plus" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default QuickActions;

const styles = StyleSheet.create({});
