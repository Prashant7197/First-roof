import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Button as RNEButton } from "@rneui/themed";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <LinearGradient
        style={[styles.background, styles.backgroundPosition]}
        locations={[0.3, 1]}
        colors={["#4552cb", "#4596ea"]}
      />
      <RNPTextInput
        style={styles.facebookButton}
        placeholder="Enter Username"
        mode="outlined"
        placeholderTextColor="#4552cb"
        theme={{
          fonts: {
            regular: { fontFamily: "Encode Sans", fontWeight: "Regular" },
          },
          colors: { text: "#4552cb" },
        }}
      />
      <RNPTextInput
        style={[styles.facebookButton1, styles.googleButtonPosition]}
        placeholder="Enter Password"
        mode="outlined"
        placeholderTextColor="#4552cb"
        theme={{
          fonts: {
            regular: { fontFamily: "Encode Sans", fontWeight: "Regular" },
          },
          colors: { text: "#4552cb" },
        }}
      />
      <View style={styles.signIn}>
        <RNEButton
          title="Forgot Password?"
          radius="5"
          iconPosition="left"
          type="clear"
          color="#fff"
          titleStyle={styles.forgotPasswordBtn}
          containerStyle={styles.forgotPasswordBtn1}
          buttonStyle={styles.forgotPasswordBtn2}
        />
        <RNEButton
          title="Click Here"
          radius="5"
          iconPosition="left"
          type="clear"
          color="#fff"
          titleStyle={styles.clickHereBtn}
          onPress={() => Linking.openURL("www.google.com")}
          containerStyle={styles.clickHereBtn1}
          buttonStyle={styles.clickHereBtn2}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonsOutlineNormal, styles.googleButtonPosition]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.rectangle, styles.linePosition]} />
        <Text style={[styles.registerWithEmail, styles.timeFlexBox]}>
          Login
        </Text>
      </TouchableOpacity>
      <Text style={[styles.welcomeTo, styles.petCareTypo]}>{`Welcome To `}</Text>
      <Text style={[styles.petCare, styles.petCareTypo]}>First Roof</Text>
      <View style={[styles.uiLine, styles.linePosition]}>
        <View style={[styles.uiLineChild, styles.linePosition]} />
        <View style={styles.rectangle2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPasswordBtn: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "EncodeSans-Regular",
  },
  forgotPasswordBtn1: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  clickHereBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "EncodeSans-Bold",
    left: 10,
  },
  clickHereBtn1: {
    left: 137,
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  clickHereBtn2: {},
  backgroundPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  googleButtonPosition: {
    left: 54,
    height: 46,
    width: 295,
    position: "absolute",
  },
  linePosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  timeFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  petCareTypo: {
    textAlign: "left",
    fontSize: FontSize.size_25xl,
    fontFamily: FontFamily.button,
    fontWeight: "700",
    position: "absolute",
  },
  background: {
    width: "100%",
    backgroundColor: Color.gradientBg,
    left: 0,
    height: "100%",
  },
  facebookButton: {
    top: 295,
    left: 54,
    height: 46,
    width: 295,
    position: "absolute",
  },
  facebookButton1: {
    top: 365,
    left: 64,
    height: 46,
    width: 295,
    position: "absolute",
  },
  signIn: {
    top: 581,
    left: 79,
    width: 218,
    height: 24,
    position: "absolute",
  },
  rectangle: {
    borderRadius: Border.br_5xl,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
  },
  registerWithEmail: {
    marginTop: -10,
    marginLeft: -139.5,
    left: "50%",
    fontSize: FontSize.body1_size,
    width: 280,
    height: 21,
    fontFamily: FontFamily.button,
    fontWeight: "700",
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  buttonsOutlineNormal: {
    top: 456,
  },
  welcomeTo: {
    top: 128,
    height: 110,
    color: Color.white,
    fontSize: FontSize.size_25xl,
    left: 75,
    width: 305,
  },
  petCare: {
    top: 189,
    left: 95,
    color: Color.yellow,
    width: 313,
    height: 55,
  },
  rectangle1: {
    backgroundColor: Color.whitesmoke_200,
    display: "none",
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
  },
  uiLineChild: {
    height: "79.17%",
    top: "21.05%",
    bottom: "-0.22%",
    left: "0%",
    right: "0%",
  },
  rectangle2: {
    width: "35.2%",
    right: "32.27%",
    bottom: 8,
    left: "32.53%",
    borderRadius: Border.br_8xs,
    height: 5,
    position: "absolute",
    backgroundColor: Color.white,
  },
  uiLine: {
    bottom: 0,
    height: 34,
    left: "0%",
    right: "0%",
  },
  login: {
    flex: 1,
    overflow: "hidden",
    height: "100%",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Login;
