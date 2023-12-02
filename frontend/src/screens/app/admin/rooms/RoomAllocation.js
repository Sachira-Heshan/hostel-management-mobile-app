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
} from "../../../../constants/Colors";
import DropDown from "react-native-paper-dropdown";
import { Formik } from "formik";
import * as Yup from "yup";
import {
   Button,
   IconButton,
   TextInput,
   Portal,
   Dialog,
} from "react-native-paper";

const RoomAllocation = ({ navigation, route }) => {
   const { room_request } = route.params;

   const [showBlock, setShowBlock] = useState(false);
   const [showFloor, setShowFloor] = useState(false);
   const [showRoomNumber, setShowRoomNumber] = useState(false);
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

   const roomAllocationSchema = Yup.object({
      block: Yup.string(),
      floor: Yup.string(),
      roomNumber: Yup.string(),
      comments: Yup.string(),
   });

   return (
      <ScrollView
         style={{ flex: 1 }}
         contentContainerStyle={{ backgroundColor: white, minHeight: "100%" }}
         showsVerticalScrollIndicator={false}
      >
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <Text style={styles.roomAllocationTitle}>Room Allocation</Text>
               <Text style={styles.infoTextContainer}>
                  <Text style={styles.infoTextDesc}>Date Requested: </Text>
                  <Text style={styles.infoTextValue}>
                     {room_request.date_requested}
                  </Text>
               </Text>
               <Text style={styles.infoTextContainer}>
                  <Text style={styles.infoTextDesc}>Batch: </Text>
                  <Text style={styles.infoTextValue}>
                     {room_request.faculty} | {room_request.batch}
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
               {room_request.member_details.map((member) => {
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
                  {room_request.reason}
               </Text>
               <View
                  style={{
                     width: "100%",
                     height: 1,
                     backgroundColor: textLightGray,
                  }}
               ></View>
               <Text style={styles.infoTextDesc}>Room Allocation</Text>
               <Formik
                  initialValues={{
                     block: "",
                     floor: "",
                     roomNumber: "",
                     comments: "",
                  }}
                  onSubmit={handleRoomAllocation}
                  validationSchema={roomAllocationSchema}
               >
                  {({ handleBlur, handleChange, handleSubmit, values }) => {
                     return (
                        <View style={styles.formContainer}>
                           <View style={{ marginTop: 15 }}>
                              <DropDown
                                 mode="outlined"
                                 label="Block"
                                 visible={showBlock}
                                 showDropDown={() => setShowBlock(true)}
                                 onDismiss={() => setShowBlock(false)}
                                 list={[
                                    {
                                       label: "A",
                                       value: "a",
                                    },
                                    {
                                       label: "B",
                                       value: "b",
                                    },
                                    {
                                       label: "C",
                                       value: "c",
                                    },
                                 ]}
                                 value={values.block}
                                 setValue={handleChange("block")}
                                 activeColor={primaryBlue}
                                 inputProps={{
                                    outlineColor: lightGray,
                                    right: (
                                       <TextInput.Icon icon={"chevron-down"} />
                                    ),
                                 }}
                              />
                           </View>
                           <View style={styles.roomNumberContainer}>
                              <View style={{ width: "45%" }}>
                                 <DropDown
                                    mode="outlined"
                                    label="Floor"
                                    visible={showFloor}
                                    showDropDown={() => setShowFloor(true)}
                                    onDismiss={() => setShowFloor(false)}
                                    list={[
                                       {
                                          label: "1",
                                          value: "1",
                                       },
                                       {
                                          label: "2",
                                          value: "2",
                                       },
                                       {
                                          label: "3",
                                          value: "3",
                                       },
                                       {
                                          label: "4",
                                          value: "4",
                                       },
                                    ]}
                                    value={values.floor}
                                    setValue={handleChange("floor")}
                                    activeColor={primaryBlue}
                                    inputProps={{
                                       outlineColor: lightGray,
                                       right: (
                                          <TextInput.Icon
                                             icon={"chevron-down"}
                                          />
                                       ),
                                    }}
                                    dropDownStyle={{ width: "45%" }}
                                 />
                              </View>
                              <DropDown
                                 mode="outlined"
                                 label="Room Number"
                                 visible={showRoomNumber}
                                 showDropDown={() => setShowRoomNumber(true)}
                                 onDismiss={() => setShowRoomNumber(false)}
                                 list={[
                                    {
                                       label: "Student",
                                       value: "student",
                                    },
                                    {
                                       label: "Academic Staff",
                                       value: "academicStaff",
                                    },
                                 ]}
                                 value={values.roomNumber}
                                 setValue={handleChange("roomNumber")}
                                 activeColor={primaryBlue}
                                 inputProps={{
                                    outlineColor: lightGray,
                                    right: (
                                       <TextInput.Icon icon={"chevron-down"} />
                                    ),
                                 }}
                              />
                           </View>
                           <TextInput
                              mode="outlined"
                              label={"Comments"}
                              placeholder="Any comments for this room allocation"
                              multiline
                              numberOfLines={6}
                              style={{ marginTop: 15 }}
                              onChangeText={handleChange("comments")}
                              onBlur={handleBlur("comments")}
                              selectionColor={lightGray}
                              cursorColor={primaryBlue}
                              outlineColor={lightGray}
                              activeOutlineColor={primaryBlue}
                              outlineStyle={{ borderRadius: 4 }}
                           />

                           {/* Decline modal */}
                           <Portal>
                              <Dialog
                                 visible={showDeclineRequest}
                                 onDismiss={hideDeclineModal}
                                 style={styles.declineModal}
                              >
                                 <Dialog.Title>
                                    <Text
                                       style={{
                                          fontFamily: "fontBold",
                                          fontSize: 20,
                                       }}
                                    >
                                       Are you sure you want to decline?
                                    </Text>
                                 </Dialog.Title>
                                 <Dialog.Content>
                                    <Text
                                       style={{
                                          fontFamily: "fontRegular",
                                          fontSize: 16,
                                       }}
                                    >
                                       This process cannot be undone. Be
                                       careful!
                                    </Text>
                                    <TextInput
                                       mode="outlined"
                                       label={"Reason"}
                                       placeholder="Any reason for decline?"
                                       style={{ marginTop: 15 }}
                                       // onChangeText={handleChange("comments")}
                                       // onBlur={handleBlur("comments")}
                                       selectionColor={lightGray}
                                       cursorColor={primaryBlue}
                                       outlineColor={lightGray}
                                       activeOutlineColor={primaryBlue}
                                       outlineStyle={{ borderRadius: 4 }}
                                    />
                                 </Dialog.Content>
                                 <Dialog.Actions>
                                    <Button
                                       mode="outlined"
                                       style={{
                                          paddingHorizontal: 15,
                                          borderColor: textLightGray,
                                          borderRadius: 6,
                                       }}
                                       labelStyle={{
                                          fontFamily: "fontRegular",
                                          fontSize: 16,
                                          color: textLightGray,
                                       }}
                                       onPress={hideDeclineModal}
                                    >
                                       No
                                    </Button>
                                    <Button
                                       mode="contained"
                                       style={{
                                          paddingHorizontal: 15,
                                          borderRadius: 6,
                                       }}
                                       buttonColor={primaryBlue}
                                       labelStyle={{
                                          fontFamily: "fontRegular",
                                          fontSize: 16,
                                       }}
                                       onPress={hideDeclineModal}
                                    >
                                       Yes
                                    </Button>
                                 </Dialog.Actions>
                              </Dialog>
                           </Portal>
                           {/* End of decline modal */}

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
                                 onPress={showDeclineModal}
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
                                 onPress={handleSubmit}
                              >
                                 Allocate
                              </Button>
                           </View>
                        </View>
                     );
                  }}
               </Formik>
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
});

export default RoomAllocation;
