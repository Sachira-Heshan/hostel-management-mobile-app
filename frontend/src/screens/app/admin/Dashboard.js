import { useState, useCallback } from "react";
import { View, Text, Image, RefreshControl, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
   black,
   darkGreen,
   darkYellow,
   lightGray,
   orangeDark,
   primaryBlue,
   redIndicator,
   textDarkGray,
   white,
   yellowDark,
   yellowMark,
} from "../../../constants/Colors";
import { Button, TouchableRipple } from "react-native-paper";
import CircularProgress from "react-native-circular-progress-indicator";

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
               <View style={[styles.capacityCard, { marginVertical: 10 }]}>
                  <Text style={styles.title}>Student Capacity</Text>
                  <View style={styles.indicatorContainer}>
                     <View style={{}}>
                        <CircularProgress
                           value={17}
                           radius={50}
                           duration={1500}
                           progressValueColor={darkGreen}
                           maxValue={64}
                           title="Block A"
                           titleColor={black}
                           titleStyle={{ fontFamily: "fontBold" }}
                           inActiveStrokeColor={darkGreen}
                           inActiveStrokeOpacity={0.2}
                           activeStrokeColor={darkGreen}
                           inActiveStrokeWidth={8}
                           activeStrokeWidth={8}
                        />
                     </View>
                     <View style={styles.progressIndicator}>
                        <CircularProgress
                           value={323}
                           radius={50}
                           duration={1500}
                           progressValueColor={redIndicator}
                           maxValue={400}
                           title="Block B"
                           titleColor={black}
                           titleStyle={{ fontFamily: "fontBold" }}
                           inActiveStrokeColor={redIndicator}
                           inActiveStrokeOpacity={0.2}
                           activeStrokeColor={redIndicator}
                           inActiveStrokeWidth={8}
                           activeStrokeWidth={8}
                        />
                     </View>
                     <View style={{}}>
                        <CircularProgress
                           value={219}
                           radius={50}
                           duration={1500}
                           progressValueColor={darkYellow}
                           maxValue={400}
                           title="Block C"
                           titleColor={black}
                           titleStyle={{ fontFamily: "fontBold" }}
                           inActiveStrokeColor={darkYellow}
                           inActiveStrokeOpacity={0.2}
                           activeStrokeColor={darkYellow}
                           inActiveStrokeWidth={8}
                           activeStrokeWidth={8}
                        />
                     </View>
                  </View>
               </View>
               <View style={styles.capacityCard}>
                  <Text style={styles.title}>Room Capacity</Text>
                  <View style={styles.indicatorContainer}>
                     <View style={{}}>
                        <CircularProgress
                           value={9}
                           radius={50}
                           duration={1500}
                           progressValueColor={darkGreen}
                           maxValue={32}
                           title="Block A"
                           titleColor={black}
                           titleStyle={{ fontFamily: "fontBold" }}
                           inActiveStrokeColor={darkGreen}
                           inActiveStrokeOpacity={0.2}
                           activeStrokeColor={darkGreen}
                           inActiveStrokeWidth={8}
                           activeStrokeWidth={8}
                        />
                     </View>
                     <View style={styles.progressIndicator}>
                        <CircularProgress
                           value={80}
                           radius={50}
                           duration={1500}
                           progressValueColor={redIndicator}
                           maxValue={100}
                           title="Block B"
                           titleColor={black}
                           titleStyle={{ fontFamily: "fontBold" }}
                           inActiveStrokeColor={redIndicator}
                           inActiveStrokeOpacity={0.2}
                           activeStrokeColor={redIndicator}
                           inActiveStrokeWidth={8}
                           activeStrokeWidth={8}
                        />
                     </View>
                     <View style={{}}>
                        <CircularProgress
                           value={48}
                           radius={50}
                           duration={1500}
                           progressValueColor={darkYellow}
                           maxValue={100}
                           title="Block C"
                           titleColor={black}
                           titleStyle={{ fontFamily: "fontBold" }}
                           inActiveStrokeColor={darkYellow}
                           inActiveStrokeOpacity={0.2}
                           activeStrokeColor={darkYellow}
                           inActiveStrokeWidth={8}
                           activeStrokeWidth={8}
                        />
                     </View>
                  </View>
               </View>
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
