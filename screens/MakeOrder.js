import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MakeOrder = () => {
  // const [rectangleDropdownOpen, setRectangleDropdownOpen] = useState(false);
  // const [rectangleDropdown1Open, setRectangleDropdown1Open] = useState(false);
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.makeOrder}
      locations={[0.59, 1]}
      colors={["#f9f8fd", "#fff"]}
    >
      {/* <View style={[styles.navBar88Pt, styles.navBar88PtPosition]}>
        <View style={styles.rectangle} />
        <View style={styles.line} />
        <Text style={styles.search}>Search</Text>
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrow-left.png")}
        />
        <Image
          style={[styles.closeIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/close-icon.png")}
        />
        <Text style={styles.skip}>Skip</Text>
        <Image
          style={[styles.findIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/find-icon.png")}
        />
        <Image
          style={[styles.editIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/edit-icon.png")}
        />
        <Image
          style={[styles.shareIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/share.png")}
        />
        <Image
          style={[styles.mapPinIcon, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/map-pin1.png")}
        />
        <Image
          style={[styles.heartFavouriteLike, styles.plusAddIconPosition]}
          contentFit="cover"
          source={require("../assets/heart-favourite-like1.png")}
        />
        <Image
          style={[styles.plusAddIcon, styles.plusAddIconPosition]}
          contentFit="cover"
          source={require("../assets/plus-add1.png")}
        />
      </View> */}
      {/* <View style={[styles.statusDefault, styles.navBar88PtPosition]}>
        <View style={[styles.rectangle1, styles.rectanglePosition]} />
        <View style={styles.action}>
          <Text style={styles.time}>9:41</Text>
        </View>
        <Image
          style={styles.containerIcon}
          contentFit="cover"
          source={require("../assets/container.png")}
        />
      </View> */}
      {/* <View style={styles.bottomNavigation}>
        <View style={[styles.menu, styles.menuPosition]}>
          <View style={styles.rectangle2} />
          <View style={[styles.line1, styles.line1Layout]} />
          <View style={[styles.searchactive, styles.searchactivePosition]}>
            <Text style={styles.search1}>Home</Text>
            <Image
              style={[styles.iconAdoption, styles.iconAdoptionLayout]}
              contentFit="cover"
              source={require("../assets/icon--adoption.png")}
            />
          </View>
          <View style={[styles.profilenormal, styles.searchactivePosition]}>
            <Text style={styles.profile}>Profile</Text>
            <View style={[styles.profilenormalChild, styles.childPosition]} />
            <Image
              style={[styles.iconProfile, styles.iconProfileLayout]}
              contentFit="cover"
              source={require("../assets/icon-profile2.png")}
            />
          </View>
          <View style={[styles.historynormal, styles.historynormalPosition]}>
            <Text style={[styles.orderHistory, styles.orderHistoryPosition]}>
              Order History
            </Text>
            <Image
              style={[styles.iconClock, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon-clock.png")}
            />
          </View>
          <View style={[styles.exploreNormal, styles.historynormalPosition]}>
            <Text style={[styles.notification, styles.orderHistoryPosition]}>
              Notification
            </Text>
            <View style={[styles.exploreNormalChild, styles.childPosition]} />
            <Image
              style={[styles.uiIconAnnouncement, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/ui-icon--announcement2.png")}
            />
          </View>
        </View>
        <View style={[styles.uiLine, styles.menuPosition]}>
          <View style={styles.uiLineChild} />
          <View style={styles.rectangle3} />
        </View>
      </View> */}
      <View style={[styles.makeOrderChild, styles.line1Layout]} />
      <Text style={[styles.totalUnit, styles.totalTypo]}>Total Unit</Text>
      <Text style={[styles.totalRm, styles.totalTypo]}>Total RM</Text>
      <Text style={[styles.mt, styles.totalTypo]}>MT</Text>
      <Text style={[styles.text, styles.textTypo6]}>50</Text>
      <Text style={[styles.text1, styles.textTypo6]}>1.980</Text>
      <Text style={[styles.text2, styles.textTypo6]}>150.22</Text>
      <View style={[styles.buttonsSolidNormal, styles.iconProfileLayout]}>
        <View style={[styles.rectangle4, styles.rectangle4Bg]} />
        <Text style={styles.edit}>Edit</Text>
      </View>
      <TouchableOpacity
        style={[styles.makeOrderItem, styles.rectangle4Bg]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Make")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <TextInput
        style={[styles.makeOrderInner, styles.makeLayout]}
        keyboardType="decimal-pad"
      />
      <TextInput
        style={[styles.rectangleTextinput, styles.makeChildBorder1]}
        keyboardType="number-pad"
      />
      <TextInput
        style={[styles.makeOrderChild1, styles.makeChildBorder]}
        keyboardType="number-pad"
      />
      <Text style={[styles.size, styles.sizeTypo]}>Size</Text>
      <Text style={[styles.unit, styles.sizeTypo]}>Unit</Text>
      <Text style={[styles.meter, styles.sizeTypo]}>Meter</Text>
      <Text style={[styles.text3, styles.textTypo5]}>3.60</Text>
      <Text style={[styles.text4, styles.textTypo5]}>100</Text>
      <Text style={[styles.text5, styles.textTypo5]}>360</Text>
      <TextInput
        style={[styles.makeOrderChild2, styles.makeChildLayout4]}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.makeOrderChild3, styles.makeChildLayout4]}
        keyboardType="number-pad"
      />
      <TextInput
        style={[styles.makeOrderChild4, styles.makeChildLayout4]}
        keyboardType="number-pad"
      />
      <Text style={[styles.text6, styles.textTypo4]}>3.60</Text>
      <Text style={[styles.text7, styles.textTypo5]}>100</Text>
      <Text style={[styles.text8, styles.textTypo4]}>360</Text>
      <TextInput
        style={[styles.makeOrderChild5, styles.makeChildLayout3]}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.makeOrderChild6, styles.makeChildLayout3]}
        keyboardType="number-pad"
      />
      <TextInput
        style={[styles.makeOrderChild7, styles.makeChildLayout3]}
        keyboardType="number-pad"
      />
      <Text style={[styles.text9, styles.textTypo3]}>3.60</Text>
      <Text style={[styles.text10, styles.textTypo5]}>100</Text>
      <Text style={[styles.text11, styles.textTypo3]}>360</Text>
      <TextInput
        style={[styles.makeOrderChild8, styles.makeChildLayout2]}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.makeOrderChild9, styles.makeChildLayout2]}
        keyboardType="number-pad"
      />
      <TextInput
        style={[styles.makeOrderChild10, styles.makeChildLayout2]}
        keyboardType="number-pad"
      />
      <Text style={[styles.text12, styles.textTypo2]}>3.60</Text>
      <Text style={[styles.text13, styles.textTypo5]}>100</Text>
      <Text style={[styles.text14, styles.textTypo2]}>360</Text>
      <TextInput
        style={[styles.makeOrderChild11, styles.makeChildLayout1]}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.makeOrderChild12, styles.makeChildLayout1]}
        keyboardType="number-pad"
      />
      <TextInput
        style={[styles.makeOrderChild13, styles.makeChildLayout1]}
        keyboardType="number-pad"
      />
      <Text style={[styles.text15, styles.textTypo1]}>3.60</Text>
      <Text style={[styles.text16, styles.textTypo5]}>100</Text>
      <Text style={[styles.text17, styles.textTypo1]}>360</Text>
      <TextInput
        style={[styles.makeOrderChild14, styles.makeChildLayout]}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.makeOrderChild15, styles.makeChildLayout]}
        keyboardType="number-pad"
      />
      <TextInput
        style={[styles.makeOrderChild16, styles.makeChildLayout]}
        keyboardType="number-pad"
      />
      <Text style={[styles.text18, styles.textTypo]}>3.60</Text>
      <Text style={[styles.text19, styles.textTypo5]}>100</Text>
      <Text style={[styles.text20, styles.textTypo]}>360</Text>
      <View style={[styles.wrapper, styles.wrapperLayout]}>
        {/* <DropDownPicker
          style={styles.dropdownpicker}
          open={rectangleDropdownOpen}
          setOpen={setRectangleDropdownOpen}
          dropDownContainerStyle={styles.rectangleDropdowndropDownContainer}
        /> */}
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <View style={[styles.container, styles.wrapperLayout]}>
        {/* <DropDownPicker
          style={styles.dropdownpicker}
          open={rectangleDropdown1Open}
          setOpen={setRectangleDropdown1Open}
          dropDownContainerStyle={styles.rectangleDropdown1dropDownContainer}
        /> */}
      </View>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={[styles.product, styles.brandTypo]}>Product</Text>
      <Text style={[styles.brand, styles.brandTypo]}>Brand</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rectangleDropdowndropDownContainer: {
    backgroundColor: "#dff6f1",
  },
  rectangleDropdown1dropDownContainer: {
    backgroundColor: "#dff6f1",
  },
  navBar88PtPosition: {
    height: 44,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout2: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconLayout1: {
    width: "6.4%",
    maxWidth: "100%",
    height: 24,
    bottom: 11,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  plusAddIconPosition: {
    left: "88.27%",
    right: "5.33%",
    width: "6.4%",
    maxWidth: "100%",
    height: 24,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    display: "none",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  menuPosition: {
    bottom: -1,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  line1Layout: {
    width: 376,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  searchactivePosition: {
    height: 41,
    bottom: 35,
    position: "absolute",
  },
  iconAdoptionLayout: {
    width: 34,
    height: 34,
  },
  childPosition: {
    height: 39,
    width: 60,
    left: "50%",
    marginLeft: -30,
    top: "50%",
    position: "absolute",
  },
  iconProfileLayout: {
    height: 26,
    position: "absolute",
  },
  historynormalPosition: {
    height: 40,
    bottom: 35,
    position: "absolute",
  },
  orderHistoryPosition: {
    marginTop: 7,
    color: Color.silver,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xs,
    left: "50%",
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: 17,
    position: "absolute",
  },
  totalTypo: {
    height: 20,
    width: 81,
    lineHeight: 16,
    fontSize: FontSize.caption_size,
    top: 47,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    color: Color.black,
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
  },
  textTypo6: {
    height: 14,
    width: 64,
    top: 74,
    lineHeight: 16,
    fontSize: FontSize.caption_size,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    color: Color.black,
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
  },
  rectangle4Bg: {
    backgroundColor: Color.violet,
    position: "absolute",
  },
  makeLayout: {
    height: 28,
    width: 73,
    borderWidth: 1,
    backgroundColor: Color.whitesmoke_100,
    top: 202,
    borderStyle: "solid",
    position: "absolute",
  },
  makeChildBorder1: {
    borderColor: "#e5e4e4",
    left: 150,
  },
  makeChildBorder: {
    borderColor: "#eae4e4",
    left: 275,
  },
  sizeTypo: {
    height: 15,
    width: 57,
    textAlign: "left",
    color: Color.royalblue_100,
    lineHeight: 16,
    fontSize: FontSize.caption_size,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    letterSpacing: 0,
    position: "absolute",
  },
  textTypo5: {
    height: 17,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.caption_size,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    color: Color.black,
    letterSpacing: 0,
    width: 58,
    position: "absolute",
  },
  makeChildLayout4: {
    top: 240,
    height: 28,
    width: 73,
    borderWidth: 1,
    backgroundColor: Color.whitesmoke_100,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo4: {
    top: 246,
    height: 17,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.caption_size,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    color: Color.black,
    letterSpacing: 0,
    width: 58,
    position: "absolute",
  },
  makeChildLayout3: {
    top: 277,
    height: 28,
    width: 73,
    borderWidth: 1,
    backgroundColor: Color.whitesmoke_100,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo3: {
    top: 283,
    height: 17,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.caption_size,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    color: Color.black,
    letterSpacing: 0,
    width: 58,
    position: "absolute",
  },
  makeChildLayout2: {
    top: 312,
    height: 28,
    width: 73,
    borderWidth: 1,
    backgroundColor: Color.whitesmoke_100,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo2: {
    top: 318,
    height: 17,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.caption_size,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    color: Color.black,
    letterSpacing: 0,
    width: 58,
    position: "absolute",
  },
  makeChildLayout1: {
    top: 350,
    height: 28,
    width: 73,
    borderWidth: 1,
    backgroundColor: Color.whitesmoke_100,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo1: {
    top: 356,
    height: 17,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.caption_size,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    color: Color.black,
    letterSpacing: 0,
    width: 58,
    position: "absolute",
  },
  makeChildLayout: {
    top: 387,
    height: 28,
    width: 73,
    borderWidth: 1,
    backgroundColor: Color.whitesmoke_100,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    top: 393,
    height: 17,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.caption_size,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    color: Color.black,
    letterSpacing: 0,
    width: 58,
    position: "absolute",
  },
  wrapperLayout: {
    height: 35,
    width: 154,
    top: 125,
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "81.16%",
    top: "16.87%",
    height: "1.97%",
    maxHeight: "100%",
    width: "6.4%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  brandTypo: {
    width: 94,
    height: 17,
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.caption_size,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    color: Color.black,
    letterSpacing: 0,
    position: "absolute",
  },
  rectangle: {
    bottom: 1,
    backgroundColor: Color.gray_200,
    height: 88,
    display: "none",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  line: {
    width: "100.27%",
    right: "-0.13%",
    left: "-0.13%",
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f8",
    bottom: 0,
    display: "none",
    position: "absolute",
  },
  search: {
    width: "69.87%",
    left: "14.93%",
    fontSize: FontSize.size_lg,
    letterSpacing: -0.1,
    fontFamily: FontFamily.montserratBold,
    color: Color.gray_100,
    justifyContent: "center",
    height: 24,
    alignItems: "center",
    textAlign: "center",
    fontWeight: "700",
    bottom: 11,
    display: "none",
    position: "absolute",
  },
  arrowLeftIcon: {
    width: "8.53%",
    right: "87.73%",
    bottom: 7,
    left: "3.73%",
    height: 32,
    maxWidth: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  closeIcon: {
    left: 18,
    top: 53,
    width: 24,
    display: "none",
    position: "absolute",
  },
  skip: {
    right: 20,
    bottom: 15,
    fontSize: FontSize.h6Headline_size,
    letterSpacing: 0.1,
    fontFamily: FontFamily.h6Headline,
    color: Color.violet,
    textAlign: "right",
    height: 16,
    width: 58,
    fontWeight: "600",
    alignItems: "center",
    display: "none",
    position: "absolute",
  },
  findIcon: {
    left: 331,
    top: 53,
    width: 24,
    display: "none",
    position: "absolute",
  },
  editIcon: {
    right: "12.8%",
    left: "80.8%",
  },
  shareIcon: {
    right: "15.47%",
    left: "78.13%",
  },
  mapPinIcon: {
    left: 304,
    top: 53,
    width: 24,
    display: "none",
    position: "absolute",
  },
  heartFavouriteLike: {
    bottom: 11,
    left: "88.27%",
  },
  plusAddIcon: {
    bottom: 12,
  },
  navBar88Pt: {
    width: 375,
  },
  rectangle1: {
    backgroundColor: Color.whitesmoke_200,
    position: "absolute",
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    lineHeight: 18,
    fontFamily: FontFamily.sFProText,
    color: Color.black,
    letterSpacing: 0,
    width: 54,
    top: "50%",
    fontWeight: "600",
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  action: {
    marginTop: -8,
    height: 18,
    width: 54,
    left: 20,
    top: "50%",
    position: "absolute",
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
  },
  rectangle2: {
    backgroundColor: Color.white,
    height: 83,
    bottom: 0,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  line1: {
    borderColor: "#f0f0f8",
    width: 376,
    left: 0,
    top: 0,
  },
  search1: {
    width: 60,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xs,
    marginLeft: -30,
    marginTop: 7.5,
    left: "50%",
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  iconAdoption: {
    height: 34,
    bottom: 17,
    position: "absolute",
    left: 18,
  },
  searchactive: {
    width: 70,
    left: 20,
  },
  profile: {
    marginLeft: -17,
    color: Color.silver,
    width: 34,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xs,
    left: "50%",
    marginTop: 7.5,
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  profilenormalChild: {
    marginTop: -21.5,
  },
  iconProfile: {
    top: -1,
    width: 30,
    left: 20,
  },
  profilenormal: {
    left: "76%",
    width: "18.67%",
    right: "5.33%",
    height: 41,
    bottom: 35,
  },
  orderHistory: {
    marginLeft: -34,
  },
  iconClock: {
    height: "65%",
    width: "42.86%",
    top: "-5%",
    right: "28.57%",
    bottom: "40%",
    left: "28.57%",
  },
  historynormal: {
    left: 108,
    width: 70,
  },
  notification: {
    marginLeft: -29,
  },
  exploreNormalChild: {
    marginTop: -21,
  },
  uiIconAnnouncement: {
    left: 23,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  exploreNormal: {
    right: "28.8%",
    left: "52.53%",
    width: "18.67%",
  },
  menu: {
    height: 83,
  },
  uiLineChild: {
    height: "79.17%",
    top: "21.05%",
    bottom: "-0.22%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangle3: {
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
    height: 34,
  },
  bottomNavigation: {
    top: 729,
    height: 83,
    left: -1,
    width: 375,
    position: "absolute",
  },
  makeOrderChild: {
    top: 105,
    borderColor: "#000",
    left: -1,
  },
  totalUnit: {
    left: 27,
  },
  totalRm: {
    left: 154,
  },
  mt: {
    left: 281,
  },
  text: {
    left: 37,
  },
  text1: {
    left: 292,
  },
  text2: {
    left: 154,
  },
  rectangle4: {
    borderRadius: Border.br_5xl,
    bottom: "0%",
    top: "0%",
    height: "100%",
    display: "none",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  edit: {
    marginTop: -10,
    marginLeft: -14.5,
    fontSize: FontSize.body1_size,
    fontFamily: FontFamily.button,
    color: Color.white,
    left: "50%",
    top: "50%",
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  buttonsSolidNormal: {
    width: "28.53%",
    right: "68%",
    bottom: 103,
    left: "3.47%",
  },
  makeOrderItem: {
    top: 683,
    left: 324,
    borderRadius: Border.br_mid,
    height: 34,
    width: 34,
  },
  vectorIcon: {
    height: "1.92%",
    width: "5.19%",
    top: "85.22%",
    right: "6.28%",
    bottom: "12.85%",
    left: "88.53%",
  },
  makeOrderInner: {
    borderColor: "#cbc2c2",
    left: 29,
  },
  rectangleTextinput: {
    height: 28,
    width: 73,
    borderWidth: 1,
    backgroundColor: Color.whitesmoke_100,
    top: 202,
    borderStyle: "solid",
    position: "absolute",
  },
  makeOrderChild1: {
    height: 28,
    width: 73,
    borderWidth: 1,
    backgroundColor: Color.whitesmoke_100,
    top: 202,
    borderStyle: "solid",
    position: "absolute",
  },
  size: {
    left: 38,
    top: 177,
    height: 15,
    width: 57,
    textAlign: "left",
    color: Color.royalblue_100,
  },
  unit: {
    top: 180,
    left: 158,
  },
  meter: {
    left: 282,
    top: 177,
    height: 15,
    width: 57,
    textAlign: "left",
    color: Color.royalblue_100,
  },
  text3: {
    top: 208,
    height: 17,
    left: 37,
  },
  text4: {
    top: 207,
    left: 158,
  },
  text5: {
    left: 285,
    top: 208,
    height: 17,
  },
  makeOrderChild2: {
    borderColor: "#cbc2c2",
    left: 29,
  },
  makeOrderChild3: {
    borderColor: "#e5e4e4",
    left: 150,
  },
  makeOrderChild4: {
    borderColor: "#eae4e4",
    left: 275,
  },
  text6: {
    left: 39,
  },
  text7: {
    top: 245,
    left: 158,
  },
  text8: {
    left: 285,
  },
  makeOrderChild5: {
    borderColor: "#cbc2c2",
    left: 29,
  },
  makeOrderChild6: {
    borderColor: "#e5e4e4",
    left: 150,
  },
  makeOrderChild7: {
    borderColor: "#eae4e4",
    left: 275,
  },
  text9: {
    left: 37,
  },
  text10: {
    top: 282,
    left: 158,
  },
  text11: {
    left: 285,
  },
  makeOrderChild8: {
    borderColor: "#cbc2c2",
    left: 29,
  },
  makeOrderChild9: {
    borderColor: "#e5e4e4",
    left: 150,
  },
  makeOrderChild10: {
    borderColor: "#eae4e4",
    left: 275,
  },
  text12: {
    left: 37,
  },
  text13: {
    top: 317,
    left: 158,
  },
  text14: {
    left: 285,
  },
  makeOrderChild11: {
    borderColor: "#cbc2c2",
    left: 29,
  },
  makeOrderChild12: {
    borderColor: "#e5e4e4",
    left: 150,
  },
  makeOrderChild13: {
    borderColor: "#eae4e4",
    left: 275,
  },
  text15: {
    left: 39,
  },
  text16: {
    top: 355,
    left: 158,
  },
  text17: {
    left: 285,
  },
  makeOrderChild14: {
    borderColor: "#cbc2c2",
    left: 29,
  },
  makeOrderChild15: {
    borderColor: "#e5e4e4",
    left: 150,
  },
  makeOrderChild16: {
    borderColor: "#eae4e4",
    left: 275,
  },
  text18: {
    left: 37,
  },
  text19: {
    top: 392,
    left: 158,
  },
  text20: {
    left: 285,
  },
  dropdownpicker: {
    backgroundColor: Color.lightcyan,
  },
  wrapper: {
    left: 34,
  },
  vectorIcon1: {
    right: "50.13%",
    left: "43.47%",
  },
  container: {
    left: 195,
  },
  vectorIcon2: {
    right: "7.2%",
    left: "86.4%",
  },
  product: {
    top: 134,
    left: 208,
  },
  brand: {
    top: 132,
    left: 42,
  },
  makeOrder: {
    flex: 1,
    height: 812,
    backgroundColor: Color.gradientBg,
    overflow: "hidden",
    width: "100%",
  },
});

export default MakeOrder;
