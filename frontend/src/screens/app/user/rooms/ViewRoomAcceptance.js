import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
   primaryBlue,
   textDarkGray,
   textLightGray,
   white,
} from "../../../../constants/Colors";
import { Button, IconButton, DataTable } from "react-native-paper";
import WarningModal from "../../../../components/WarningModal";

const ViewRoomAcceptance = ({ navigation, route }) => {
   const [visible, setVisible] = useState(false);

   const { room_acceptance } = route.params;

   //    useEffect(() => {
   //       console.log(room_acceptance.member_details);
   //       room_acceptance.member_details.map((x) => console.log(x.email));
   //    }, []);

   const [showDeclineRequest, setShowDeclineRequest] = useState(false);

   const showDeleteRequestModal = () => {
      setVisible(true);
   };

   const hideDeleteRequestModal = () => {
      setVisible(false);
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
                  Room Request Details
               </Text>
               <Text style={styles.infoTextContainer}>
                  <Text style={styles.infoTextDesc}>Date Requested: </Text>
                  <Text style={styles.infoTextValue}>
                     {room_acceptance.date_requested}
                  </Text>
               </Text>
               <Text style={styles.infoTextContainer}>
                  <Text style={styles.infoTextDesc}>Batch: </Text>
                  <Text style={styles.infoTextValue}>
                     {room_acceptance.faculty} | {room_acceptance.batch}
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
               {room_acceptance.member_details.map((member) => {
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
                  {room_acceptance.reason}
               </Text>
               <View
                  style={{
                     width: "100%",
                     height: 1,
                     backgroundColor: textLightGray,
                  }}
               ></View>
               <View style={styles.actionButtonContainer}>
                  <Button
                     mode="outlined"
                     style={{
                        width: "100%",
                        borderRadius: 8,
                        borderColor: primaryBlue,
                        marginTop: 15,
                     }}
                     labelStyle={{
                        fontFamily: "fontRegular",
                        fontSize: 16,
                        color: primaryBlue,
                     }}
                     onPress={showDeleteRequestModal}
                  >
                     Delete Request
                  </Button>
               </View>
               <WarningModal
                  visible={visible}
                  hideModal={() => hideDeleteRequestModal}
                  message={"Are you sure, want to delete this room request?"}
               />
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

export default ViewRoomAcceptance;
