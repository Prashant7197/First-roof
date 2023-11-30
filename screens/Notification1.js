import * as React from "react";
import { View, StyleSheet, Text, TextInput, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Notification1 = () => {
  return (
    <View style={styles.notification}>
    <View style={{flex: 1, backgroundColor: "ffffff"}}>
    <ScrollView contentContainerStyle={{
                paddingBottom: 900
            }} showsHorizontalScrollIndicator={false}>
      <SafeAreaView
        style={[styles.componentCardWithPhoto, styles.componentCardLayout]}
      >
        <View style={[styles.background, styles.backgroundPosition]} />
        <View style={styles.stars}>
          <Text style={styles.july20231230}>24 July 2023 12:30</Text>
        </View>
        <Text style={[styles.orderPlaced, styles.orderTypo]}>Order Placed</Text>
        <Text
          style={[styles.yourOrderPlaced, styles.mapTypo]}
        >{`Your Order placed successfully it will processed soon. `}</Text>
      </SafeAreaView>
      <View
        style={[styles.componentCardWithPhoto1, styles.componentCardLayout]}
      >
        <View style={[styles.background, styles.backgroundPosition]} />
        <View style={styles.stars}>
          <Text style={styles.july20231230}>24 July 2023 12:30</Text>
        </View>
        <Text style={[styles.orderPlaced, styles.orderTypo]}>Order Placed</Text>
        <Text
          style={[styles.yourOrderPlaced, styles.mapTypo]}
        >{`Your Order placed successfully it will processed soon. `}</Text>
      </View>
      <View
        style={[styles.componentCardWithPhoto2, styles.componentCardLayout]}
      >
        <View style={[styles.background, styles.backgroundPosition]} />
        <View style={styles.stars}>
          <Text style={styles.july20231230}>24 July 2023 12:30</Text>
        </View>
        <Text style={[styles.orderPlaced, styles.orderTypo]}>Order Placed</Text>
        <Text
          style={[styles.yourOrderPlaced, styles.mapTypo]}
        >{`Your Order placed successfully it will processed soon. `}</Text>
      </View>
      <View
        style={[styles.componentCardWithPhoto3, styles.componentCardLayout]}
      >
        <View style={[styles.background, styles.backgroundPosition]} />
        <View style={styles.stars}>
          <Text style={styles.july20231230}>24 July 2023 12:30</Text>
        </View>
        <Text style={[styles.orderPlaced, styles.orderTypo]}>Order Placed</Text>
        <Text
          style={[styles.yourOrderPlaced, styles.mapTypo]}
        >{`Your Order placed successfully it will processed soon. `}</Text>
      </View>
      <SafeAreaView
        style={[styles.componentCardWithPhoto4, styles.componentCardLayout]}
      >
        <View style={[styles.background, styles.backgroundPosition]} />
        <View style={styles.stars}>
          <Text style={styles.july20231230}>24 July 2023 12:30</Text>
        </View>
        <Text style={[styles.orderPlaced, styles.orderTypo]}>Order Placed</Text>
        <Text
          style={[styles.yourOrderPlaced, styles.mapTypo]}
        >{`Your Order placed successfully it will processed soon. `}</Text>
      </SafeAreaView>
      <View
        style={[styles.componentCardWithPhoto5, styles.componentCardLayout]}
      >
        <View style={[styles.background, styles.backgroundPosition]} />
        <View style={styles.stars}>
          <Text style={styles.july20231230}>24 July 2023 12:30</Text>
        </View>
        <Text style={[styles.orderPlaced, styles.orderTypo]}>Order Placed</Text>
        <Text
          style={[styles.yourOrderPlaced, styles.mapTypo]}
        >{`Your Order placed successfully it will processed soon. `}</Text>
      </View>
      <Text style={[styles.orderPlaced6, styles.orderTypo]}>Order Placed</Text>
      <View style={[styles.topNavigation, styles.iconProfilePosition]}>
        <View style={[styles.background6, styles.rectangle4ShadowBox]} />
        <TextInput
          style={styles.finderInactive}
          placeholder=" Veterinary"
          placeholderTextColor="#070821"
        />
        <View
          style={[styles.segmentedControls2Segment, styles.arrowLeftIconLayout]}
        >
          <View style={[styles.clinics, styles.rectanglePosition]}>
            <View style={[styles.rectangle3, styles.rectanglePosition]} />
            <Text style={[styles.clinics1, styles.clinics1Typo]}>Massege</Text>
          </View>
          <Pressable style={[styles.specialists, styles.rectanglePosition]}>
            <View style={[styles.rectangle4, styles.rectanglePosition]} />
            <Text style={[styles.specialists1, styles.clinics1Typo]}>
              Notification
            </Text>
          </Pressable>
        </View>
      </View>
      </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentCardLayout: {
    width: 335,
    height: 91,
    position: "absolute",
  },
  backgroundPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  orderTypo: {
    height: 22,
    width: 280,
    fontFamily: FontFamily.button,
    letterSpacing: 0.4,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.silver,
    position: "absolute",
  },
  mapTypo: {
    color: Color.violet,
    fontFamily: FontFamily.h6Headline,
    fontWeight: "600",
  },
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
  uiLineLayout: {
    height: 34,
    position: "absolute",
  },
  childPosition: {
    height: 39,
    width: 60,
    left: "50%",
    top: "50%",
    marginLeft: -30,
    position: "absolute",
  },
  iconProfilePosition: {
    top: -1,
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
    fontSize: FontSize.size_3xs,
    left: "50%",
    top: "50%",
    letterSpacing: 0.4,
    color: Color.silver,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangle4ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 6,
    },
  },
  navBar88PtLayout: {
    height: 88,
    position: "absolute",
  },
  mapFlexBox: {
    alignItems: "center",
    display: "none",
    position: "absolute",
  },
  arrowLeftIconLayout: {
    height: 32,
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
  rectanglePosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  clinics1Typo: {
    top: "21.88%",
    height: "56.25%",
    textAlign: "center",
    fontFamily: FontFamily.h6Headline,
    fontWeight: "600",
    fontSize: FontSize.h5Headline_size,
    position: "absolute",
  },
  background6Position: {
    top: 1,
    left: 0,
    position: "absolute",
  },
  timePosition: {
    width: 54,
    top: "50%",
    position: "absolute",
  },
  background: {
    borderRadius: Border.br_base,
    backgroundColor: Color.white,
    top: 0,
    height: 91,
  },
  july20231230: {
    fontSize: FontSize.caption_size,
    lineHeight: 16,
    textAlign: "left",
    color: Color.silver,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    letterSpacing: 0,
    left: 0,
    height: 14,
    width: 115,
    top: 0,
    position: "absolute",
  },
  stars: {
    top: 67,
    left: 227,
    height: 14,
    width: 115,
    position: "absolute",
  },
  orderPlaced: {
    top: 13,
    left: 27,
  },
  yourOrderPlaced: {
    top: 35,
    left: 42,
    fontSize: FontSize.h5Headline_size,
    color: Color.violet,
    width: 280,
    textAlign: "left",
    position: "absolute",
  },
  componentCardWithPhoto: {
    top: 180,
    height: 91,
    left: 21,
    width: 335,
  },
  componentCardWithPhoto1: {
    top: 284,
    height: 91,
    left: 21,
    width: 335,
  },
  componentCardWithPhoto2: {
    top: 382,
    height: 91,
    left: 21,
    width: 335,
  },
  componentCardWithPhoto3: {
    top: 486,
    height: 91,
    left: 21,
    width: 335,
  },
  componentCardWithPhoto4: {
    top: 589,
    left: 20,
    height: 91,
  },
  componentCardWithPhoto5: {
    top: 693,
    left: 20,
    height: 91,
  },
  orderPlaced6: {
    top: 16,
    left: 41,
  },
  rectangle: {
    bottom: 0,
    height: 83,
    position: "absolute",
  },
  line: {
    width: 376,
    left: 0,
    top: 0,
  },
  search: {
    width: 60,
    marginLeft: -30,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    left: "50%",
    top: "50%",
    marginTop: 7.5,
    letterSpacing: 0.4,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    position: "absolute",
  },
  iconAdoption: {
    width: 34,
    left: 18,
    bottom: 17,
    height: 34,
  },
  searchactive: {
    height: 41,
    bottom: 35,
    width: 70,
    left: 20,
    position: "absolute",
  },
  profile: {
    marginLeft: -17,
    width: 34,
    textAlign: "center",
    fontSize: FontSize.size_3xs,
    left: "50%",
    marginTop: 7.5,
    top: "50%",
    letterSpacing: 0.4,
    color: Color.silver,
    fontFamily: FontFamily.caption,
    fontWeight: "500",
    position: "absolute",
  },
  profilenormalChild: {
    marginTop: -21.5,
  },
  iconProfile: {
    width: 30,
    height: 26,
    left: 20,
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
  notification1: {
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
    height: 83,
    position: "absolute",
  },
  uiLineChild: {
    height: "79.17%",
    top: "21.05%",
    bottom: "-0.22%",
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
    bottom: -1,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  bottomNavigation: {
    bottom: 2,
    width: 375,
    left: 0,
  },
  background6: {
    borderBottomRightRadius: Border.br_15xl,
    borderBottomLeftRadius: Border.br_15xl,
    shadowColor: "rgba(45, 54, 138, 0.08)",
    shadowRadius: 28,
    elevation: 28,
    height: 160,
    top: 1,
    left: 0,
    position: "absolute",
    width: 375,
    backgroundColor: Color.white,
  },
  finderInactive: {
    top: 99,
    height: 38,
    left: 20,
    fontFamily: FontFamily.h6Headline,
    fontWeight: "600",
    fontSize: FontSize.h5Headline_size,
    width: 335,
    position: "absolute",
  },
  rectangle3: {
    borderRadius: Border.br_7xl,
    borderColor: "#e4e3f3",
    borderWidth: 1,
    borderStyle: "solid",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  clinics1: {
    width: "24.42%",
    left: "62.87%",
    color: Color.gray_100,
  },
  clinics: {
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  rectangle4: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.violet,
    shadowColor: "rgba(42, 32, 73, 0.25)",
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 6,
    },
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  specialists1: {
    width: "76%",
    left: "12%",
    color: Color.white,
  },
  specialists: {
    width: "50%",
    right: "50%",
  },
  segmentedControls2Segment: {
    top: 49,
    left: 72,
    width: 264,
  },
  rectangle5: {
    backgroundColor: Color.whitesmoke_200,
    display: "none",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  time: {
    marginTop: -9,
    fontSize: FontSize.size_mini,
    lineHeight: 18,
    fontFamily: FontFamily.sFProText,
    color: Color.black,
    textAlign: "center",
    fontWeight: "600",
    width: 54,
    letterSpacing: 0,
    left: 0,
  },
  action: {
    marginTop: -8,
    height: 18,
    left: 20,
  },
  topNavigation: {
    height: 161,
    width: "100%",
    left: 0,
  },
  notification: {
    backgroundColor: Color.ghostwhite_100,
    flex: 1,
    height: 814,
    overflow: "hidden",
    width: "100%",
  },
});

export default Notification1;



// import React from 'react';
// import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';

// const SCREEN_WIDTH = Dimensions.get('window').width;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//   },
//   screen: {
//     width: SCREEN_WIDTH,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   screen1: {
//     backgroundColor: 'skyblue',
//   },
//   screen2: {
//     backgroundColor: 'lightcoral',
//   },
//   screen3: {
//     backgroundColor: 'lightgreen',
//   },
// });

// const Notification1 = () => {
//   return (
//     <ScrollView
//       horizontal
//       pagingEnabled
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={styles.container}
//     >
//       <View style={[styles.screen, styles.screen1]}>
//         <Text style={{ fontSize: 24, color: 'white' }}>Screen 1</Text>
//       </View>
//       <View style={[styles.screen, styles.screen2]}>
//         <Text style={{ fontSize: 24, color: 'white' }}>Screen 2</Text>
//       </View>
//       <View style={[styles.screen, styles.screen3]}>
//         <Text style={{ fontSize: 24, color: 'white' }}>Screen 3</Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default Notification1;

// import React from 'react';
// import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';

// const SCREEN_WIDTH = Dimensions.get('window').width;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//   },
//   screen: {
//     width: SCREEN_WIDTH,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   screen1: {
//     backgroundColor: 'skyblue',
//   },
//   screen2: {
//     backgroundColor: 'lightcoral',
//   },
//   screen3: {
//     backgroundColor: 'lightgreen',
//   },
//   // Add styles for additional screens as needed
// });

// const Page = ({ backgroundColor, children }) => (
//   <View style={[styles.screen, { backgroundColor }]}>{children}</View>
// );

// const Notification1 = () => {
//   const screens = [
//     { backgroundColor: 'skyblue', content: 'Screen 1' },
//     { backgroundColor: 'lightcoral', content: 'Screen 2' },
//     { backgroundColor: 'lightgreen', content: 'Screen 3' },
//     // Add additional screens as needed
//   ];

//   return (
//     <ScrollView
//       horizontal
//       pagingEnabled
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={styles.container}
//     >
//       {screens.map((screen, index) => (
//         <Page key={index} backgroundColor={screen.backgroundColor}>
//           <Text style={{ fontSize: 24, color: 'white' }}>{screen.content}</Text>
//         </Page>
//       ))}
//     </ScrollView>
//   );
// };

// export default Notification1;

