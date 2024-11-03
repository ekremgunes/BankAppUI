import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/home/Header";

const Home = () => {
  return (
    <View className="flex-1 bg-black py-3">
      <SafeAreaView></SafeAreaView>
      <Header></Header>
      <Text className="bg-gray-700 p-5 flex-1">test</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
