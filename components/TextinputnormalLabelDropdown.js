import * as React from "react";
import { View, StyleProp, ViewStyle, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const TextinputnormalLabelDropdo = ({ style }) => {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Text style={styles.firmDetail}>Firm Detail</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  firmDetail: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: "0%",
    fontSize: FontSize.size_5xl,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.button,
    color: Color.silver,
    textAlign: "left",
  },
  view: {
    width: 335,
    height: 30,
  },
});

export default TextinputnormalLabelDropdo;
