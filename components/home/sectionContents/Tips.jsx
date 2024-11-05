import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Animated, { FadeInDown } from "react-native-reanimated";


const Tips = () => {
  return (
    <Animated.View
      entering={FadeInDown.duration(600).delay(340).springify().damping(10)}
      className="bg-stone-900 rounded-3xl flex-1 px-4 p-3 h-32 flex-col justify-between"
    >
      <View className="bg-stone-800 w-14 h-14 rounded-2xl justify-center items-center">
        <SimpleLineIcons name="graduation" size={24} color="white" />
      </View>
      <Text className="text-white tracking-wide font-bold text-md">
        Tips and training
      </Text>
    </Animated.View>
  );
};

export default Tips;

const styles = StyleSheet.create({});
