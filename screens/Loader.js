import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Loader = () => {
  return (
    <LinearGradient
      style={styles.loader}
      locations={[0.3, 1]}
      colors={["#4552cb", "#4596ea"]}
    >
      <Image
        style={styles.cementSheetsRemovebgPreviewIcon}
        contentFit="cover"
        source={require("../assets/cementsheetsremovebgpreview-1.png")}
      />
      <Text style={[styles.firstRoof, styles.timeFlexBox]}>First Roof</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: "center",
    color: Color.white,
    lineHeight: 38,
    letterSpacing: 0,
    position: "absolute",
  },
  cementSheetsRemovebgPreviewIcon: {
    top: 257,
    left: 36,
    width: 287,
    height: 149,
    position: "absolute",
  },
  firstRoof: {
    top: 500,
    left: 67,
    fontSize: 32,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    width: 248,
    height: 154,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  loader: {
    flex: 1,
    height: 812,
    overflow: "visible",
    backgroundColor: Color.gradientBg,
    width: "100%",
  },
});

export default Loader;
