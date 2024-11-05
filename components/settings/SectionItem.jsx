import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


const SectionItem = ({ props }) => {
  const { icon, title, action } = props;

  return (
    <TouchableOpacity
      onPress={action}
      style={{ borderBottomWidth: 0.2 }}
      className="flex-row justify-between items-center py-5  border-b-stone-500/70"
    >
      <View className="flex-row items-center">
        <MaterialIcons name={icon} size={27} color="white" />
        <Text className="text-white font-semibold tracking-wide text-lg ml-4">
          {title}
        </Text>
      </View>

      <MaterialIcons name="arrow-right" size={27} color="gray" />
    </TouchableOpacity>
  );
};

export default SectionItem;

const styles = StyleSheet.create({});
