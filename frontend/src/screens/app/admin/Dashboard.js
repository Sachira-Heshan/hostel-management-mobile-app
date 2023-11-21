import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
   black,
   lightGray,
   primaryBlue,
   textDarkGray,
   white,
} from "../../../constants/Colors";
import { Button, TouchableRipple } from "react-native-paper";
import CircularProgress from "react-native-circular-progress-indicator";

const Dashboard = ({ navigation }) => {
   return (
      <ScrollView
         style={{ flex: 1 }}
         contentContainerStyle={{ backgroundColor: white, minHeight: "100%" }}
         showsVerticalScrollIndicator={false}
      >
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <View style={[styles.capacityCard, { marginVertical: 10 }]}>
                  <Text style={styles.title}>Student Capacity</Text>
                  <View style={styles.indicatorContainer}>
                     <View style={{}}>
                        <CircularProgress
                           value={21}
                           radius={50}
                           duration={1500}
                           progressValueColor={primaryBlue}
                           maxValue={64}
                           title="Block A"
                           titleColor={black}
                           titleStyle={{ fontFamily: "fontBold" }}
                           inActiveStrokeColor={primaryBlue}
                           inActiveStrokeOpacity={0.2}
                           activeStrokeColor={primaryBlue}
                           inActiveStrokeWidth={8}
                           activeStrokeWidth={8}
                        />
                     </View>
                     <View style={styles.progressIndicator}>
                        <CircularProgress
                           value={253}
                           radius={50}
                           duration={1500}
                           progressValueColor={primaryBlue}
                           maxValue={400}
                           title="Block B"
                           titleColor={black}
                           titleStyle={{ fontFamily: "fontBold" }}
                           inActiveStrokeColor={primaryBlue}
                           inActiveStrokeOpacity={0.2}
                           activeStrokeColor={primaryBlue}
                           inActiveStrokeWidth={8}
                           activeStrokeWidth={8}
                        />
                     </View>
                     <View style={{}}>
                        <CircularProgress
                           value={178}
                           radius={50}
                           duration={1500}
                           progressValueColor={primaryBlue}
                           maxValue={400}
                           title="Block C"
                           titleColor={black}
                           titleStyle={{ fontFamily: "fontBold" }}
                           inActiveStrokeColor={primaryBlue}
                           inActiveStrokeOpacity={0.2}
                           activeStrokeColor={primaryBlue}
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
                           value={12}
                           radius={50}
                           duration={1500}
                           progressValueColor={primaryBlue}
                           maxValue={32}
                           title="Block A"
                           titleColor={black}
                           titleStyle={{ fontFamily: "fontBold" }}
                           inActiveStrokeColor={primaryBlue}
                           inActiveStrokeOpacity={0.2}
                           activeStrokeColor={primaryBlue}
                           inActiveStrokeWidth={8}
                           activeStrokeWidth={8}
                        />
                     </View>
                     <View style={styles.progressIndicator}>
                        <CircularProgress
                           value={65}
                           radius={50}
                           duration={1500}
                           progressValueColor={primaryBlue}
                           maxValue={100}
                           title="Block B"
                           titleColor={black}
                           titleStyle={{ fontFamily: "fontBold" }}
                           inActiveStrokeColor={primaryBlue}
                           inActiveStrokeOpacity={0.2}
                           activeStrokeColor={primaryBlue}
                           inActiveStrokeWidth={8}
                           activeStrokeWidth={8}
                        />
                     </View>
                     <View style={{}}>
                        <CircularProgress
                           value={48}
                           radius={50}
                           duration={1500}
                           progressValueColor={primaryBlue}
                           maxValue={100}
                           title="Block C"
                           titleColor={black}
                           titleStyle={{ fontFamily: "fontBold" }}
                           inActiveStrokeColor={primaryBlue}
                           inActiveStrokeOpacity={0.2}
                           activeStrokeColor={primaryBlue}
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
