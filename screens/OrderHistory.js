import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Switch,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import CustomSwitch from "../navigation/CustomSwitch";

const OrderHistory = () => {
  const [
    segmentedControls2SegmentsSwitchValueState,
    setSegmentedControls2SegmentsSwitchValueState,
  ] = useState(false);
  const navigation = useNavigation();

  const onSelectSwitch = index => {
    alert('Selected index: ' + index);
  };

  return (
    <View style={styles.orderHistory}>
      
    <View style={{flex: 1, backgroundColor: "ffffff"}}>
    <ScrollView contentContainerStyle={{
                paddingBottom: 700
            }} showsHorizontalScrollIndicator={false}>
      <View style={[styles.topNavigation, styles.rectangle2Layout]}>
        <View style={[styles.topNavigationChild, styles.linePosition]} />
        <SafeAreaView style={[styles.rectangle2, styles.rectangle2ShadowBox]} />
        <Text style={{ 
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
          top: 40,
          }}>
          Order History
          </Text>
        <View style={{alignItems: 'center', margin: 20, top: 50}}>
        <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={'New'}
          option2={'Delivered'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'blue'}
        />
      </View>
      </View>
      <View style={styles.orderHistoryChild} />
      <View style={styles.orderHistoryItem} />
      <SafeAreaView
        style={[styles.componentCardFin, styles.button2TypeIconLayout]}
      >
        <View
          style={[styles.componentCardFinChild, styles.rectangle2ShadowBox]}
        />
        <View style={[styles.location, styles.ellipseIconLayout]}>
          <Image
            style={[styles.ellipseIcon, styles.ellipseIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse2.png")}
          />
          <Image
            style={[styles.mapPinIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/map-pin.png")}
          />
          <Text style={[styles.km, styles.kmTypo]}>345.70</Text>
        </View>
        <View style={styles.general}>
          <View style={[styles.rating, styles.skipLayout]}>
            <Text style={[styles.unit, styles.kmTypo]}>125 Unit</Text>
          </View>
          <Text style={styles.orderId534352726374762}>
            Order id: 534352726374762
          </Text>
          <View style={styles.price}>
            <Image
              style={[styles.ellipseIcon1, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse3.png")}
            />
            <Image
              style={[styles.walletIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/wallet1.png")}
            />
            <Text style={[styles.text, styles.kmTypo]}>4.505</Text>
          </View>
        </View>
        <Image
          style={[styles.rectangleIcon, styles.iconLayout4]}
          contentFit="cover"
          source={require("../assets/rectangle1.png")}
        />
        <Text style={[styles.readyToShip, styles.kmTypo]}>Ready to Ship</Text>
        <View style={[styles.workAndTime, styles.timeLayout]}>
          <View style={[styles.time1, styles.timeLayout]}>
            <Text style={[styles.wed9Sep, styles.wed9SepTypo]}>
              Wed 9 Sep — 10:30 am
            </Text>
            <Image
              style={[styles.iconCircleTime, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/icon--circle--time1.png")}
            />
            <Image
              style={styles.iconIrcleWorkplace}
              contentFit="cover"
              source={require("../assets/icon--ircle--workplace1.png")}
            />
            <Image
              style={[styles.iconIrcleWorkplace1, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/icon--ircle--workplace2.png")}
            />
          </View>
          <View style={[styles.workPlace, styles.workLayout]}>
            <Text style={[styles.shipToVinodContainer, styles.skipLayout]}>
              <Text style={styles.shipTo}>{`Ship to: `}</Text>
              <Text style={styles.vinodSingh}>Vinod Singh</Text>
            </Text>
            <Text style={[styles.nUnionAve, styles.wed9SepTypo]}>
              141 N Union Ave, Los Angeles, CA
            </Text>
          </View>
          <Image
            style={[styles.iconIrcleWorkplace2, styles.iconLayout4]}
            contentFit="cover"
            source={require("../assets/icon--ircle--workplace2.png")}
          />
          <View style={[styles.workPlace1, styles.workLayout]}>
            <Text style={[styles.shipToVinodContainer, styles.skipLayout]}>
              <Text style={styles.shipTo}>{`Delivered to: `}</Text>
              <Text style={styles.vinodSingh}>Ashok Vatika</Text>
            </Text>
            <Text style={[styles.nUnionAve, styles.wed9SepTypo]}>
              141 N Union Ave, Los Angeles, CA
            </Text>
          </View>
          <View style={[styles.workPlace2, styles.workLayout]}>
            <Text style={[styles.shipToVinodContainer, styles.skipLayout]}>
              <Text style={styles.shipTo}>{`Bill to: `}</Text>
              <Text style={styles.vinodSingh}>Akash Material</Text>
            </Text>
            <Text style={[styles.nUnionAve, styles.wed9SepTypo]}>
              141 N Union Ave, Los Angeles, CA
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={[styles.buttonsOutlineNormal, styles.buttonsPosition]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("MakeOrder")}
        >
          <View style={[styles.rectangle6, styles.rectanglePosition]} />
          <Text style={[styles.cencel, styles.editPosition]}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonsSolidNormal, styles.buttonsPosition]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("MakeOrder")}
        >
          <View style={[styles.rectangle7, styles.rectanglePosition]} />
          <Text style={[styles.edit, styles.editPosition]}>Edit</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <TouchableOpacity
        style={[styles.button2TypeIcon, styles.button2TypeIconLayout]}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Make")}
      >
        <Image
          style={[styles.rectangleIcon1, styles.rectanglePosition]}
          contentFit="cover"
          source={require("../assets/rectangle2.png")}
        />
        <View style={[styles.text1, styles.ellipseIconLayout]}>
          <Image
            style={[styles.editPenFile, styles.editPenFilePosition]}
            contentFit="cover"
            source={require("../assets/edit-pen-file.png")}
          />
          <Image
            style={[styles.plusAddIcon1, styles.editPenFilePosition]}
            contentFit="cover"
            source={require("../assets/plus-add3.png")}
          />
          <Text style={[styles.addAnotherPet, styles.editPosition]}>
            Add another Order
          </Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuLayout: {
    height: 83,
    position: "absolute",
  },
  menuPosition: {
    bottom: -1,
    left: "0%",
    right: "0%",
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
  rectangle3Layout: {
    height: 41,
    position: "absolute",
  },
  homeTypo: {
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    letterSpacing: 0.4,
    fontSize: FontSize.size_3xs,
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
  iconLayout5: {
    height: 34,
    position: "absolute",
  },
  exploreNormalPosition: {
    height: 40,
    bottom: 35,
    position: "absolute",
  },
  iconLayout3: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ellipseIconLayout: {
    height: 24,
    position: "absolute",
  },
  rectangle2Layout: {
    height: 176,
    top: 0,
    width: "100%",
    left: 0,
  },
  linePosition: {
    top: 0,
    left: 0,
  },
  rectangle2ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 6,
    },
    backgroundColor: Color.white,
    position: "absolute",
  },
  button2TypeIconLayout: {
    width: 335,
    position: "absolute",
  },
  navBar88PtLayout: {
    height: 88,
    position: "absolute",
  },
  iconLayout4: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition1: {
    top: 53,
    display: "none",
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  skipLayout: {
    height: 16,
    position: "absolute",
  },
  iconLayout1: {
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
  rectanglePosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  kmTypo: {
    lineHeight: 16,
    fontSize: FontSize.caption_size,
    letterSpacing: 0,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    position: "absolute",
  },
  timeLayout: {
    height: 173,
    position: "absolute",
  },
  wed9SepTypo: {
    height: 17,
    lineHeight: 18,
    fontSize: FontSize.body3_size,
    textAlign: "left",
    fontFamily: FontFamily.body1,
    letterSpacing: 0.2,
    color: Color.gray_100,
    position: "absolute",
  },
  iconPosition: {
    right: "79.94%",
    width: "20.06%",
    maxWidth: "100%",
    height: 34,
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  workLayout: {
    height: 35,
    width: "79.07%",
    position: "absolute",
  },
  buttonsPosition: {
    bottom: -68,
    width: "41.79%",
    height: 26,
    position: "absolute",
  },
  editPosition: {
    fontFamily: FontFamily.button,
    fontWeight: "700",
    marginTop: -10,
    fontSize: FontSize.body1_size,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  editPenFilePosition: {
    width: 31,
    height: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    bottom: 0,
    height: 83,
    position: "absolute",
  },
  iconAdoption: {
    width: 34,
    left: 18,
    bottom: 17,
  },
  searchnormal: {
    width: 70,
    left: 20,
    bottom: 35,
    height: 41,
  },
  profile: {
    marginLeft: -17,
    width: 34,
    textAlign: "center",
    color: Color.silver,
    left: "50%",
    top: "50%",
    marginTop: 7.5,
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
  orderHistory1: {
    width: "114.29%",
    top: "67.5%",
    left: "-7.14%",
    color: Color.violet,
    textAlign: "center",
  },
  iconClock: {
    height: "65%",
    width: "42.86%",
    top: "-5%",
    right: "28.57%",
    bottom: "40%",
    left: "28.57%",
    position: "absolute",
  },
  appointmentsactive: {
    left: 108,
    width: 70,
  },
  notification: {
    marginTop: 7,
    marginLeft: -29,
    textAlign: "center",
    color: Color.silver,
    left: "50%",
    top: "50%",
  },
  exploreNormalChild: {
    marginTop: -21,
  },
  uiIconAnnouncement: {
    left: 23,
    width: 24,
    height: 24,
    bottom: 17,
    overflow: "hidden",
  },
  exploreNormal: {
    right: "28.8%",
    left: "52.53%",
    width: "18.67%",
    height: 40,
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
  topNavigationChild: {
    backgroundColor: "#e9ecf5",
    height: 136,
    display: "none",
    width: 375,
    position: "absolute",
  },
  rectangle2: {
    borderBottomRightRadius: Border.br_15xl,
    borderBottomLeftRadius: Border.br_15xl,
    shadowColor: "rgba(45, 54, 138, 0.08)",
    shadowRadius: 28,
    elevation: 28,
    height: 176,
    top: 0,
    width: "100%",
    left: 0,
  },
  segmentedControls2Segments: {
    top: 104,
    height: 38,
    left: 21,
    width: 335,
  },
  rectangle4: {
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
  navBar88Pt: {
    top: 0,
    left: 0,
    width: 375,
  },
  rectangle5: {
    backgroundColor: Color.whitesmoke_200,
    display: "none",
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    lineHeight: 18,
    fontFamily: FontFamily.sFProText,
    color: Color.black,
    letterSpacing: 0,
    width: 54,
    fontWeight: "600",
    textAlign: "center",
    top: "50%",
    left: 0,
    position: "absolute",
  },
  action: {
    marginTop: -8,
    height: 18,
    width: 54,
    top: "50%",
    left: 20,
    position: "absolute",
  },
  topNavigation: {
    position: "absolute",
  },
  orderHistoryChild: {
    top: 223,
    left: 56,
    width: 48,
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  orderHistoryItem: {
    top: 201,
    left: 57,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  componentCardFinChild: {
    bottom: -98,
    borderRadius: Border.br_sm,
    shadowColor: "rgba(46, 30, 122, 0.04)",
    shadowRadius: 12,
    elevation: 12,
    height: 413,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  ellipseIcon: {
    width: "35.29%",
    right: "64.71%",
    maxWidth: "100%",
    overflow: "hidden",
    bottom: 0,
    left: "0%",
  },
  mapPinIcon1: {
    right: 61,
    bottom: 4,
  },
  km: {
    right: 2,
    bottom: 5,
    width: 49,
    color: Color.gray_100,
    height: 14,
    textAlign: "right",
  },
  location: {
    top: 102,
    width: 84,
    left: 43,
  },
  unit: {
    textAlign: "center",
    color: Color.silver,
    bottom: 0,
    left: "0%",
    width: "100%",
  },
  rating: {
    width: "32.34%",
    right: "29.85%",
    bottom: 30,
    left: "37.81%",
  },
  orderId534352726374762: {
    bottom: 48,
    lineHeight: 24,
    textAlign: "left",
    fontFamily: FontFamily.body1,
    letterSpacing: 0.2,
    fontSize: FontSize.body1_size,
    color: Color.silver,
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  ellipseIcon1: {
    width: 24,
    height: 24,
    top: 0,
    left: 0,
  },
  walletIcon: {
    top: 4,
    left: 4,
  },
  text: {
    top: 5,
    left: 32,
    width: 36,
    color: Color.gray_100,
    height: 14,
    textAlign: "right",
  },
  price: {
    width: "26.87%",
    right: "34.33%",
    left: "38.81%",
    height: 22,
    bottom: 0,
    position: "absolute",
  },
  general: {
    width: "70.69%",
    right: "17.96%",
    bottom: 202,
    left: "11.34%",
    height: 72,
    position: "absolute",
  },
  rectangleIcon: {
    width: "88.96%",
    right: "5.67%",
    bottom: -7,
    left: "5.37%",
    borderRadius: Border.br_base,
    height: 195,
    position: "absolute",
  },
  readyToShip: {
    top: 81,
    color: Color.olivedrab,
    width: 82,
    height: 13,
    textAlign: "left",
    left: 43,
  },
  wed9Sep: {
    width: "70.77%",
    left: "29.23%",
    bottom: 3,
  },
  iconCircleTime: {
    bottom: 0,
  },
  iconIrcleWorkplace: {
    right: "79.3%",
    bottom: 86,
    left: "0.64%",
    width: "20.06%",
    maxWidth: "100%",
    height: 34,
    position: "absolute",
    overflow: "hidden",
  },
  iconIrcleWorkplace1: {
    bottom: 139,
  },
  time1: {
    width: "70.25%",
    right: "29.75%",
    bottom: 0,
    left: "0%",
  },
  shipTo: {
    color: Color.gray_100,
  },
  vinodSingh: {
    color: Color.silver,
  },
  shipToVinodContainer: {
    bottom: 19,
    fontSize: FontSize.h5Headline_size,
    textAlign: "left",
    fontFamily: FontFamily.h6Headline,
    fontWeight: "600",
    height: 16,
    left: "0%",
    width: "100%",
  },
  nUnionAve: {
    bottom: 0,
    left: "0%",
    width: "100%",
  },
  workPlace: {
    right: "0.12%",
    bottom: 85,
    left: "20.81%",
  },
  iconIrcleWorkplace2: {
    width: "14.09%",
    right: "85.91%",
    bottom: 44,
    height: 34,
    position: "absolute",
    left: "0%",
  },
  workPlace1: {
    right: "0.57%",
    bottom: 43,
    left: "20.36%",
  },
  workPlace2: {
    bottom: 138,
    left: "20.93%",
    right: "0%",
  },
  workAndTime: {
    width: "77.03%",
    right: "14.61%",
    left: "8.36%",
    bottom: 3,
  },
  rectangle6: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.ghostwhite_200,
  },
  cencel: {
    marginLeft: -140,
    width: 280,
    height: 21,
    color: Color.gray_100,
    textAlign: "center",
  },
  buttonsOutlineNormal: {
    right: "4.78%",
    left: "53.43%",
  },
  rectangle7: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.violet,
  },
  edit: {
    marginLeft: -15,
    color: Color.white,
    textAlign: "center",
  },
  buttonsSolidNormal: {
    right: "51.04%",
    left: "7.16%",
  },
  componentCardFin: {
    top: 185,
    height: 326,
    left: 41,
    width: 335,
  },
  rectangleIcon1: {
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
  plusAddIcon1: {
    marginLeft: -103,
    marginTop: -12,
  },
  addAnotherPet: {
    marginLeft: -61.75,
    width: 165,
    textAlign: "left",
    color: Color.violet,
  },
  text1: {
    marginLeft: -103.5,
    width: 206,
    marginTop: -28,
    left: "50%",
    top: "50%",
  },
  button2TypeIcon: {
    top: 644,
    left: 41,
    height: 46,
  },
  orderHistory: {
    backgroundColor: Color.ghostwhite_100,
    flex: 1,
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
});

export default OrderHistory;
