import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
   black,
   lightGray,
   primaryBlue,
   textDarkGray,
   textLightGray,
   white,
} from "../../../constants/Colors";
import { Button, Icon, Switch } from "react-native-paper";

const Settings = ({ navigation }) => {
   const [complainsNotifications, setComplainsNotifications] = useState(false);
   const [roomManagementNotifications, setRoomManagementNotifications] =
      useState(false);

   const toggleComplainsNotifications = () => {
      setComplainsNotifications(!complainsNotifications);
   };

   const toggleRoomManagementNotifications = () => {
      setRoomManagementNotifications(!roomManagementNotifications);
   };

   return (
      <ScrollView
         style={{ flex: 1 }}
         contentContainerStyle={{
            backgroundColor: white,
            minHeight: "100%",
         }}
         showsVerticalScrollIndicator={false}
      >
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <Text style={styles.title}>Account</Text>
               <View style={styles.line}></View>
               <View style={styles.sectionContainer}>
                  <Button
                     mode="text"
                     icon={"account-circle"}
                     onPress={() =>
                        navigation.navigate("AdminChangeProfileDetails")
                     }
                     textColor={textDarkGray}
                     style={styles.accountButton}
                     labelStyle={{ fontSize: 17, fontFamily: "fontRegular" }}
                     contentStyle={{ justifyContent: "flex-start" }}
                  >
                     Change Profile Details
                  </Button>
                  <Button
                     mode="text"
                     icon={"lock"}
                     onPress={() => navigation.navigate("AdminChangePassword")}
                     textColor={textDarkGray}
                     style={styles.accountButton}
                     labelStyle={{ fontSize: 17, fontFamily: "fontRegular" }}
                     contentStyle={{ justifyContent: "flex-start" }}
                  >
                     Change Password
                  </Button>
               </View>
               <Text style={styles.title}>Notifications</Text>
               <View style={styles.line}></View>
               <View style={styles.sectionContainer}>
                  <View style={styles.notificationContainer}>
                     <View style={styles.textIconContainer}>
                        <Icon
                           source={"comment-plus"}
                           color={textDarkGray}
                           size={16}
                        />
                        <Text
                           style={{
                              fontFamily: "fontRegular",
                              fontSize: 16,
                              marginLeft: 10,
                           }}
                        >
                           Complains Notifications
                        </Text>
                     </View>
                     <Switch
                        value={complainsNotifications}
                        onValueChange={toggleComplainsNotifications}
                        color={primaryBlue}
                        style={{ marginRight: -10 }}
                     />
                  </View>
                  <View style={styles.notificationContainer}>
                     <View style={styles.textIconContainer}>
                        <Icon
                           source={"office-building-cog"}
                           color={textDarkGray}
                           size={16}
                        />
                        <Text
                           style={{
                              fontFamily: "fontRegular",
                              fontSize: 16,
                              marginLeft: 10,
                           }}
                        >
                           Room Management Notifications
                        </Text>
                     </View>
                     <Switch
                        value={roomManagementNotifications}
                        onValueChange={toggleRoomManagementNotifications}
                        color={primaryBlue}
                        style={{ marginRight: -10 }}
                     />
                  </View>
               </View>
            </View>
         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: white,
   },
   contentContainer: {
      flex: 1,
      width: "90%",
      alignItems: "center",
   },
   title: {
      width: "90%",
      fontFamily: "fontBold",
      fontSize: 18,
      marginVertical: 10,
   },
   line: {
      backgroundColor: textLightGray,
      height: 1,
      width: "100%",
   },
   sectionContainer: {
      width: "85%",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
   },
   accountButton: {
      marginTop: 10,
   },
   notificationContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 5,
      paddingLeft: 12,
   },
   textIconContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
   },
});

export default Settings;
