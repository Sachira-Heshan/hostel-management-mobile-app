import { useState, useCallback, useContext } from "react";
import { View, Text, Image, RefreshControl, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { white, textLightGray } from "../../../constants/Colors";
import { Button, Avatar, TouchableRipple } from "react-native-paper";

import { AuthContext } from "../../../context/AuthContext";

const Dashboard = ({ navigation }) => {
   const [refreshing, setRefreshing] = useState(false);

   const { userInfo } = useContext(AuthContext);

   const data = require("../../../data/dummyData.json");
   const recentAnnouncement = data.announcements[2];

   var date = new Date();
   var hours = date.getHours();
   var greet = "Greetings!";

   //Greeting based on the time of the day
   if (hours < 12) {
      greet = "Good Morning!";
   } else if (hours < 15) {
      greet = "Good Afternoon!";
   } else {
      greet = "Good Evening!";
   }

   const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
         setRefreshing(false);
      }, 1500);
   });

   return (
      <ScrollView
         style={{ flex: 1 }}
         contentContainerStyle={{ backgroundColor: white, minHeight: "100%" }}
         showsVerticalScrollIndicator={false}
         refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
         }
      >
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <View style={styles.profileDetails}>
                  <Avatar.Image
                     size={75}
                     source={require("../../../../assets/images/profile_pic.png")}
                  />
                  <View style={styles.profileText}>
                     <Text
                        style={{
                           fontFamily: "fontRegular",
                           fontSize: 16,
                           color: textLightGray,
                        }}
                     >
                        {greet}
                     </Text>
                     <Text
                        style={{
                           fontFamily: "fontBold",
                           fontSize: 16,
                           marginTop: -5,
                        }}
                     >
                        {userInfo.full_name}
                     </Text>
                  </View>
               </View>
               <View style={styles.quickButtons}>
                  <View style={styles.recentAnnouncement}>
                     <Text style={{ fontFamily: "fontBold" }}>
                        {recentAnnouncement.title}
                     </Text>
                     <Text style={{ fontFamily: "fontRegular" }}>
                        {recentAnnouncement.description}
                     </Text>
                  </View>
               </View>
               <View style={styles.quickButtons}>
                  <TouchableRipple
                     onPress={() => navigation.navigate("UserRoomsDashboard")}
                     style={styles.dashboardCard}
                  >
                     <View
                        style={{
                           alignItems: "center",
                           paddingHorizontal: 15,
                           paddingVertical: 20,
                        }}
                     >
                        <Image
                           source={require("../../../../assets/images/room_management.png")}
                           style={[styles.cardImg, { marginVertical: 10 }]}
                        />
                        <Text style={styles.cardText}>Request Room</Text>
                     </View>
                  </TouchableRipple>

                  <TouchableRipple
                     onPress={() =>
                        navigation.navigate("UserRoomsAcceptanceDashboard")
                     }
                     style={styles.dashboardCard}
                  >
                     <View
                        style={{
                           alignItems: "center",
                           paddingHorizontal: 15,
                           paddingVertical: 20,
                        }}
                     >
                        <Image
                           source={require("../../../../assets/images/accepted_requests.png")}
                           style={styles.cardImg}
                        />
                        <Text style={styles.cardText}>Room Acceptance</Text>
                     </View>
                  </TouchableRipple>
               </View>
               <View style={styles.quickButtons}>
                  <TouchableRipple
                     onPress={() =>
                        navigation.navigate("UserPaymentReceiptsDashboard")
                     }
                     style={styles.dashboardCard}
                  >
                     <View
                        style={{
                           alignItems: "center",
                           paddingHorizontal: 15,
                           paddingVertical: 20,
                        }}
                     >
                        <Image
                           source={require("../../../../assets/images/payment_receipts.png")}
                           style={styles.cardImg}
                        />
                        <Text style={styles.cardText}>Payment Receipts</Text>
                     </View>
                  </TouchableRipple>

                  <TouchableRipple
                     onPress={() =>
                        navigation.navigate("UserComplainsDashboard")
                     }
                     style={styles.dashboardCard}
                  >
                     <View
                        style={{
                           alignItems: "center",
                           paddingHorizontal: 15,
                           paddingVertical: 20,
                        }}
                     >
                        <Image
                           source={require("../../../../assets/images/complains.png")}
                           style={[styles.cardImg, { marginVertical: 10 }]}
                        />
                        <Text style={styles.cardText}>Complains</Text>
                     </View>
                  </TouchableRipple>
               </View>
               <View style={styles.quickButtons}>
                  <TouchableRipple
                     onPress={() =>
                        navigation.navigate("UserHostelRulesDashboard")
                     }
                     style={styles.dashboardCard}
                  >
                     <View
                        style={{
                           alignItems: "center",
                           paddingHorizontal: 15,
                           paddingVertical: 20,
                        }}
                     >
                        <Image
                           source={require("../../../../assets/images/hostel_rules.png")}
                           style={styles.cardImg}
                        />
                        <Text style={styles.cardText}>Hostel Rules</Text>
                     </View>
                  </TouchableRipple>
                  <TouchableRipple
                     onPress={() =>
                        navigation.navigate("UserLatePassesDashboard")
                     }
                     style={styles.dashboardCard}
                  >
                     <View
                        style={{
                           alignItems: "center",
                           paddingHorizontal: 15,
                           paddingVertical: 20,
                        }}
                     >
                        <Image
                           source={require("../../../../assets/images/late_passes.png")}
                           style={[styles.cardImg, { marginVertical: 10 }]}
                        />
                        <Text style={styles.cardText}>Late Passes</Text>
                     </View>
                  </TouchableRipple>
               </View>
               <View style={[styles.quickButtons, { marginBottom: 15 }]}>
                  <TouchableRipple
                     onPress={() =>
                        navigation.navigate("UserAnnouncementsDashboard")
                     }
                     style={styles.dashboardCard}
                  >
                     <View
                        style={{
                           alignItems: "center",
                           paddingHorizontal: 15,
                           paddingVertical: 20,
                        }}
                     >
                        <Image
                           source={require("../../../../assets/images/announcements.png")}
                           style={[styles.cardImg, { marginVertical: 10 }]}
                        />
                        <Text style={styles.cardText}>Announcements</Text>
                     </View>
                  </TouchableRipple>
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
   profileDetails: {
      width: "100%",
      marginTop: 15,
      flexDirection: "row",
      alignItems: "center",
   },
   title: {
      width: "90%",
      fontFamily: "Roboto Regular",
      fontSize: 16,
      marginVertical: 10,
   },
   profileText: {
      marginLeft: 20,
   },
   recentAnnouncement: {
      width: "100%",
      elevation: 5,
      padding: 15,
      backgroundColor: white,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
   },
   quickButtons: {
      width: "100%",
      marginTop: 25,
      flexDirection: "row",
      justifyContent: "space-between",
   },
   dashboardCard: {
      width: "48%",
      backgroundColor: white,
      borderRadius: 16,
      elevation: 5,
   },
   cardImg: {
      width: 60,
   },
   cardText: {
      fontFamily: "fontBold",
      fontSize: 17,
      marginTop: 5,
   },
});

export default Dashboard;
