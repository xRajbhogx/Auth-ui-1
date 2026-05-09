import SocialButton from "@/components/atoms/socialLogin";
import Button from "@/components/molecules/button";
import Header from "@/components/molecules/header";
import InputField from "@/components/molecules/inputField";
import { COLORS } from "@/constants/colors";
import { router } from "expo-router";
import React from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
        >
          <View
            style={{
              paddingTop: 40,
              marginBottom: 50,
            }}
          >
            <Header
              title="Sign In"
              subtitle="Let's experience the joy of telecare AI."
            />
          </View>

          <View style={{ gap: 20, width: "100%" }}>
            <InputField
              title="Email Address"
              placeHolder="elementary221b@gmail.com"
              icon="mail"
            />
            <InputField
              title="Password"
              placeHolder="Enter your password..."
              icon="lock"
            />
          </View>

          <View style={{ width: "100%", marginTop: 25 }}>
            <Button 
                title="Sign In"
                handlePress={()=>alert('Login Successful!!')} />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              paddingTop: 35,
            }}
          >
            <SocialButton icon="facebook-f" />
            <SocialButton icon="google" />
            <SocialButton icon="instagram" />
          </View>

          <View style={{ alignItems: "center", paddingTop: 35, gap: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/signUp")}>
                <Text style={{ color: COLORS.green, fontWeight: "400" }}>
                  Sign Up.
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => router.push("/forgotPassword")}>
              <Text
                style={{ color: COLORS.green, textDecorationLine: "underline" }}
              >
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  container: {
    flex: 1,
    width: "100%",
    // backgroundColor: 'red',
    // justifyContent: 'center',
  },
});
