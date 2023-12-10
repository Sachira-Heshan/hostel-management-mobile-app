import { useContext, useEffect } from "react";
import { View, Text, RefreshControl, FlatList, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
   black,
   darkGreen,
   darkRed,
   lightGray,
   primaryBlue,
   textDarkGray,
   textLightGray,
   white,
   yellowDark,
} from "../../../../constants/Colors";
import {
   Button,
   List,
   TouchableRipple,
   Avatar,
   Icon,
} from "react-native-paper";
import { useCallback, useState } from "react";
import SuccessModal from "../../../../components/SuccessModal";

import { AuthContext } from "../../../../context/AuthContext";

const RoomAcceptance = ({ navigation }) => {
   const [refreshing, setRefreshing] = useState(false);
   const [visible, setVisible] = useState(false);

   const { userInfo } = useContext(AuthContext);

   const hideModal = () => {
      setVisible(false);
   };

   const data = require("../../../../data/dummyData.json");
   const userRoomData = data.pending_room_requests.filter(
      (req) => req.user === userInfo._id
   );

   // useEffect(() => {
   //    console.log(userRoomData);
   // }, []);

   const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
         setRefreshing(false);
      }, 1500);
   }, []);

   return (
      <View style={{ flex: 1, backgroundColor: white, minHeight: "100%" }}>
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <Text style={styles.roomAcceptanceTitle}>Room Acceptance</Text>
               <FlatList
                  data={userRoomData}
                  refreshControl={
                     <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                     />
                  }
                  renderItem={({ item }) => {
                     return (
                        <List.Item
                           key={item.id}
                           title={item.name}
                           description={item.reason}
                           left={(color = primaryBlue, size = 40) => (
                              <List.Icon
                                 color={
                                    item.status === "pending_acceptance"
                                       ? yellowDark
                                       : darkGreen
                                 }
                                 icon={
                                    item.status === "pending_acceptance"
                                       ? "clock"
                                       : "check-bold"
                                 }
                              />
                           )}
                           right={(props) => (
                              <TouchableRipple
                                 style={{ justifyContent: "center" }}
                              >
                                 <List.Icon
                                    {...props}
                                    icon={"chevron-right"}
                                    color={black}
                                 />
                              </TouchableRipple>
                           )}
                           style={{
                              paddingLeft: 15,
                              elevation: 5,
                              width: "90%",
                              backgroundColor: white,
                              alignSelf: "center",
                              marginVertical: 8, //remove
                              borderRadius: 8, //remove
                           }}
                           titleStyle={{ fontFamily: "fontRegular" }}
                           descriptionStyle={{
                              fontFamily: "fontRegular",
                              marginTop: -5,
                           }}
                           onPress={() => {
                              navigation.navigate("UserRoomsDashboard", {
                                 screen:
                                    item.status === "pending_acceptance"
                                       ? "UserRoomAcceptanceView"
                                       : "UserPendingRoomChecklist",
                                 params: {
                                    room_acceptance: item,
                                 },
                              }); //placeholder navigation
                           }}
                        />
                     );
                  }}
                  style={styles.listStyles}
                  showsVerticalScrollIndicator={false}
                  ListEmptyComponent={
                     <View>
                        <Text
                           style={{
                              fontFamily: "fontBold",
                              textAlign: "center",
                              marginHorizontal: 15,
                           }}
                        >
                           There are no room acceptance requests!
                        </Text>
                     </View>
                  }
               />
            </View>
            <SuccessModal
               message={"Testing from room acceptance"}
               visible={visible}
               hideModal={() => hideModal}
            ></SuccessModal>
         </View>
      </View>
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
      width: "100%",
      alignItems: "center",
   },
   title: {
      width: "90%",
      fontFamily: "Roboto Regular",
      fontSize: 16,
      marginVertical: 10,
   },
   roomAcceptanceTitle: {
      marginVertical: 8,
      fontFamily: "fontBold",
      fontSize: 18,
   },
   listContainer: {
      flex: 1,
      width: "100%",
   },
   listStyles: {
      flex: 1,
      width: "100%",
   },
   imageContainer: {
      backgroundColor: primaryBlue,
      width: 50,
      height: 50,
      borderRadius: 50,
      alignSelf: "center",
   },
});

export default RoomAcceptance;
