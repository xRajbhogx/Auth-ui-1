import { COLORS } from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

interface InputProps {
  title: string;
  placeHolder: string;
  icon: "mail" | "lock";
  // onChangeText: (text: string) => void
}

const InputField = ({ title, placeHolder, icon }: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={{ color: COLORS.dark_grey, fontWeight: "600" }}>
        {" "}
        {title}{" "}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          paddingHorizontal: 15,
          paddingVertical: 5,
          gap: 2,
          borderRadius: 18,
          elevation: 4,
          borderWidth: isFocused ? 2 : 0,
          borderColor: isFocused ? COLORS.green : "white",
          shadowColor: isFocused ? COLORS.green : COLORS.dark_grey,
          shadowOpacity: 0.8,
          shadowOffset: {
            height: 5,
            width: 5,
          },
        }}
      >
        <Feather name={icon} size={18} color={COLORS.dark_grey} />
        <TextInput
          placeholder={placeHolder}
          style={{ flex: 1 }}
          keyboardType={icon === "mail" ? "email-address" : "default"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={()=>{}}
          secureTextEntry = {icon==='lock'? true: false}
        ></TextInput>
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    gap: 5,
    paddingHorizontal: 25,
  },
});
