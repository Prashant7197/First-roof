import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet
} from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import Home from "../screens/Home";
import ProfileStart from "../screens/ProfileStart";
import OrderHistory from "../screens/OrderHistory";
import Notification1 from "../screens/Notification1";
import { COLORS, FONTS, icons } from "../constants"

const Tab = createBottomTabNavigator()

const TabBarCustomButton = ({children, onPress}) => {
    return (
        <TouchableOpacity
            style={{
                top: -30,
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow
            }}
            onPress={onPress}
        >
            <LinearGradient
                colors={[COLORS.primary, COLORS.secondary]}
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35
                }}
            >
                {children}
            </LinearGradient>
        </TouchableOpacity>
    )
}

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: COLORS.white,
                    borderTopColor: "transparent",
                    height: 100
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.home}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black, ...FONTS.body5 }}>Home</Text>
                        </View>
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="OrderHistory"
                component={OrderHistory}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.order}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black, ...FONTS.body5 }}>Order History</Text>
                        </View>
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Transaction"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={icons.transaction}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: COLORS.white
                            }}      
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Notification"
                component={Notification1}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.noti}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black, ...FONTS.body5 }}>Notification</Text>
                        </View>
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStart}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={icons.user}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? COLORS.primary : COLORS.black
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.primary : COLORS.black, ...FONTS.body5 }}>Profile</Text>
                        </View>
                    ),
                    headerShown: false
                }}     
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})

export default Tabs;