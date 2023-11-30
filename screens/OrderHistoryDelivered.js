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

const OrderHistoryDelivered = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.orderHistoryDelivered}>
      <View style={[styles.bottomNavigation, styles.menuLayout]}>
        <View style={[styles.menu, styles.linePosition]}>
          <View style={[styles.rectangle, styles.rectanglePosition2]} />
          <View style={[styles.line, styles.lineBorder]} />
          <View style={styles.searchnormal}>
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            <View style={[styles.searchnormalChild, styles.childPosition]} />
            <Image
              style={[styles.iconAdoption, styles.uiLineLayout]}
              contentFit="cover"
              source={require("../assets/icon--adoption.png")}
            />
          </View>
          <View style={styles.profilenormal}>
            <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
            <View style={[styles.searchnormalChild, styles.childPosition]} />
            <Image
              style={styles.iconProfile}
              contentFit="cover"
              source={require("../assets/icon-profile2.png")}
            />
          </View>
          <View
            style={[styles.appointmentsactive, styles.exploreNormalPosition]}
          >
            <Text style={[styles.orderHistory, styles.homeTypo]}>
              Order History
            </Text>
            <Image
              style={styles.iconClock}
              contentFit="cover"
              source={require("../assets/icon-clock1.png")}
            />
          </View>
          <View style={[styles.exploreNormal, styles.exploreNormalPosition]}>
            <Text style={[styles.notification, styles.homeTypo]}>
              Notification
            </Text>
            <View style={[styles.exploreNormalChild, styles.childPosition]} />
            <Image
              style={styles.uiIconAnnouncement}
              contentFit="cover"
              source={require("../assets/ui-icon--announcement2.png")}
            />
          </View>
        </View>
        <View style={[styles.uiLine, styles.uiLineLayout]}>
          <View style={[styles.uiLineChild, styles.linePosition]} />
          <View style={styles.rectangle1} />
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonsSolidNormal}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("MakeOrder")}
      >
        <View style={[styles.rectangle2, styles.rectanglePosition1]} />
        <Text style={[styles.findASpecialist, styles.pastTypo1]}>
          New Order
        </Text>
      </TouchableOpacity>
      <Text style={[styles.noDeliveredOrder, styles.upcomingTypo]}>
        No Delivered Order yet
      </Text>
      <View style={styles.icon}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View style={[styles.topNavigation, styles.rectangle3Layout]}>
        <View style={[styles.rectangle3, styles.rectangleShadowBox]} />
        <Pressable
          style={[styles.segmentedControls2Segments, styles.rectangleLayout]}
        >
          <View style={[styles.clinics, styles.rectangleLayout]}>
            <View style={[styles.rectangle4, styles.rectangleLayout]} />
            <View style={[styles.rectangle5, styles.rectangleLayout]} />
            <Text style={[styles.past, styles.pastLayout]}>Delivered</Text>
          </View>
          <View style={[styles.specialists, styles.pastLayout]}>
            <Text style={[styles.upcoming, styles.pastLayout]}>New</Text>
          </View>
        </Pressable>
        <View style={[styles.navBar88Pt, styles.navBar88PtLayout]}>
          <View style={[styles.rectangle6, styles.rectanglePosition]} />
          <View style={[styles.line1, styles.rectanglePosition]} />
          <Image
            style={[styles.arrowLeftIcon, styles.rectanglePosition]}
            contentFit="cover"
            source={require("../assets/arrow-left.png")}
          />
          <Image
            style={[styles.closeIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/close-icon1.png")}
          />
          <Text style={[styles.skip, styles.rectanglePosition]}>Skip</Text>
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
        <View style={[styles.statusDefault, styles.linePosition1]}>
          <View style={[styles.rectangle7, styles.rectanglePosition]} />
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
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xs,
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
  exploreNormalPosition: {
    height: 40,
    bottom: 35,
    position: "absolute",
  },
  rectanglePosition1: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  pastTypo1: {
    color: Color.white,
    fontSize: FontSize.body1_size,
    textAlign: "center",
  },
  upcomingTypo: {
    fontSize: FontSize.body1_size,
    textAlign: "center",
  },
  rectangle3Layout: {
    height: 176,
    width: 375,
    left: 0,
    position: "absolute",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 6,
    },
    top: 0,
  },
  rectangleLayout: {
    height: 38,
    position: "absolute",
  },
  pastLayout: {
    height: 20,
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
  linePosition1: {
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
    marginLeft: -14,
    color: Color.silver,
    left: "50%",
    top: "50%",
    marginTop: 7.5,
    textAlign: "center",
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xs,
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
    marginLeft: -17,
    width: 34,
    color: Color.silver,
    left: "50%",
    top: "50%",
    marginTop: 7.5,
    textAlign: "center",
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xs,
  },
  iconProfile: {
    top: -1,
    width: 30,
    height: 26,
    left: 20,
    position: "absolute",
  },
  profilenormal: {
    left: "76%",
    right: "5.33%",
    width: "18.67%",
    height: 41,
    bottom: 35,
    position: "absolute",
  },
  orderHistory: {
    width: "114.29%",
    top: "67.5%",
    left: "-7.14%",
    color: Color.violet,
  },
  iconClock: {
    height: "65%",
    width: "42.86%",
    top: "-5%",
    right: "28.57%",
    bottom: "40%",
    left: "28.57%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  appointmentsactive: {
    left: 108,
    height: 40,
    width: 70,
  },
  notification: {
    marginTop: 7,
    marginLeft: -29,
    color: Color.silver,
    left: "50%",
    top: "50%",
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
  },
  rectangle2: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.violet,
    position: "absolute",
  },
  findASpecialist: {
    marginTop: -10,
    marginLeft: -42,
    fontWeight: "700",
    fontFamily: FontFamily.button,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  buttonsSolidNormal: {
    top: 625,
    left: 67,
    width: 240,
    height: 46,
    position: "absolute",
  },
  noDeliveredOrder: {
    top: "49.38%",
    left: "28%",
    letterSpacing: 0.2,
    lineHeight: 24,
    fontFamily: FontFamily.body1,
    color: Color.silver,
    position: "absolute",
  },
  vectorIcon: {
    height: "85%",
    width: "85%",
    right: "7.5%",
    bottom: "15%",
    left: "7.5%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "14.78%",
    width: "32%",
    top: "33.25%",
    right: "33.87%",
    bottom: "51.97%",
    left: "34.13%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle3: {
    borderBottomRightRadius: Border.br_15xl,
    borderBottomLeftRadius: Border.br_15xl,
    backgroundColor: Color.white,
    shadowColor: "rgba(45, 54, 138, 0.08)",
    shadowRadius: 28,
    elevation: 28,
    height: 176,
    width: 375,
    left: 0,
    position: "absolute",
  },
  rectangle4: {
    borderRadius: Border.br_7xl,
    borderColor: "#e4e3f3",
    borderWidth: 1,
    borderStyle: "solid",
    height: 38,
    top: 0,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  rectangle5: {
    width: "50%",
    right: "0.15%",
    left: "49.85%",
    borderRadius: Border.br_xl,
    shadowColor: "rgba(42, 32, 73, 0.25)",
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 6,
    },
    top: 0,
    backgroundColor: Color.violet,
  },
  past: {
    width: "21.12%",
    left: "64.18%",
    fontFamily: FontFamily.h6Headline,
    fontWeight: "600",
    top: 9,
    height: 20,
    color: Color.white,
    fontSize: FontSize.body1_size,
    textAlign: "center",
  },
  clinics: {
    top: 0,
    left: "0%",
    width: "100%",
    right: "0%",
  },
  upcoming: {
    color: Color.gray_100,
    fontFamily: FontFamily.h6Headline,
    fontWeight: "600",
    fontSize: FontSize.body1_size,
    textAlign: "center",
    top: 0,
    left: "0%",
    width: "100%",
  },
  specialists: {
    width: "32.68%",
    right: "58.52%",
    left: "8.8%",
    top: 9,
    height: 20,
  },
  segmentedControls2Segments: {
    top: 112,
    width: 335,
    left: 20,
  },
  rectangle6: {
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
    display: "none",
    overflow: "hidden",
  },
  closeIcon: {
    left: 18,
  },
  skip: {
    right: 20,
    bottom: 15,
    fontSize: FontSize.h6Headline_size,
    letterSpacing: 0.1,
    textAlign: "right",
    alignItems: "center",
    width: 58,
    height: 16,
    fontFamily: FontFamily.h6Headline,
    fontWeight: "600",
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
  rectangle7: {
    backgroundColor: Color.whitesmoke_200,
    bottom: "0%",
    height: "100%",
    top: "0%",
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
    top: 0,
  },
  topNavigation: {
    top: 0,
  },
  orderHistoryDelivered: {
    backgroundColor: Color.ghostwhite_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default OrderHistoryDelivered;
