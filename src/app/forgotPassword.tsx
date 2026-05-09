import Button from "@/components/molecules/button";
import MethodCard from "@/components/molecules/forgotMethod";
import { COLORS } from "@/constants/colors";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React, { useState } from "react";
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

const ForgotPasswordScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("2fa");

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.watermarkContainer}>
        <MaterialIcons name="lock" size={200} color="rgba(0,0,0,0.06)" />
      </View>

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 25 }}
        >
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Feather name="chevron-left" size={24} color={COLORS.dark_grey} />
          </TouchableOpacity>

          <View style={{ marginTop: 30, marginBottom: 30 }}>
            <Text style={styles.headerText}>Forgot Password</Text>
            <Text style={styles.subtitle}>
              Select which methods you'd like to reset.
            </Text>
          </View>

          <View style={{ gap: 15, width: "100%" }}>
            <MethodCard
              title="Email Address"
              subtitle="Send via email address securely."
              icon="mail"
              isSelected={selectedMethod === "email"}
              onPress={() => setSelectedMethod("email")}
            />
            <MethodCard
              title="2 Factor Authentication"
              subtitle="Send via 2FA securely."
              icon="smartphone"
              isSelected={selectedMethod === "2fa"}
              onPress={() => setSelectedMethod("2fa")}
            />
            <MethodCard
              title="Google Authenticator"
              subtitle="Send via authenticator securely."
              icon="lock"
              isSelected={selectedMethod === "auth"}
              onPress={() => setSelectedMethod("auth")}
            />
          </View>

          {/* Button */}
          <View style={{ width: "100%", marginTop: 30 }}>
            <Button 
                title="Reset Password" 
                handlePress={()=>alert('Password reset successfully!')}/>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  container: {
    flex: 1,
    width: "100%",
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  headerText: {
    color: COLORS.dark_grey,
    fontSize: 32,
    fontWeight: "900",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.light_grey,
  },

  watermarkContainer: {
    position: "absolute",
    bottom: -50,
    left: -30,
    zIndex: 0,
  },
});
