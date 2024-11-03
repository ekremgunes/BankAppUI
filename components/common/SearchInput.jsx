import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native";

const SearchInput = ({ val = "", set, handler }) => {
  const [value, setValue] = useState(val);

  const changeHandler = (e) => {
    setValue(e);
    set && set(e);
  };

  const submitHandler = (e) => {
    console.log("search: ", value);
    //...your actions
    handler && handler(value);
  };

  return (
    <View className="flex-1 mx-4 flex-row items-center justify-center bg-stone-800 p-2 rounded-2xl">
      
      <TouchableOpacity onPress={submitHandler} className="px-1">
        <Feather name="search" size={24} color="#78716c" />
      </TouchableOpacity>

      <TextInput
        className="color-white flex-1 ml-1"
        onChangeText={changeHandler}
        onSubmitEditing={submitHandler}
        placeholderTextColor={"#78716c"}
        placeholder="Search"
      >
        {value}
      </TextInput>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
