import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PopUp = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.popUp}>
      <View style={[styles.overlay, styles.overlayPosition]} />
      <View style={[styles.uiLine, styles.uiLinePosition]}>
        <View style={styles.uiLineChild} />
        <View style={styles.rectangle} />
      </View>
      <View style={[styles.popUp1, styles.popUp1Layout]}>
        <Image
          style={[styles.backgroundIcon, styles.popUp1Layout]}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <View style={[styles.buttonsSolidNormal, styles.buttonsLayout3]}>
          <View style={[styles.rectangle1, styles.rectanglePosition]} />
          <Text style={[styles.add, styles.addFlexBox]}>+ Add</Text>
        </View>
        <View style={[styles.buttonsOutlineNormal, styles.buttonsLayout3]}>
          <View style={[styles.rectangle2, styles.rectanglePosition]} />
          <Text style={[styles.noLater, styles.cencelLayout]}>No, later</Text>
        </View>
        <View style={[styles.navBar44Pt, styles.popUp1Layout]}>
          <View style={styles.rectangle3} />
          <View style={styles.line} />
          <Image
            style={[styles.arrowLeftIcon, styles.iconLayout4]}
            contentFit="cover"
            source={require("../assets/arrow-left1.png")}
          />
          <Pressable
            style={[styles.closeIcon, styles.iconLayout2]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/close-icon2.png")}
            />
          </Pressable>
          <Text style={styles.skip}>Skip</Text>
          <Image
            style={[styles.findIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/find-icon1.png")}
          />
          <Image
            style={[styles.editIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/edit-icon1.png")}
          />
          <Image
            style={[styles.shareIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/share1.png")}
          />
          <Image
            style={[styles.mapPinIcon, styles.iconLayout2]}
            contentFit="cover"
            source={require("../assets/map-pin2.png")}
          />
          <Image
            style={[styles.heartFavouriteLike, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/heart-favourite-like2.png")}
          />
          <Image
            style={[styles.heartFavouriteLike, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/plus-add2.png")}
          />
        </View>
        <View style={styles.componentCardFin}>
          <View style={styles.componentCardFinChild} />
          <View style={[styles.location, styles.iconLayout2]}>
            <Image
              style={[styles.ellipseIcon, styles.iconLayout2]}
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
            <View style={styles.rating}>
              <Text style={[styles.unit, styles.unitTypo]}>125 Unit</Text>
            </View>
            <Text style={[styles.orderId534352726374762, styles.shipFlexBox]}>
              Order id: 534352726374762
            </Text>
            <View style={styles.price}>
              <Image
                style={[styles.ellipseIcon1, styles.iconLayout2]}
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
          <Text style={[styles.readyToShip, styles.shipFlexBox]}>
            Delivered
          </Text>
          <View style={[styles.workAndTime, styles.timeLayout]}>
            <View style={[styles.time, styles.timeLayout]}>
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
                source={require("../assets/icon--ircle--workplace3.png")}
              />
              <Image
                style={[styles.iconIrcleWorkplace1, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/icon--ircle--workplace2.png")}
              />
            </View>
            <View style={[styles.workPlace, styles.workLayout]}>
              <Text style={[styles.shipToVinodContainer, styles.shipFlexBox]}>
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
              <Text style={[styles.shipToVinodContainer, styles.shipFlexBox]}>
                <Text style={styles.shipTo}>{`Delivered to: `}</Text>
                <Text style={styles.vinodSingh}>Ashok Vatika</Text>
              </Text>
              <Text style={[styles.nUnionAve, styles.wed9SepTypo]}>
                141 N Union Ave, Los Angeles, CA
              </Text>
            </View>
            <View style={[styles.workPlace2, styles.workLayout]}>
              <Text style={[styles.shipToVinodContainer, styles.shipFlexBox]}>
                <Text style={styles.shipTo}>{`Bill to: `}</Text>
                <Text style={styles.vinodSingh}>Akash Material</Text>
              </Text>
              <Text style={[styles.nUnionAve, styles.wed9SepTypo]}>
                141 N Union Ave, Los Angeles, CA
              </Text>
            </View>
          </View>
          <Pressable
            style={[styles.buttonsOutlineNormal1, styles.buttonsLayout]}
          >
            <View style={[styles.rectangle2, styles.rectanglePosition]} />
            <Text style={[styles.cencel, styles.editPosition]}>Ignore</Text>
          </Pressable>
          <View style={[styles.buttonsSolidNormal1, styles.buttonsLayout]}>
            <View style={[styles.rectangle1, styles.rectanglePosition]} />
            <Text style={[styles.edit, styles.editPosition]}>Edit</Text>
          </View>
        </View>
        <Pressable style={[styles.buttonsOutlineNormal2, styles.buttonsLayout]}>
          <View style={[styles.rectangle2, styles.rectanglePosition]} />
          <Text style={[styles.cencel, styles.editPosition]}>
            Remined me letter
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlayPosition: {
    top: 0,
    left: 0,
  },
  uiLinePosition: {
    height: 34,
    left: "0%",
    position: "absolute",
  },
  popUp1Layout: {
    width: 375,
    position: "absolute",
  },
  buttonsLayout3: {
    height: 66,
    width: 150,
    top: 392,
    position: "absolute",
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
  addFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  cencelLayout: {
    height: 21,
    width: 280,
    marginLeft: -140,
    color: Color.gray_100,
  },
  iconLayout4: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconLayout2: {
    height: 24,
    position: "absolute",
  },
  iconLayout1: {
    width: "6.4%",
    height: 24,
    maxWidth: "100%",
    bottom: 11,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    width: 16,
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  kmTypo: {
    height: 14,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.caption_size,
    textAlign: "right",
    color: Color.gray_100,
    position: "absolute",
  },
  unitTypo: {
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.caption_size,
  },
  shipFlexBox: {
    textAlign: "left",
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
  buttonsLayout: {
    height: 26,
    position: "absolute",
  },
  editPosition: {
    marginTop: -10,
    textAlign: "center",
    fontFamily: FontFamily.button,
    fontWeight: "700",
    fontSize: FontSize.body1_size,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  overlay: {
    right: 0,
    backgroundColor: "#191919",
    opacity: 0.5,
    display: "none",
    left: 0,
    bottom: 0,
    position: "absolute",
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
  rectangle: {
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
    right: "0%",
    bottom: 0,
    width: "100%",
  },
  backgroundIcon: {
    top: -38,
    height: 604,
    left: 4,
  },
  rectangle1: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.violet,
  },
  add: {
    marginLeft: -22,
    color: Color.white,
    fontFamily: FontFamily.button,
    fontWeight: "700",
    fontSize: FontSize.body1_size,
    left: "50%",
    top: "50%",
    marginTop: -10.15,
    textAlign: "center",
  },
  buttonsSolidNormal: {
    left: 30,
  },
  rectangle2: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.ghostwhite_200,
  },
  noLater: {
    textAlign: "center",
    position: "absolute",
    fontFamily: FontFamily.button,
    fontWeight: "700",
    fontSize: FontSize.body1_size,
    left: "50%",
    top: "50%",
    marginTop: -10.15,
  },
  buttonsOutlineNormal: {
    left: 193,
  },
  rectangle3: {
    bottom: 1,
    backgroundColor: Color.gray_200,
    height: 44,
    left: "0%",
    right: "0%",
    display: "none",
    position: "absolute",
    width: "100%",
  },
  line: {
    width: "100.27%",
    right: "-0.13%",
    left: "-0.13%",
    borderStyle: "solid",
    borderColor: "#f0f0f8",
    borderTopWidth: 1,
    height: 1,
    display: "none",
    bottom: 0,
    position: "absolute",
  },
  arrowLeftIcon: {
    width: "8.53%",
    right: "87.73%",
    bottom: 7,
    left: "3.73%",
    height: 32,
    display: "none",
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  closeIcon: {
    left: 18,
    width: 24,
    height: 24,
    top: 9,
  },
  skip: {
    right: 20,
    bottom: 15,
    fontSize: FontSize.h6Headline_size,
    letterSpacing: 0.1,
    color: Color.violet,
    alignItems: "center",
    width: 58,
    height: 16,
    textAlign: "right",
    fontFamily: FontFamily.h6Headline,
    fontWeight: "600",
    display: "none",
    position: "absolute",
  },
  findIcon: {
    left: 331,
    width: 24,
    height: 24,
    top: 9,
    display: "none",
    overflow: "hidden",
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
    width: 24,
    height: 24,
    top: 9,
    display: "none",
    overflow: "hidden",
  },
  heartFavouriteLike: {
    right: "5.33%",
    left: "88.27%",
  },
  navBar44Pt: {
    top: 35,
    height: 63,
    left: 0,
  },
  componentCardFinChild: {
    bottom: -98,
    borderRadius: Border.br_sm,
    backgroundColor: Color.white,
    shadowColor: "rgba(46, 30, 122, 0.04)",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    height: 413,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  ellipseIcon: {
    width: "35.29%",
    right: "64.71%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    bottom: 0,
  },
  mapPinIcon1: {
    right: 61,
    bottom: 4,
  },
  km: {
    right: 2,
    bottom: 5,
    width: 49,
  },
  location: {
    top: 102,
    width: 84,
    left: 43,
  },
  unit: {
    color: Color.silver,
    textAlign: "center",
    position: "absolute",
    left: "0%",
    bottom: 0,
    width: "100%",
  },
  rating: {
    width: "32.34%",
    right: "29.85%",
    bottom: 30,
    left: "37.81%",
    height: 16,
    position: "absolute",
  },
  orderId534352726374762: {
    bottom: 48,
    lineHeight: 24,
    fontFamily: FontFamily.body1,
    letterSpacing: 0.2,
    textAlign: "left",
    color: Color.silver,
    fontSize: FontSize.body1_size,
    left: "0%",
    width: "100%",
  },
  ellipseIcon1: {
    width: 24,
    height: 24,
    left: 0,
    top: 0,
  },
  walletIcon: {
    top: 4,
    left: 4,
  },
  text: {
    top: 5,
    left: 32,
    width: 36,
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
    color: "#39b100",
    width: 82,
    height: 13,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.caption_size,
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
  time: {
    width: "70.25%",
    right: "29.75%",
    left: "0%",
    bottom: 0,
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
    height: 16,
    fontFamily: FontFamily.h6Headline,
    fontWeight: "600",
    textAlign: "left",
    left: "0%",
    width: "100%",
  },
  nUnionAve: {
    left: "0%",
    bottom: 0,
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
    left: "0%",
    position: "absolute",
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
  cencel: {
    height: 21,
    width: 280,
    marginLeft: -140,
    color: Color.gray_100,
  },
  buttonsOutlineNormal1: {
    right: "4.78%",
    left: "53.43%",
    bottom: -68,
    width: "41.79%",
    height: 26,
  },
  edit: {
    marginLeft: -15,
    color: Color.white,
  },
  buttonsSolidNormal1: {
    right: "51.04%",
    left: "7.16%",
    bottom: -68,
    width: "41.79%",
    height: 26,
    display: "none",
  },
  componentCardFin: {
    top: 108,
    left: 20,
    width: 335,
    height: 326,
    position: "absolute",
  },
  buttonsOutlineNormal2: {
    width: "41.07%",
    right: "48.8%",
    bottom: 40,
    left: "10.13%",
  },
  popUp1: {
    top: 246,
    left: -4,
    height: 542,
  },
  popUp: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default PopUp;
