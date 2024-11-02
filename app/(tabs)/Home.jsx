import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView></SafeAreaView>
      <Text className="bg-red-300 p-5">test</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
