import * as React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SearchThankYou = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchThankYou}>
      <LinearGradient
        style={[styles.background, styles.backgroundPosition]}
        locations={[0.3, 1]}
        colors={["#4552cb", "#4596ea"]}
      />
      <TouchableOpacity
        style={styles.buttonsSolidNormal}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("OrderHistory")}
      >
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Text style={[styles.goToMy, styles.yourFlexBox]}>
          Go to Order History
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addOneMoreContainer}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("MakeOrder")}
      >
        <Text style={[styles.addOneMoreOrder, styles.timeFlexBox]}>
          + add one more order
        </Text>
      </TouchableOpacity>
      <View style={[styles.dayAndTime, styles.dayLayout]}>
        <View style={[styles.dayAndTimeChild, styles.dayLayout]} />
        <Text style={[styles.s12BhimaNagar, styles.timeTypo]}>
          S12 bhima nagar Varanasi
        </Text>
      </View>
      <Text
        style={[styles.yourOrderWill, styles.yourOrderWillLayout]}
      >{`Your order will be shipped at
`}</Text>
      <Text style={[styles.yourOrderHas, styles.yourFlexBox]}>{`Your order
has been placed`}</Text>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/icon.png")}
      />
      <View style={[styles.statusDefault, styles.yourOrderWillLayout]}>
        <View style={[styles.rectangle1, styles.rectanglePosition]} />
        <View style={[styles.action, styles.timePosition]}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
        <Image
          style={styles.containerIcon}
          contentFit="cover"
          source={require("../assets/container2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundPosition: {
    top: 0,
    left: 0,
  },
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  yourFlexBox: {
    textAlign: "center",
    color: Color.white,
  },
  timeFlexBox: {
    letterSpacing: 0,
    textAlign: "center",
  },
  dayLayout: {
    height: 35,
    width: 260,
    position: "absolute",
  },
  timeTypo: {
    fontWeight: "600",
    color: Color.white,
  },
  yourOrderWillLayout: {
    height: 44,
    position: "absolute",
  },
  timePosition: {
    width: 54,
    top: "50%",
    position: "absolute",
  },
  background: {
    width: 375,
    backgroundColor: Color.gradientBg,
    left: 0,
    position: "absolute",
    height: 812,
  },
  rectangle: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.violet,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 2,
  },
  goToMy: {
    marginTop: -10,
    marginLeft: -75,
    left: "50%",
    fontFamily: FontFamily.button,
    fontWeight: "700",
    color: Color.white,
    position: "absolute",
    fontSize: FontSize.body1_size,
    top: "50%",
  },
  buttonsSolidNormal: {
    top: 605,
    left: 68,
    width: 240,
    height: 46,
    position: "absolute",
  },
  addOneMoreOrder: {
    fontSize: FontSize.caption_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.caption,
    color: Color.ghostwhite_200,
    width: 179,
    height: 15,
    opacity: 0.8,
  },
  addOneMoreContainer: {
    left: 99,
    top: 510,
    position: "absolute",
  },
  dayAndTimeChild: {
    borderRadius: Border.br_lg,
    backgroundColor: "rgba(71, 45, 164, 0.6)",
    left: 0,
    top: 0,
  },
  s12BhimaNagar: {
    top: 7,
    left: 31,
    fontFamily: FontFamily.h6Headline,
    textAlign: "right",
    width: 207,
    height: 22,
    fontSize: FontSize.body1_size,
    position: "absolute",
  },
  dayAndTime: {
    top: 454,
    left: 56,
  },
  yourOrderWill: {
    top: 394,
    left: 61,
    letterSpacing: 0.2,
    lineHeight: 24,
    fontFamily: FontFamily.body1,
    width: 255,
    textAlign: "center",
    color: Color.white,
    fontSize: FontSize.body1_size,
  },
  yourOrderHas: {
    top: 316,
    left: 93,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0.5,
    fontFamily: FontFamily.button,
    fontWeight: "700",
    color: Color.white,
    position: "absolute",
  },
  icon: {
    top: 124,
    left: 131,
    width: 114,
    height: 114,
    position: "absolute",
  },
  rectangle1: {
    backgroundColor: Color.whitesmoke_200,
    display: "none",
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    lineHeight: 18,
    fontFamily: FontFamily.sFProText,
    fontWeight: "600",
    color: Color.white,
    letterSpacing: 0,
    textAlign: "center",
    left: 0,
  },
  action: {
    marginTop: -8,
    left: 20,
    height: 18,
  },
  containerIcon: {
    marginTop: -4.84,
    right: 15,
    width: 67,
    height: 12,
    top: "50%",
    position: "absolute",
  },
  statusDefault: {
    right: 0,
    left: 0,
    top: 0,
  },
  searchThankYou: {
    backgroundColor: Color.white,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default SearchThankYou;
