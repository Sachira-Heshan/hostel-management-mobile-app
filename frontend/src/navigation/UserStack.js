import { useContext } from "react";
import {
   View,
   Text,
   StyleSheet,
   ImageBackground,
   Image,
   SafeAreaView,
} from "react-native";

import {
   createDrawerNavigator,
   DrawerItemList,
   DrawerContentScrollView,
} from "@react-navigation/drawer";

import {
   UserDashboard,
   UserAnnouncements,
   UserComplains,
   UserLatePasses,
   UserRooms,
   UserHostelAdmininstration,
   UserSettings,
} from "./user/UserDrawer";

import { IconButton, Icon, Button } from "react-native-paper";
import {
   lightGray,
   primaryBlue,
   textDarkGray,
   white,
} from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../context/AuthContext";

const Drawer = createDrawerNavigator();

const UserDrawer = () => {
   const data = require("../data/dummyData.json");
   const { logout, userInfo } = useContext(AuthContext);

   const navigation = useNavigation();

   const handlePressNotifications = () => {
      navigation.navigate("UserNotifications");
   };

   return (
      <Drawer.Navigator
         initialRouteName="Home"
         drawerContent={(props) => {
            return (
               <View style={{ flex: 1 }}>
                  <DrawerContentScrollView {...props}>
                     <View style={styles.drawerTop}>
                        <ImageBackground
                           source={require("../../assets/images/profile_cover.png")}
                           resizeMode="cover"
                           style={styles.image}
                        >
                           <View style={styles.profileDetailsContainer}>
                              <Image
                                 style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 50,
                                 }}
                                 source={require("../../assets/images/profile_pic.png")}
                              />
                              <View style={{ marginLeft: 15 }}>
                                 <Text
                                    style={{
                                       fontFamily: "fontBold",
                                       fontSize: 14,
                                    }}
                                 >
                                    {userInfo.full_name}
                                 </Text>
                                 <Text
                                    style={{
                                       fontFamily: "fontRegular",
                                       fontSize: 14,
                                       marginTop: -4,
                                    }}
                                 >
                                    {userInfo.email}
                                 </Text>
                              </View>
                           </View>
                        </ImageBackground>
                     </View>
                     <DrawerItemList {...props} />
                  </DrawerContentScrollView>
                  <View style={styles.drawerBottom}>
                     <Button
                        icon={"logout"}
                        mode="text"
                        buttonColor={lightGray}
                        textColor={textDarkGray}
                        labelStyle={{ fontFamily: "fontMedium", fontSize: 16 }}
                        style={{ borderRadius: 6 }}
                        onPress={() => logout()}
                     >
                        Sign out
                     </Button>
                  </View>
               </View>
            );
         }}
         screenOptions={{
            headerTitleAlign: "center",
            headerTintColor: white,
            headerStyle: {
               backgroundColor: primaryBlue,
               borderRadius: 8,
            },
            headerTitleStyle: {
               fontFamily: "fontBold",
            },
            headerRight: () => {
               return (
                  <IconButton
                     icon={"bell-ring-outline"}
                     iconColor={white}
                     onPress={handlePressNotifications}
                  />
               );
            },
            drawerLabelStyle: {
               marginLeft: -20,
               fontFamily: "fontMedium",
            },
            drawerActiveTintColor: primaryBlue,
            drawerInactiveTintColor: textDarkGray,
         }}
      >
         <Drawer.Screen
            name="Home"
            component={UserDashboard}
            options={{
               headerTitle: "User Dashboard",
               drawerIcon: ({ color, size }) => {
                  return <Icon source={"home"} size={size} color={color} />;
               },
            }}
         />
         <Drawer.Screen
            name="Rooms"
            component={UserRooms}
            options={{
               drawerIcon: ({ color, size }) => {
                  return (
                     <Icon
                        source={"office-building-cog"}
                        size={size}
                        color={color}
                     />
                  );
               },
            }}
         />
         <Drawer.Screen
            name="Announcements"
            component={UserAnnouncements}
            options={{
               drawerIcon: ({ color, size }) => {
                  return <Icon source={"bullhorn"} size={size} color={color} />;
               },
            }}
         />
         <Drawer.Screen
            name="Complains"
            component={UserComplains}
            options={{
               drawerIcon: ({ color, size }) => {
                  return (
                     <Icon source={"comment-plus"} size={size} color={color} />
                  );
               },
            }}
         />
         <Drawer.Screen
            name="Late Passes"
            component={UserLatePasses}
            options={{
               drawerIcon: ({ color, size }) => {
                  return (
                     <Icon source={"clock-check"} size={size} color={color} />
                  );
               },
            }}
         />
         <Drawer.Screen
            name="Hostel Administration"
            component={UserHostelAdmininstration}
            options={{
               drawerIcon: ({ color, size }) => {
                  return (
                     <Icon
                        source={"shield-account-variant"}
                        size={size}
                        color={color}
                     />
                  );
               },
            }}
         />
         <Drawer.Screen
            name="Settings"
            component={UserSettings}
            options={{
               drawerIcon: ({ color, size }) => {
                  return <Icon source={"cog"} size={size} color={color} />;
               },
            }}
         />
      </Drawer.Navigator>
   );
};

const styles = StyleSheet.create({
   drawerTop: {
      height: 150,
      width: "100%",
      backgroundColor: lightGray,
      marginBottom: 10,
   },
   drawerBottom: {
      padding: 20,
      borderTopColor: lightGray,
      borderTopWidth: 1,
   },
   image: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
   },
   profileDetailsContainer: {
      margin: 10,
      flexDirection: "row",
      alignItems: "center",
   },
});

export default UserDrawer;
