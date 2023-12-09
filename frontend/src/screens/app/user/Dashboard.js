import { useState, useCallback } from "react";
import { View, Text, Image, RefreshControl, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { white } from "../../../constants/Colors";
import { Button, TouchableRipple } from "react-native-paper";

const Dashboard = ({ navigation }) => {
   const [refreshing, setRefreshing] = useState(false);

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
               <View style={styles.quickButtons}>
                  <TouchableRipple
                     onPress={() =>
                        navigation.navigate("AdminRoomsDashboard", {
                           screen: "AdminPendingRoomRequests",
                        })
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
                           source={require("../../../../assets/images/room_management.png")}
                           style={styles.cardImg}
                        />
                        <Text style={styles.cardText}>Room Management</Text>
                     </View>
                  </TouchableRipple>

                  <TouchableRipple
                     onPress={() =>
                        navigation.navigate("AdminAnnouncementsDashboard")
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
                           style={styles.cardImg}
                        />
                        <Text style={styles.cardText}>Announcements</Text>
                     </View>
                  </TouchableRipple>
               </View>
               <View style={styles.quickButtons}>
                  <TouchableRipple
                     onPress={() =>
                        navigation.navigate("AdminComplainsDashboard")
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
                           style={styles.cardImg}
                        />
                        <Text style={styles.cardText}>Complains</Text>
                     </View>
                  </TouchableRipple>

                  <TouchableRipple
                     onPress={() =>
                        navigation.navigate("AdminLatePassesDashboard")
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
                           style={styles.cardImg}
                        />
                        <Text style={styles.cardText}>Late Passes</Text>
                     </View>
                  </TouchableRipple>
               </View>
               <View style={[styles.quickButtons, { marginBottom: 15 }]}>
                  <TouchableRipple
                     onPress={() =>
                        navigation.navigate("AdminPaymentReceiptsDashboard")
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
                        navigation.navigate("AdminHostelRulesDashboard")
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
   capacityCard: {
      marginTop: 10,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 6,
      backgroundColor: white,
      elevation: 4,
   },
   title: {
      width: "90%",
      fontFamily: "fontBold",
      fontSize: 18,
      marginVertical: 10,
   },
   indicatorContainer: {
      padding: 10,
      marginBottom: 10,
      flexDirection: "row",
   },
   progressIndicator: {
      marginHorizontal: 10,
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
