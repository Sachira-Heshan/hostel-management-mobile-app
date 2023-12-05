import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
   primaryBlue,
   textDarkGray,
   textLightGray,
   white,
} from "../../../../constants/Colors";
import { Button, IconButton, DataTable } from "react-native-paper";

const RoomChecklistForm = ({ navigation, route }) => {
   const { checklist_form } = route.params;

   const [showDeclineRequest, setShowDeclineRequest] = useState(false);

   const handleRoomAllocation = () => {
      //room allocation logic
   };

   const showDeclineModal = () => {
      setShowDeclineRequest(true);
   };

   const hideDeclineModal = () => {
      setShowDeclineRequest(false);
   };

   return (
      <ScrollView
         style={{ flex: 1 }}
         contentContainerStyle={{ backgroundColor: white, minHeight: "100%" }}
         showsVerticalScrollIndicator={false}
      >
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <Text style={styles.roomAllocationTitle}>
                  Room Checklist Form
               </Text>
               <Text style={styles.infoTextContainer}>
                  <Text style={styles.infoTextDesc}>Date Assigned: </Text>
                  <Text style={styles.infoTextValue}>
                     {checklist_form.date_assigned}
                  </Text>
               </Text>
               <Text style={styles.infoTextContainer}>
                  <Text style={styles.infoTextDesc}>Batch: </Text>
                  <Text style={styles.infoTextValue}>
                     {checklist_form.faculty} | {checklist_form.batch}
                  </Text>
               </Text>
               <View
                  style={{
                     width: "100%",
                     height: 1,
                     backgroundColor: textLightGray,
                  }}
               ></View>
               <Text style={styles.infoTextDesc}>Member Details</Text>
               {checklist_form.member_details.map((member) => {
                  return (
                     <View key={member.email} style={styles.memberContainer}>
                        <Text style={styles.memberDetail}>{member.email}</Text>
                        <IconButton
                           icon={"account-search"}
                           iconColor={textDarkGray}
                           size={24}
                        />
                     </View>
                  );
               })}
               <View
                  style={{
                     width: "100%",
                     height: 1,
                     backgroundColor: textLightGray,
                  }}
               ></View>
               <Text style={styles.infoTextDesc}>Reason</Text>
               <Text
                  style={{
                     width: "100%",
                     fontFamily: "fontRegular",
                     marginVertical: 8,
                  }}
               >
                  {checklist_form.reason}
               </Text>
               <View
                  style={{
                     width: "100%",
                     height: 1,
                     backgroundColor: textLightGray,
                  }}
               ></View>
               <Text style={styles.infoTextDesc}>Room Furniture Details</Text>
               {/* After this room furniture details */}
               <View style={styles.furnitureDetailsTableContainer}>
                  <DataTable style={styles.furnitureDetailsTable}>
                     <DataTable.Header>
                        <DataTable.Title
                           style={{
                              flex: 1,
                              borderRightColor: textLightGray,
                              borderRightWidth: 1,
                           }}
                           textStyle={{
                              fontFamily: "fontRegular",
                              fontSize: 16,
                           }}
                        >
                           No
                        </DataTable.Title>
                        <DataTable.Title
                           style={{
                              flex: 4,
                              borderRightColor: textLightGray,
                              borderRightWidth: 1,
                           }}
                           textStyle={{
                              fontFamily: "fontRegular",
                              fontSize: 16,
                              paddingLeft: 10,
                           }}
                        >
                           Item
                        </DataTable.Title>
                        <DataTable.Title
                           style={{
                              flex: 2,
                              borderRightColor: textLightGray,
                              borderRightWidth: 1,
                           }}
                           textStyle={{
                              fontFamily: "fontRegular",
                              fontSize: 16,
                              paddingLeft: 10,
                           }}
                        >
                           Condition
                        </DataTable.Title>
                        <DataTable.Title
                           style={{ flex: 1 }}
                           textStyle={{
                              fontFamily: "fontRegular",
                              fontSize: 16,
                              paddingLeft: 10,
                           }}
                        >
                           Qt
                        </DataTable.Title>
                     </DataTable.Header>
                     {checklist_form.room_furniture_details.map((furniture) => {
                        return (
                           <DataTable.Row
                              key={furniture.id}
                              style={{
                                 borderTopColor: textLightGray,
                                 borderTopWidth: 1,
                              }}
                           >
                              <DataTable.Cell
                                 style={{
                                    flex: 1,
                                    borderRightColor: textLightGray,
                                    borderRightWidth: 1,
                                 }}
                                 textStyle={{
                                    fontFamily: "fontRegular",
                                    fontSize: 16,
                                 }}
                              >
                                 {furniture.id}
                              </DataTable.Cell>
                              <DataTable.Cell
                                 style={{
                                    flex: 4,
                                    borderRightColor: textLightGray,
                                    borderRightWidth: 1,
                                 }}
                                 textStyle={{
                                    fontFamily: "fontRegular",
                                    fontSize: 16,
                                    paddingLeft: 10,
                                 }}
                              >
                                 {furniture.item}
                              </DataTable.Cell>
                              <DataTable.Cell
                                 style={{
                                    flex: 2,
                                    borderRightColor: textLightGray,
                                    borderRightWidth: 1,
                                 }}
                                 textStyle={{
                                    fontFamily: "fontRegular",
                                    fontSize: 16,
                                    paddingLeft: 10,
                                 }}
                              >
                                 {furniture.condition}
                              </DataTable.Cell>
                              <DataTable.Cell
                                 style={{ flex: 1 }}
                                 textStyle={{
                                    fontFamily: "fontRegular",
                                    fontSize: 16,
                                    paddingLeft: 10,
                                 }}
                              >
                                 {furniture.quantity}
                              </DataTable.Cell>
                           </DataTable.Row>
                        );
                     })}
                  </DataTable>
               </View>
               <View
                  style={{
                     width: "100%",
                     height: 1,
                     backgroundColor: textLightGray,
                     marginTop: 15,
                  }}
               ></View>
               <Text style={styles.infoTextDesc}>Item Condition Details</Text>
               <Text
                  style={{
                     width: "100%",
                     fontFamily: "fontRegular",
                     marginVertical: 8,
                  }}
               >
                  {checklist_form.item_condition_details}
               </Text>
               <View style={styles.actionButtonContainer}>
                  <Button
                     mode="outlined"
                     style={{
                        width: "48%",
                        borderRadius: 8,
                        borderColor: primaryBlue,
                     }}
                     labelStyle={{
                        fontFamily: "fontRegular",
                        fontSize: 16,
                        color: primaryBlue,
                     }}
                     // onPress={showDeclineModal}
                  >
                     Decline
                  </Button>
                  <Button
                     mode="contained"
                     style={{ width: "48%", borderRadius: 8 }}
                     buttonColor={primaryBlue}
                     labelStyle={{
                        fontFamily: "fontRegular",
                        fontSize: 16,
                     }}
                     // onPress={handleSubmit}
                  >
                     Accept
                  </Button>
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
      fontFamily: "Roboto Regular",
      fontSize: 16,
      marginVertical: 10,
   },
   roomAllocationTitle: {
      width: "100%",
      textAlign: "center",
      marginVertical: 10,
      fontFamily: "fontBold",
      fontSize: 18,
   },
   infoTextContainer: {
      width: "100%",
      marginVertical: 8,
   },
   infoTextDesc: {
      width: "100%",
      fontFamily: "fontMedium",
      fontSize: 16,
      marginTop: 10,
   },
   infoTextValue: {
      fontFamily: "fontRegular",
   },
   memberContainer: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
   memberDetail: {
      fontFamily: "fontRegular",
      fontSize: 16,
   },
   formContainer: {
      width: "100%",
   },
   declineModal: {
      backgroundColor: white,
      borderRadius: 12,
   },
   roomNumberContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
   },
   actionButtonContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 15,
   },
   furnitureDetailsTableContainer: {
      width: "100%",
      marginVertical: 10,
   },
   furnitureDetailsTable: {
      // backgroundColor: textLightGray,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: textLightGray,
   },
   actionButtonContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 15,
   },
});

export default RoomChecklistForm;
