import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const EditYourProfile = () => {
  return (
    <View style={styles.editYourProfile}>
      <View style={[styles.bottomNavigation, styles.menuLayout]}>
        <View style={[styles.menu, styles.linePosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition2]} />
          <View style={[styles.line, styles.lineBorder]} />
          <View style={styles.searchnormal}>
            <Text style={[styles.home, styles.homeFlexBox]}>Home</Text>
            <View style={[styles.searchnormalChild, styles.childPosition]} />
            <Image
              style={[styles.iconAdoption, styles.uiLineLayout]}
              contentFit="cover"
              source={require("../assets/icon--adoption.png")}
            />
          </View>
          <View style={styles.profileactive}>
            <Text style={[styles.profile, styles.homeFlexBox]}>Profile</Text>
            <Image
              style={styles.iconProfile}
              contentFit="cover"
              source={require("../assets/icon-profile1.png")}
            />
          </View>
          <View style={[styles.historynormal, styles.historynormalPosition]}>
            <Text style={[styles.orderHistory, styles.orderHistoryPosition]}>
              Order History
            </Text>
            <Image
              style={[styles.iconClock, styles.iconLayout1]}
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
              style={styles.uiIconAnnouncement}
              contentFit="cover"
              source={require("../assets/ui-icon--announcement1.png")}
            />
          </View>
        </View>
        <View style={[styles.uiLine, styles.uiLineLayout]}>
          <View style={[styles.uiLineChild, styles.linePosition]} />
          <View style={styles.rectangle1} />
        </View>
      </View>
      <Pressable style={styles.buttonsSolidNormal}>
        <View style={[styles.rectangle2, styles.rectanglePosition1]} />
        <Text style={[styles.getStarted, styles.getStartedTypo]}>
          Get Started
        </Text>
      </Pressable>
      <Text
        style={[
          styles.saurabhBuildingMaterialsContainer,
          styles.firmDetailFlexBox,
        ]}
      >
        <Text
          style={styles.saurabhBuildingMaterials}
        >{`Saurabh building materials 
Pandeypur, Varanasi
ADSEF095454IAFS`}</Text>
        <Text style={styles.gstinSaurabhSinghowner9}>
          <Text style={styles.gstin}>{`(GSTIN)
`}</Text>
          <Text style={styles.saurabhSinghowner91767676}>{`Saurabh Singh(Owner)
+917676767677`}</Text>
        </Text>
      </Text>
      <TextInput
        style={[styles.inputOcusedPhone, styles.inputactivatedTypo]}
        placeholder="Phone"
        keyboardType="phone-pad"
        placeholderTextColor="#4552cb"
      />
      <TextInput
        style={[styles.inputactivatedSucess, styles.inputactivatedTypo]}
        placeholder="Email"
        placeholderTextColor="#bbc3ce"
      />
      <Image
        style={[styles.hintSuccessIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/hint-success.png")}
      />
      <TextInput
        style={[styles.inputactivatedSucess1, styles.inputactivatedTypo]}
        placeholder="Full name"
        placeholderTextColor="#bbc3ce"
      />
      <Image
        style={styles.componentPhotoCircle}
        contentFit="cover"
        source={require("../assets/component--photo--circle1.png")}
      />
      <Image
        style={[styles.addIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/add-icon1.png")}
      />
      <View style={[styles.navBar88Pt, styles.navBar88PtLayout]}>
        <View style={[styles.rectangle3, styles.rectanglePosition]} />
        <View style={[styles.line1, styles.rectanglePosition]} />
        <Image
          style={styles.arrowLeftIcon}
          contentFit="cover"
          source={require("../assets/arrow-left.png")}
        />
        <Image
          style={[styles.closeIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/close-icon.png")}
        />
        <Text style={[styles.skip, styles.inputactivatedTypo]}>Skip</Text>
        <Image
          style={[styles.findIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/find-icon.png")}
        />
        <Image
          style={[styles.editIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/edit-icon.png")}
        />
        <Image
          style={[styles.shareIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/share.png")}
        />
        <Image
          style={[styles.mapPinIcon, styles.iconPosition]}
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
      </View>
      <View style={[styles.statusDefault, styles.linePosition2]}>
        <View style={[styles.rectangle4, styles.rectanglePosition]} />
        <View style={[styles.action, styles.timePosition]}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
        <Image
          style={[styles.containerIcon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/container1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuLayout: {
    height: 83,
    position: "absolute",
  },
  linePosition: {
    left: "0%",
    width: "100%",
  },
  rectanglePosition2: {
    backgroundColor: Color.gray_200,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  lineBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#f0f0f8",
    borderStyle: "solid",
  },
  homeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  childPosition: {
    height: 39,
    width: 60,
    marginLeft: -30,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  uiLineLayout: {
    height: 34,
    position: "absolute",
  },
  historynormalPosition: {
    height: 40,
    bottom: 35,
    position: "absolute",
  },
  orderHistoryPosition: {
    marginTop: 7,
    textAlign: "center",
    color: Color.silver,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectanglePosition1: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  getStartedTypo: {
    fontFamily: FontFamily.button,
    fontWeight: "700",
  },
  firmDetailFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  inputactivatedTypo: {
    fontSize: FontSize.h6Headline_size,
    fontFamily: FontFamily.h6Headline,
    fontWeight: "600",
    position: "absolute",
  },
  iconPosition1: {
    top: "50%",
    position: "absolute",
  },
  navBar88PtLayout: {
    width: 375,
    left: 0,
  },
  rectanglePosition: {
    display: "none",
    position: "absolute",
  },
  iconPosition: {
    top: 53,
    display: "none",
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    width: "6.4%",
    bottom: 11,
    display: "none",
    height: 24,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  plusAddIconPosition: {
    left: "88.27%",
    width: "6.4%",
    display: "none",
    height: 24,
    maxWidth: "100%",
    right: "5.33%",
    position: "absolute",
    overflow: "hidden",
  },
  linePosition2: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  timePosition: {
    width: 54,
    top: "50%",
    position: "absolute",
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
    position: "absolute",
  },
  home: {
    marginTop: 7.5,
    marginLeft: -14,
    color: Color.silver,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    left: "50%",
    top: "50%",
  },
  searchnormalChild: {
    marginTop: -21.5,
  },
  iconAdoption: {
    width: 34,
    left: 18,
    bottom: 17,
    height: 34,
  },
  searchnormal: {
    height: 41,
    bottom: 35,
    width: 70,
    left: 20,
    position: "absolute",
  },
  profile: {
    width: "48.57%",
    top: "68.29%",
    left: "25.71%",
    color: Color.violet,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
  },
  iconProfile: {
    top: -1,
    width: 30,
    height: 26,
    left: 20,
    position: "absolute",
  },
  profileactive: {
    left: "76%",
    right: "5.33%",
    width: "18.67%",
    height: 41,
    bottom: 35,
    position: "absolute",
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
    height: 40,
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
    height: 24,
    width: 24,
    bottom: 17,
    position: "absolute",
    overflow: "hidden",
  },
  exploreNormal: {
    right: "28.8%",
    left: "52.53%",
    width: "18.67%",
    height: 40,
  },
  menu: {
    right: "0%",
    left: "0%",
    height: 83,
    position: "absolute",
    bottom: -1,
  },
  uiLineChild: {
    height: "79.17%",
    top: "21.05%",
    bottom: "-0.22%",
    right: "0%",
    left: "0%",
    position: "absolute",
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
    width: "100%",
    right: "0%",
    bottom: -1,
  },
  bottomNavigation: {
    width: 375,
    left: 0,
    bottom: -1,
  },
  rectangle2: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.violet,
    position: "absolute",
  },
  getStarted: {
    marginTop: -10,
    marginLeft: -44,
    color: Color.white,
    fontSize: FontSize.body1_size,
    textAlign: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  buttonsSolidNormal: {
    top: 667,
    left: 48,
    width: 280,
    height: 46,
    position: "absolute",
  },
  saurabhBuildingMaterials: {
    lineHeight: 24,
    color: Color.gray_100,
    letterSpacing: 0.2,
    fontSize: FontSize.body1_size,
  },
  gstin: {
    color: Color.silver,
  },
  saurabhSinghowner91767676: {
    color: Color.gray_100,
  },
  gstinSaurabhSinghowner9: {
    fontSize: FontSize.body3_size,
    lineHeight: 18,
    letterSpacing: 0.2,
  },
  saurabhBuildingMaterialsContainer: {
    width: "89.33%",
    top: 529,
    left: "5.33%",
    fontFamily: FontFamily.body1,
  },
  inputOcusedPhone: {
    top: 408,
    height: 54,
    fontFamily: FontFamily.h6Headline,
    width: 335,
    left: 20,
  },
  inputactivatedSucess: {
    top: 341,
    left: 21,
    height: 54,
    fontFamily: FontFamily.h6Headline,
    width: 335,
  },
  hintSuccessIcon: {
    marginTop: 134,
    right: 31,
    width: 10,
    height: 10,
  },
  inputactivatedSucess1: {
    top: 264,
    height: 54,
    fontFamily: FontFamily.h6Headline,
    width: 335,
    left: 20,
  },
  componentPhotoCircle: {
    top: 120,
    left: 132,
    width: 112,
    height: 112,
    position: "absolute",
  },
  addIcon: {
    height: "3.57%",
    width: "7.73%",
    top: "14.66%",
    right: "34.93%",
    bottom: "81.77%",
    left: "57.33%",
  },
  rectangle3: {
    bottom: 1,
    height: 88,
    backgroundColor: Color.gray_200,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  line1: {
    width: "100.27%",
    right: "-0.13%",
    left: "-0.13%",
    height: 1,
    borderTopWidth: 1,
    borderColor: "#f0f0f8",
    borderStyle: "solid",
    bottom: 0,
  },
  arrowLeftIcon: {
    width: "8.53%",
    right: "87.73%",
    bottom: 7,
    left: "3.73%",
    height: 32,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  closeIcon: {
    left: 18,
  },
  skip: {
    right: 20,
    bottom: 15,
    letterSpacing: 0.1,
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    width: 58,
    height: 16,
    color: Color.violet,
  },
  findIcon: {
    left: 331,
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
  },
  heartFavouriteLike: {
    bottom: 11,
  },
  plusAddIcon: {
    bottom: 12,
  },
  navBar88Pt: {
    height: 88,
    top: 0,
    position: "absolute",
  },
  rectangle4: {
    backgroundColor: Color.whitesmoke_200,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.sFProText,
    fontWeight: "600",
    width: 54,
    color: Color.gray_100,
    textAlign: "center",
    left: 0,
  },
  action: {
    marginTop: -8,
    height: 18,
    left: 20,
  },
  containerIcon: {
    marginTop: -4.84,
    right: 15,
    width: 67,
    height: 12,
  },
  statusDefault: {
    right: 0,
    height: 44,
    top: 0,
  },
  editYourProfile: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default EditYourProfile;
