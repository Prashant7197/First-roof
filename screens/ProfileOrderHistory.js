import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ProfileOrderHistory = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileOrderHistory}>
      <View style={[styles.bottomNavigation, styles.menuLayout]}>
        <View style={[styles.menu, styles.linePosition1]}>
          <View style={[styles.rectangle, styles.rectanglePosition1]} />
          <View style={[styles.line, styles.lineBorder]} />
          <View style={styles.searchnormal}>
            <Text style={styles.home}>Home</Text>
            <View style={[styles.searchnormalChild, styles.childPosition]} />
            <Image
              style={[styles.iconAdoption, styles.uiLineLayout]}
              contentFit="cover"
              source={require("../assets/icon--adoption.png")}
            />
          </View>
          <View style={styles.profileactive}>
            <Text style={styles.profile}>Profile</Text>
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
              style={[styles.iconClock, styles.iconLayout2]}
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
          <View style={[styles.uiLineChild, styles.linePosition1]} />
          <View style={styles.rectangle1} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button2TypeIcon}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("MakeOrder")}
      >
        <Image
          style={[styles.rectangleIcon, styles.rectanglePosition]}
          contentFit="cover"
          source={require("../assets/rectangle2.png")}
        />
        <View style={styles.text}>
          <Image
            style={[styles.editPenFile, styles.editPenFilePosition]}
            contentFit="cover"
            source={require("../assets/edit-pen-file.png")}
          />
          <Image
            style={[styles.plusAddIcon, styles.editPenFilePosition]}
            contentFit="cover"
            source={require("../assets/plus-add3.png")}
          />
          <Text style={styles.addAnotherPet}>Add Your First Order</Text>
        </View>
      </TouchableOpacity>
      <View style={[styles.about, styles.aboutPosition]}>
        <View style={[styles.rectangle2, styles.aboutPosition]} />
        <View style={styles.buttonEdit}>
          <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
          <Image
            style={styles.xmlid234Icon}
            contentFit="cover"
            source={require("../assets/xmlid-234.png")}
          />
        </View>
        <Text style={[styles.troy, styles.troyTypo]}>Troy</Text>
        <Text style={styles.toyTerrier}>Toy terrier</Text>
      </View>
      <View style={[styles.navBar88Pt, styles.navBar88PtLayout]}>
        <View style={[styles.rectangle3, styles.navBar88PtLayout]} />
        <View style={[styles.line1, styles.lineBorder]} />
        <Text style={[styles.myPets, styles.edit1FlexBox]}>Order History</Text>
        <View style={styles.arrowLeft}>
          <TouchableOpacity
            style={styles.xmlid1536}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("Make")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/xmlid-1536.png")}
            />
          </TouchableOpacity>
        </View>
        <Image
          style={[styles.closeIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/close-icon.png")}
        />
        <Text style={[styles.edit1, styles.edit1FlexBox]}>Edit</Text>
        <Image
          style={[styles.findIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/find-icon.png")}
        />
        <Image
          style={[styles.editIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/close-icon1.png")}
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
          style={[styles.heartFavouriteLike, styles.plusAddPosition]}
          contentFit="cover"
          source={require("../assets/heart-favourite-like1.png")}
        />
        <TouchableOpacity
          style={[styles.plusAdd, styles.plusAddPosition]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("MakeOrder")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/plus-add1.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.statusDefault, styles.linePosition]}>
        <View style={[styles.rectangle4, styles.rectanglePosition]} />
        <View style={[styles.action, styles.timePosition]}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
        <Image
          style={styles.containerIcon}
          contentFit="cover"
          source={require("../assets/container.png")}
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
  linePosition1: {
    left: "0%",
    width: "100%",
  },
  rectanglePosition1: {
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
  iconLayout2: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectanglePosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  editPenFilePosition: {
    width: 31,
    height: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  aboutPosition: {
    height: 279,
    marginLeft: -167.5,
    width: 335,
    left: "50%",
    position: "absolute",
  },
  editTypo: {
    textAlign: "right",
    fontFamily: FontFamily.h6Headline,
    letterSpacing: 0.1,
    fontSize: FontSize.h6Headline_size,
    fontWeight: "600",
    color: Color.violet,
  },
  troyTypo: {
    color: Color.gray_100,
    fontFamily: FontFamily.button,
    fontWeight: "700",
    textAlign: "center",
  },
  navBar88PtLayout: {
    height: 88,
    position: "absolute",
  },
  edit1FlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
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
  plusAddPosition: {
    left: "88.27%",
    width: "6.4%",
    height: 24,
    right: "5.33%",
    position: "absolute",
  },
  linePosition: {
    top: 0,
    left: 0,
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
  },
  home: {
    marginTop: 7.5,
    marginLeft: -14,
    textAlign: "center",
    color: Color.silver,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.4,
    left: "50%",
    top: "50%",
    position: "absolute",
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
    textAlign: "center",
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xs,
    position: "absolute",
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
    maxHeight: "100%",
    position: "absolute",
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
    bottom: -1,
    left: "0%",
    right: "0%",
    height: 83,
    position: "absolute",
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
    bottom: -1,
    right: "0%",
  },
  bottomNavigation: {
    top: 729,
    width: 375,
    left: 0,
    height: 83,
  },
  rectangleIcon: {
    borderRadius: Border.br_4xs,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  editPenFile: {
    marginTop: -1,
    marginLeft: -39,
    display: "none",
  },
  plusAddIcon: {
    marginLeft: -103,
    marginTop: -12,
  },
  addAnotherPet: {
    marginTop: -10,
    marginLeft: -61.75,
    textAlign: "left",
    width: 165,
    fontFamily: FontFamily.button,
    fontWeight: "700",
    fontSize: FontSize.body1_size,
    color: Color.violet,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: -103.5,
    width: 206,
    marginTop: -12,
    height: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  button2TypeIcon: {
    top: 415,
    height: 46,
    width: 335,
    left: 20,
    position: "absolute",
  },
  rectangle2: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.white,
    shadowColor: "rgba(45, 54, 138, 0.08)",
    shadowOffset: {
      width: 4,
      height: 6,
    },
    shadowRadius: 28,
    elevation: 28,
    shadowOpacity: 1,
    bottom: 0,
  },
  edit: {
    height: "94.12%",
    top: "5.88%",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  xmlid234Icon: {
    height: "94.1%",
    width: "27.59%",
    right: "51.72%",
    bottom: "5.9%",
    left: "20.69%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  buttonEdit: {
    top: 23,
    left: 253,
    height: 17,
    width: 58,
    position: "absolute",
  },
  troy: {
    bottom: 68,
    left: 141,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0.5,
    position: "absolute",
  },
  toyTerrier: {
    bottom: 40,
    left: 131,
    letterSpacing: 0.2,
    lineHeight: 24,
    fontFamily: FontFamily.body1,
    fontSize: FontSize.body1_size,
    textAlign: "center",
    color: Color.silver,
    position: "absolute",
  },
  about: {
    bottom: 429,
    display: "none",
  },
  rectangle3: {
    bottom: 1,
    display: "none",
    backgroundColor: Color.gray_200,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  line1: {
    width: "100.27%",
    right: "-0.13%",
    left: "-0.13%",
    display: "none",
    bottom: 0,
  },
  myPets: {
    width: "69.87%",
    left: "14.93%",
    fontSize: FontSize.size_lg,
    display: "flex",
    justifyContent: "center",
    bottom: 11,
    color: Color.gray_100,
    fontFamily: FontFamily.button,
    fontWeight: "700",
    textAlign: "center",
    height: 24,
    letterSpacing: 0.4,
    alignItems: "center",
  },
  icon: {
    maxHeight: "100%",
  },
  xmlid1536: {
    left: "18.35%",
    top: "25.92%",
    right: "18.31%",
    bottom: "25.75%",
    width: "63.33%",
    height: "48.33%",
    position: "absolute",
  },
  arrowLeft: {
    width: "8.53%",
    right: "87.73%",
    bottom: 7,
    left: "3.73%",
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  closeIcon: {
    left: 18,
  },
  edit1: {
    right: 20,
    bottom: 15,
    height: 16,
    textAlign: "right",
    fontFamily: FontFamily.h6Headline,
    letterSpacing: 0.1,
    fontSize: FontSize.h6Headline_size,
    fontWeight: "600",
    color: Color.violet,
    width: 58,
    display: "none",
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
    display: "none",
    maxWidth: "100%",
    overflow: "hidden",
  },
  plusAdd: {
    bottom: 12,
  },
  navBar88Pt: {
    top: 0,
    left: 0,
    width: 375,
  },
  rectangle4: {
    backgroundColor: Color.whitesmoke_200,
    display: "none",
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.sFProText,
    color: Color.black,
    fontWeight: "600",
    width: 54,
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
    top: "50%",
    position: "absolute",
  },
  statusDefault: {
    right: 0,
    height: 44,
    position: "absolute",
  },
  profileOrderHistory: {
    backgroundColor: Color.ghostwhite_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfileOrderHistory;
