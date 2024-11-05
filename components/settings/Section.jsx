import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Section = ({ title, children }) => {
  return (
    <>
      <Text className="mt-5 text-white font-semibold text-lg">{title}</Text>
      <View className="bg-stone-900 my-3 px-4  rounded-3xl justify-center">{children}</View>
    </>
  );
};

export default Section;

const styles = StyleSheet.create({});
