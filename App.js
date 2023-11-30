const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import EditYourProfile from "./screens/EditYourProfile";
import ProfileStart from "./screens/ProfileStart";
import PopUp from "./screens/PopUp";
import Notification1 from "./screens/Notification1";
import OrderHistoryDelivered from "./screens/OrderHistoryDelivered";
import OrderHistory from "./screens/OrderHistory";
import ProfileOrderHistory from "./screens/ProfileOrderHistory";
import SearchThankYou from "./screens/SearchThankYou";
import Make from "./screens/Make";
import MakeOrder from "./screens/MakeOrder";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Loader from "./screens/Loader";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import YourProfile from "./components/YourProfile";
import Profile from "./components/Profile";
import AddPetDetailContainer from "./components/AddPetDetail";
import Appointments from "./components/Appointments";
import Appointments1 from "./components/Appointments1";
import EmailNotification from "./components/EmailNotification";
import Tabs from "./navigation/tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {Welcome, Walkthrough, AuthMain} from "./screens"

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 5000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  return (
  <ApplicationProvider {...eva} theme={eva.light}>
  <NavigationContainer>
        {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="Welcome"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={Tabs}
              />
              <Stack.Screen 
                name="Walkthrough" 
                component={Walkthrough} 
              />
              <Stack.Screen 
                name="AuthMain" 
                component={AuthMain} 
                />
              <Stack.Screen
                name="Loader"
                component={Loader}
              />
              <Stack.Screen
                name="Login"
                component={Login}
              />
              <Stack.Screen
                name="Make"
                component={Make}
                options={(props) => ({
                  headerShown: true,
                  header: () => <EmailNotification />,
                })}
              />
              <Stack.Screen
                name="MakeOrder"
                component={MakeOrder}
              />
              <Stack.Screen
                name="EditYourProfile"
                component={EditYourProfile}
                options={(props) => ({
                  headerShown: true,
                  header: () => <YourProfile />,
                })}
              />
              <Stack.Screen
                name="ProfileStart"
                component={ProfileStart}
                options={(props) => ({
                  headerShown: true,
                  header: () => <Profile />,
                })}
              />
            </Stack.Navigator>
          ) : (
        <Loader />
        )}
    </NavigationContainer>
    </ApplicationProvider>
  );
};
export default App;
