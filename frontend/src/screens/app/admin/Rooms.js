import { useCallback, useState, useContext } from "react";
import { View, Text, Image, StyleSheet, RefreshControl } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { textLightGray, white } from "../../../constants/Colors";
import { TouchableRipple, Avatar } from "react-native-paper";

import { AuthContext } from "../../../context/AuthContext";

const Rooms = ({ navigation }) => {
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

   //Get dummy data from the json file
   const data = require("../../../data/dummyData.json");

   const { userInfo } = useContext(AuthContext);

   const [refreshing, setRefreshing] = useState(false);

   const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
         setRefreshing(false);
      }, 1500);
   }, []);

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
                  <TouchableRipple
                     onPress={() =>
                        navigation.navigate("AdminPendingRoomRequests")
                     }
                     style={styles.roomManagementCard}
                  >
                     <View
                        style={{
                           alignItems: "center",
                           paddingHorizontal: 15,
                           paddingVertical: 20,
                        }}
                     >
                        <Image
                           source={require("../../../../assets/images/pending_room_requests.png")}
                           style={styles.cardImg}
                        />
                        <Text style={styles.cardText}>
                           Pending Room Requests
                        </Text>
                     </View>
                  </TouchableRipple>

                  <TouchableRipple
                     onPress={() =>
                        navigation.navigate("AdminPendingRoomChecklist")
                     }
                     style={styles.roomManagementCard}
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
                        <Text style={styles.cardText}>
                           Pending Room Checklist
                        </Text>
                     </View>
                  </TouchableRipple>
               </View>

               <View style={styles.quickButtons}>
                  <TouchableRipple
                     onPress={() =>
                        navigation.navigate("AdminAcceptedRoomRequests")
                     }
                     style={styles.roomManagementCard}
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
                        <Text style={styles.cardText}>Accepted Requests</Text>
                     </View>
                  </TouchableRipple>

                  <TouchableRipple
                     onPress={() => navigation.navigate("AdminVacateRoom")}
                     style={styles.roomManagementCard}
                  >
                     <View
                        style={{
                           alignItems: "center",
                           paddingHorizontal: 15,
                           paddingVertical: 20,
                        }}
                     >
                        <Image
                           source={require("../../../../assets/images/vacate_room.png")}
                           style={styles.cardImg}
                        />
                        <Text style={styles.cardText}>Vacate Room</Text>
                     </View>
                  </TouchableRipple>
               </View>

               <View style={styles.quickButtons}>
                  <TouchableRipple
                     onPress={() => navigation.navigate("AdminRoomDetails")}
                     style={styles.roomManagementCard}
                  >
                     <View
                        style={{
                           alignItems: "center",
                           paddingHorizontal: 15,
                           paddingVertical: 20,
                        }}
                     >
                        <Image
                           source={require("../../../../assets/images/view_room_details.png")}
                           style={styles.cardImg}
                        />
                        <Text style={styles.cardText}>View Room Details</Text>
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
   quickButtons: {
      width: "100%",
      marginTop: 25,
      flexDirection: "row",
      justifyContent: "space-between",
   },
   roomManagementCard: {
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
      textAlign: "center",
   },
});

export default Rooms;
