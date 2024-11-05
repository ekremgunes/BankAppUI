import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Animated, { FadeInDown } from "react-native-reanimated";

const QuickActions = () => {
  const scanQR = () => {};

  const create = () => {};

  return (
    <Animated.View
    entering={FadeInDown.duration(600).delay(300).springify().damping(10)} className="flex-col h-32 justify-between w-16 mr-2">
      <TouchableOpacity
        style={{ borderRadius: 18 }}
        className="bg-stone-900 flex-1 justify-center items-center"
        onPress={scanQR}
      >
        <MaterialCommunityIcons name="qrcode-scan" size={24} color="white" />
      </TouchableOpacity>

      <View className="my-1"/>

      <TouchableOpacity
        style={{ borderRadius: 18 }}
        className="bg-stone-900 flex-1 justify-center items-center"
        onPress={create}
      >
        <MaterialCommunityIcons name="plus" size={32} color="white" />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default QuickActions;

const styles = StyleSheet.create({});
