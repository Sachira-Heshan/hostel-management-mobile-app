import { useState, useCallback, useContext } from "react";
import { View, Text, FlatList, RefreshControl, StyleSheet } from "react-native";
import {
   lightGray,
   primaryBlue,
   textDarkGray,
   textLightGray,
   white,
} from "../../../constants/Colors";
import { Icon, TouchableRipple, List } from "react-native-paper";

import { AuthContext } from "../../../context/AuthContext";

const LatePasses = ({ navigation }) => {
   const [refreshing, setRefreshing] = useState(false);

   const { userInfo } = useContext(AuthContext);

   const data = require("../../../data/dummyData.json");
   const userLatePasses = data.late_passes.filter(
      (late_pass) => late_pass.user === userInfo._id
   );

   const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
         setRefreshing(false);
      }, 1500);
   }, []);

   return (
      <View style={styles.container}>
         <View style={styles.contentContainer}>
            <View style={styles.announcementContainer}>
               <Text
                  style={{
                     fontFamily: "fontBold",
                     fontSize: 20,
                     width: "100%",
                     textAlign: "center",
                     marginTop: 5,
                  }}
               >
                  Late Passes
               </Text>
               <FlatList
                  data={userLatePasses}
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
                           title={item.reason}
                           description={`${item.departure_date} | ${item.departure_time}`}
                           left={(color = textDarkGray) => (
                              <List.Icon
                                 color={primaryBlue}
                                 icon={
                                    item.status === "pending"
                                       ? "clock"
                                       : "check-bold"
                                 }
                              />
                           )}
                           right={(props) => (
                              <TouchableRipple
                                 // onPress={() => {
                                 //    showDeleteAnnouncementDialog();
                                 //    setClickedItem(item);
                                 // }}
                                 style={{ justifyContent: "center" }}
                              >
                                 <List.Icon
                                    {...props}
                                    icon={"chevron-right"}
                                    color={textDarkGray}
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
                              navigation.navigate("UserViewLatePass", {
                                 late_pass: item,
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
                           There are no late passes!
                        </Text>
                     </View>
                  }
                  ListHeaderComponent={
                     <View
                        style={{
                           width: "90%",
                           alignItems: "center",
                           alignSelf: "center",
                        }}
                     >
                        <TouchableRipple
                           style={{
                              width: "100%",
                              margin: 15,
                              padding: 15,
                              paddingHorizontal: 20,
                              borderRadius: 8,
                              borderColor: primaryBlue,
                              borderWidth: 1,
                           }}
                           onPress={() =>
                              navigation.navigate("UserRequestLatePass")
                           }
                        >
                           <View style={styles.addAnnouncement}>
                              <Text
                                 style={{
                                    color: textDarkGray,
                                    fontFamily: "fontRegular",
                                    fontSize: 16,
                                 }}
                              >
                                 Request a Late Pass
                              </Text>
                              <Icon
                                 source={"plus-box"}
                                 color={primaryBlue}
                                 size={24}
                              />
                           </View>
                        </TouchableRipple>

                        <Text
                           style={{
                              fontFamily: "fontRegular",
                              fontSize: 16,
                              width: "100%",
                              marginVertical: 8,
                           }}
                        >
                           Manage
                        </Text>
                        <View
                           style={{
                              width: "100%",
                              height: 1,
                              backgroundColor: textLightGray,
                              marginBottom: 8,
                           }}
                        ></View>
                     </View>
                  }
               />
            </View>
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
   addAnnouncement: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
   announcementContainer: {
      flex: 1,
      width: "100%",
   },
   announcementDialog: {
      backgroundColor: lightGray,
      borderRadius: 12,
   },
   imageContainer: {
      backgroundColor: primaryBlue,
      width: 40,
      height: 40,
      borderRadius: 40,
      alignSelf: "center",
   },
});

export default LatePasses;
