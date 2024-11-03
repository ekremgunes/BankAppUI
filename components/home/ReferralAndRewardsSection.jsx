import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const ReferralAndRewardsSection = () => {
  const learnMore = () => {};
  return (
    <View className="overflow-hidden bg-stone-900 rounded-3xl flex-1 mx-5 my-3 p-4 h-44 flex-col justify-between">
      <View>
        <Text className="text-white tracking-wide font-bold text-2xl">
          Refer and Earn
        </Text>
        <Text className="text-stone-500 tracking-wide w-1/2 text-sm">
          Share a referal link to your friend and get rewarded
        </Text>
      </View>
      <TouchableOpacity
        onPress={learnMore}
        className="bg-stone-800 px-3 py-1.5 rounded-lg self-start"
      >
        <Text className="text-white font-semibold tracking-wide">
          Learn More
        </Text>
      </TouchableOpacity>
      <Image
        style={{ left: "53%", width: "74%" }}
        resizeMode="cover"
        className="absolute object-cover h-44"
        source={require("../../assets/images/referer_icon2.png")}
      ></Image>
    </View>
  );
};

export default ReferralAndRewardsSection;

const styles = StyleSheet.create({});
