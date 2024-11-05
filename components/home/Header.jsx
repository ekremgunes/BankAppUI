import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Avatar from "../common/Avatar";
import SearchInput from "../common/SearchInput";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "expo-router";
import { ROUTES } from '../../constants/Routes';
import Animated, { FadeInDown } from "react-native-reanimated";

const Header = () => {
  const navigation = useNavigation();
  
  const navigate = (to) => {
    navigation.navigate(to);
  };
  
  return (
    <Animated.View  className="flex-row w-full p-5 items-center justify-between border">
      <Avatar></Avatar>
      <SearchInput />

      <View className="w-16 flex-row items-center justify-around ">
        <TouchableOpacity onPress={()=>navigate(ROUTES.STACK.Notifications)}>
          <Ionicons name="notifications-outline" size={25} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigate(ROUTES.STACK.Menu)}>
          <Feather name="menu" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({});
