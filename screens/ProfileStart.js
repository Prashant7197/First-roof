import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProfileStart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileStart}>
        <View style={[styles.uiLine, styles.uiLineLayout]}>
          <View style={[styles.uiLineChild, styles.rectangle4Position]} />
          <View style={styles.rectangle1} />
        </View>
      
      <Pressable
        style={[styles.controlsTableviewDefault, styles.controlsLayout]}
      >
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
        <View
          style={[styles.textinputnormalNoplaceholde, styles.controlsLayout]}
        >
          <Text style={[styles.myPets, styles.myPetsClr]}>My Order</Text>
          <Image
            style={styles.petIconPosition}
            contentFit="cover"
            source={require("../assets/pet.png")}
          />
          <View style={[styles.line1, styles.lineBorder]} />
        </View>
      </Pressable>
      <Pressable
        style={[styles.controlsTableviewDefault1, styles.controlsLayout]}
      >
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
        <View
          style={[styles.textinputnormalNoplaceholde, styles.controlsLayout]}
        >
          <Text style={[styles.myPets, styles.myPetsClr]}>Payment History</Text>
          <Image
            style={styles.settingsGearIconPosition}
            contentFit="cover"
            source={require("../assets/heart-favourite-like1.png")}
          />
          <View style={[styles.line1, styles.lineBorder]} />
        </View>
      </Pressable>
      <Pressable
        style={[styles.controlsTableviewDefault2, styles.controlsLayout]}
      >
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
        <View
          style={[styles.textinputnormalNoplaceholde, styles.controlsLayout]}
        >
          <Text style={[styles.myPets, styles.myPetsClr]}>
            Terms and Policies
          </Text>
          <Image
            style={styles.questionMarkCirclePosition}
            contentFit="cover"
            source={require("../assets/help-medic-briefcase.png")}
          />
          <View style={[styles.line1, styles.lineBorder]} />
        </View>
      </Pressable>
      <Pressable
        style={[styles.controlsTableviewDefault3, styles.controlsLayout]}
      >
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
        <View
          style={[styles.textinputnormalNoplaceholde, styles.controlsLayout]}
        >
          <Text style={[styles.myPets, styles.myPetsClr]}>Invite friends</Text>
          <Image
            style={styles.questionMarkCirclePosition}
            contentFit="cover"
            source={require("../assets/announcement.png")}
          />
          <View style={[styles.line1, styles.lineBorder]} />
        </View>
      </Pressable>
      <Pressable
        style={[styles.controlsTableviewDefault4, styles.controlsLayout]}
      >
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
        <View
          style={[styles.textinputnormalNoplaceholde, styles.controlsLayout]}
        >
          <Text style={[styles.myPets, styles.myPetsClr]}>Help</Text>
          <Image
            style={styles.questionMarkCirclePosition}
            contentFit="cover"
            source={require("../assets/question-mark-circle1.png")}
          />
          <View style={[styles.line1, styles.lineBorder]} />
        </View>
      </Pressable>
      <Pressable
        style={[styles.controlsTableviewDefault5, styles.controlsLayout]}
      >
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow.png")}
        />
        <View
          style={[styles.textinputnormalNoplaceholde, styles.controlsLayout]}
        >
          <Text style={[styles.myPets, styles.myPetsClr]}>Settings</Text>
          <Image
            style={styles.settingsGearIconPosition}
            contentFit="cover"
            source={require("../assets/settings-gear.png")}
          />
          <View style={[styles.line1, styles.lineBorder]} />
        </View>
      </Pressable>
      <View style={styles.aboutPosition}>
        <View style={[styles.rectangle2, styles.aboutPosition]} />
        <Image
          style={styles.componentPhotoCircle}
          contentFit="cover"
          source={require("../assets/component--photo--circle1.png")}
        />
        <Text style={[styles.raviJoseph, styles.myPetsClr]}>Ravi Joseph</Text>
        <Text style={[styles.kiev, styles.kievTypo]}>Kiev</Text>
      </View>
      <TouchableOpacity
        style={styles.logout}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.editTypo}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
  lineBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#f0f0f8",
    borderStyle: "solid",
    position: "absolute",
  },
  uiLineLayout: {
    height: 34,
    position: "absolute",
  },
  rectangle4Position: {
    right: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  controlsLayout: {
    width: 335,
    position: "absolute",
  },
  myPetsClr: {
    color: Color.gray_100,
    position: "absolute",
  },
  settingsGearIconPosition: {
    left: 6,
    top: -6,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  questionMarkCirclePosition: {
    left: "1.8%",
    bottom: "28%",
    right: "91.02%",
    top: "-24%",
    width: "7.19%",
    height: "96%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  petIconPosition: {
    left: "1.79%",
    right: "91.04%",
    width: "7.16%",
    bottom: "28%",
    top: "-24%",
    height: "96%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  aboutPosition: {
    height: 314,
    top: 0,
    width: "100%",
    left: 0,
    position: "absolute",
  },
  kievTypo: {
    fontFamily: FontFamily.body1,
    lineHeight: 24,
    letterSpacing: 0.2,
    fontSize: FontSize.body1_size,
  },
  editTypo: {
    height: 26,
    width: 58,
    alignItems: "center",
    display: "flex",
    textAlign: "right",
    fontFamily: FontFamily.h6Headline,
    letterSpacing: 0.1,
    fontSize: FontSize.h6Headline_size,
    fontWeight: "900",
    color: Color.violet,
    fontSize: 15,
  },
  rectangle: {
    bottom: 0,
    height: 83,
    position: "absolute",
  },
  line: {
    width: 376,
    top: 0,
    left: 0,
  },
  uiIconAnnouncement: {
    left: 23,
    height: 24,
    width: 24,
    bottom: 17,
    position: "absolute",
    overflow: "hidden",
  },
  uiLineChild: {
    height: "79.17%",
    top: "21.05%",
    bottom: "-0.22%",
    left: "0%",
  },
  rectangle1: {
    width: "35.2%",
    right: "32.27%",
    bottom: 8,
    left: "32.53%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.silver,
    height: 5,
    position: "absolute",
  },
  uiLine: {
    left: "0%",
    bottom: -1,
    right: "0%",
    width: "100%",
  },
  arrowIcon: {
    top: 14,
    left: 318,
    width: 8,
    height: 13,
    position: "absolute",
  },
  myPets: {
    left: 52,
    textAlign: "left",
    width: 257,
    height: 22,
    fontFamily: FontFamily.body1,
    lineHeight: 24,
    letterSpacing: 0.2,
    fontSize: FontSize.body1_size,
    bottom: 7,
  },
  settingsGearIcon: {
    display: "none",
  },
  questionMarkCircle: {
    display: "none",
  },
  line1: {
    width: "84.78%",
    right: "-0.2%",
    left: "15.42%",
    bottom: 0,
  },
  textinputnormalNoplaceholde: {
    height: 25,
    bottom: 0,
    left: 0,
  },
  controlsTableviewDefault: {
    top: 346,
    height: 40,
    left: 20,
  },
  petIcon1: {
    display: "none",
  },
  controlsTableviewDefault1: {
    top: 410,
    height: 40,
    left: 20,
  },
  controlsTableviewDefault2: {
    top: 474,
    height: 40,
    left: 20,
  },
  controlsTableviewDefault3: {
    top: 538,
    height: 40,
    left: 20,
  },
  controlsTableviewDefault4: {
    top: 602,
    height: 40,
    left: 20,
  },
  controlsTableviewDefault5: {
    top: 666,
    height: 40,
    left: 20,
  },
  rectangle2: {
    borderBottomRightRadius: Border.br_15xl,
    borderBottomLeftRadius: Border.br_15xl,
    backgroundColor: Color.white,
    shadowColor: "rgba(45, 54, 138, 0.08)",
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowRadius: 28,
    elevation: 28,
    shadowOpacity: 1,
  },
  componentPhotoCircle: {
    top: 80,
    left: 142,
    width: 132,
    height: 132,
    position: "absolute",
  },
  raviJoseph: {
    top: 232,
    left: 119,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0.5,
    fontWeight: "700",
    fontFamily: FontFamily.button,
    textAlign: "center",
  },
  kiev: {
    top: 266,
    left: 173,
    width: 31,
    height: 20,
    textAlign: "center",
    color: Color.silver,
    position: "absolute",
  },
  heartFavouriteLike6: {
    bottom: 11,
  },
  logout: {
    right: 31,
    bottom: 504,
    position: "absolute",
  },
  rectangle4: {
    height: "100%",
    top: "0%",
    bottom: "0%",
    backgroundColor: Color.whitesmoke_200,
    display: "none",
    left: "0%",
  },
  profileStart: {
    backgroundColor: Color.ghostwhite_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfileStart;
