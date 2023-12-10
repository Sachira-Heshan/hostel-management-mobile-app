import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Formik } from "formik";
import * as Yup from "yup";
import DropDown from "react-native-paper-dropdown";
import {
   primaryBlue,
   textDarkGray,
   textLightGray,
   white,
   lightGray,
} from "../../../../constants/Colors";
import { Button, IconButton, TextInput } from "react-native-paper";
import WarningModal from "../../../../components/WarningModal";
import ItemConditionDetails from "../../../../components/ItemConditionDetails";

const RoomChecklistDetails = ({ navigation, route }) => {
   const [visible, setVisible] = useState(false);

   const [showBunkBedWoodenCondition, setShowBunkBedWoodenCondition] =
      useState(false);
   const [showStudyTableWoodenCondition, setShowStudyTableWoodenCondition] =
      useState(false);
   const [showChairWoodenCondition, setShowChairWoodenCondition] =
      useState(false);
   const [showClothRackWoodenCondition, setShowClothRackWoodenCondition] =
      useState(false);
   const [showWallMountedLightCondition, setShowWallMountedLightCondition] =
      useState(false);
   const [showBalconyLightCondition, setShowBalconyLightCondition] =
      useState(false);
   const [showSocketCondition, setShowSocketCondition] = useState(false);
   const [showSwitchCondition, setShowSwitchCondition] = useState(false);
   const [showMainDoorKeyCondition, setShowMainDoorKeyCondition] =
      useState(false);
   const [showWindowDoorKeyCondition, setShowWindowDoorKeyCondition] =
      useState(false);
   const [showMattressCondition, setShowMattressCondition] = useState(false);

   const { room_acceptance } = route.params;

   const [showDeclineRequest, setShowDeclineRequest] = useState(false);

   const handleRoomChecklistFormSubmission = (values, errors) => {
      //handle checklist form submission
      console.log(values);
   };

   const showDeleteRequestModal = () => {
      setVisible(true);
   };

   const hideDeleteRequestModal = () => {
      setVisible(false);
   };

   const roomItems = [
      {
         item_name: "Bunk bed - wooden",
      },
      {
         item_name: "Study table - wooden",
      },
      {
         item_name: "Chair - wooden",
      },
      {
         item_name: "Cloth rack - wooden",
      },
      {
         item_name: "Wall mounted light",
      },
      {
         item_name: "Balcony light",
      },
      {
         item_name: "Socket",
      },
      {
         item_name: "Switch",
      },
      {
         item_name: "Main door key",
      },
      {
         item_name: "Window door key",
      },
      {
         item_name: "Mattress",
      },
   ];

   const roomChecklistFormSchema = Yup.object({
      condition: Yup.string().required("Condition is required!"),
      quantity: Yup.string().required("Quantity is required!"),

      study_table_wooden_condition: Yup.string().required(
         "Condition is required!"
      ),
      study_table_wooden_quantity: Yup.string().required(
         "Quantity is required!"
      ),
      chair_wooden_condition: Yup.string().required("Condition is required!"),
      chair_wooden_quantity: Yup.string().required("Quantity is required!"),
      cloth_rack_wooden_condition: Yup.string().required(
         "Condition is required!"
      ),
      cloth_rack_wooden_quantity: Yup.string().required(
         "Quantity is required!"
      ),
      wall_mounted_light_condition: Yup.string().required(
         "Condition is required!"
      ),
      wall_mounted_light_quantity: Yup.string().required(
         "Quantity is required!"
      ),
      balcony_light_condition: Yup.string().required("Condition is required!"),
      balcony_light_quantity: Yup.string().required("Quantity is required!"),
      socket_condition: Yup.string().required("Condition is required!"),
      socket_quantity: Yup.string().required("Quantity is required!"),
      switch_condition: Yup.string().required("Condition is required!"),
      switch_quantity: Yup.string().required("Quantity is required!"),
      main_door_key_condition: Yup.string().required("Condition is required!"),
      main_door_key_quantity: Yup.string().required("Quantity is required!"),
      window_door_key_condition: Yup.string().required(
         "Condition is required!"
      ),
      window_door_key_quantity: Yup.string().required("Quantity is required!"),
      mattress_condition: Yup.string().required("Condition is required!"),
      mattress_quantity: Yup.string().required("Quantity is required!"),

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
               <Text style={styles.roomAllocationTitle}>
                  Room Checklist Details
               </Text>
               <Text style={styles.infoTextContainer}>
                  <Text style={styles.infoTextDesc}>Date Requested: </Text>
                  <Text style={styles.infoTextValue}>
                     {room_acceptance.date_requested}
                  </Text>
               </Text>
               <Text style={styles.infoTextContainer}>
                  <Text style={styles.infoTextDesc}>Date Accepted: </Text>
                  <Text style={styles.infoTextValue}>
                     {room_acceptance.assigned_room_details.date_accepted}
                  </Text>
               </Text>
               <Text style={styles.infoTextContainer}>
                  <Text style={styles.infoTextDesc}>Room: </Text>
                  <Text style={styles.infoTextValue}>
                     {room_acceptance.assigned_room_details.room} - Block{" "}
                     {room_acceptance.assigned_room_details.block}
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
               <Text style={styles.infoTextDesc}>Furniture Details</Text>
               <View style={styles.detailsFormContainer}>
                  <Formik
                     initialValues={{
                        bunk_bed_wooden_condition: "",
                        bunk_bed_wooden_quantity: "",
                        study_table_wooden_condition: "",
                        study_table_wooden_quantity: "",
                        chair_wooden_condition: "",
                        chair_wooden_quantity: "",
                        cloth_rack_wooden_condition: "",
                        cloth_rack_wooden_quantity: "",
                        wall_mounted_light_condition: "",
                        wall_mounted_light_quantity: "",
                        balcony_light_condition: "",
                        balcony_light_quantity: "",
                        socket_condition: "",
                        socket_quantity: "",
                        switch_condition: "",
                        switch_quantity: "",
                        main_door_key_condition: "",
                        main_door_key_quantity: "",
                        window_door_key_condition: "",
                        window_door_key_quantity: "",
                        mattress_condition: "",
                        mattress_quantity: "",

                        comments: "",
                     }}
                     validationSchema={roomChecklistFormSchema}
                     onSubmit={(values, errors) =>
                        handleRoomChecklistFormSubmission(values, errors)
                     }
                  >
                     {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                     }) => {
                        return (
                           <View style={styles.form}>
                              <ItemConditionDetails
                                 valueCondition={
                                    values.bunk_bed_wooden_condition
                                 }
                                 valueQuantity={values.bunk_bed_wooden_quantity}
                                 errorCondition={
                                    errors.bunk_bed_wooden_condition
                                 }
                                 errorQuantity={errors.bunk_bed_wooden_quantity}
                                 touchedCondition={
                                    touched.bunk_bed_wooden_condition
                                 }
                                 touchedQuantity={
                                    touched.bunk_bed_wooden_quantity
                                 }
                                 description={roomItems[0].item_name}
                                 setShowCondition={
                                    setShowBunkBedWoodenCondition
                                 }
                                 showCondition={showBunkBedWoodenCondition}
                                 handleBlur={handleBlur}
                                 handleChange={handleChange}
                                 valueC={"bunk_bed_wooden_condition"}
                                 valueQ={"bunk_bed_wooden_quantity"}
                              />
                              <ItemConditionDetails
                                 valueCondition={
                                    values.study_table_wooden_condition
                                 }
                                 valueQuantity={
                                    values.study_table_wooden_quantity
                                 }
                                 errorCondition={
                                    errors.study_table_wooden_condition
                                 }
                                 errorQuantity={
                                    errors.study_table_wooden_quantity
                                 }
                                 touchedCondition={
                                    touched.study_table_wooden_condition
                                 }
                                 touchedQuantity={
                                    touched.study_table_wooden_quantity
                                 }
                                 description={roomItems[1].item_name}
                                 setShowCondition={
                                    setShowStudyTableWoodenCondition
                                 }
                                 showCondition={showStudyTableWoodenCondition}
                                 handleBlur={handleBlur}
                                 handleChange={handleChange}
                                 valueC={"study_table_wooden_condition"}
                                 valueQ={"study_table_wooden_quantity"}
                              />

                              <ItemConditionDetails
                                 valueCondition={values.chair_wooden_condition}
                                 valueQuantity={values.chair_wooden_quantity}
                                 errorCondition={errors.chair_wooden_condition}
                                 errorQuantity={errors.chair_wooden_quantity}
                                 touchedCondition={
                                    touched.chair_wooden_condition
                                 }
                                 touchedQuantity={touched.chair_wooden_quantity}
                                 description={roomItems[2].item_name}
                                 setShowCondition={setShowChairWoodenCondition}
                                 showCondition={showChairWoodenCondition}
                                 handleBlur={handleBlur}
                                 handleChange={handleChange}
                                 valueC={"chair_wooden_condition"}
                                 valueQ={"chair_wooden_quantity"}
                              />
                              <ItemConditionDetails
                                 valueCondition={
                                    values.cloth_rack_wooden_condition
                                 }
                                 valueQuantity={
                                    values.cloth_rack_wooden_quantity
                                 }
                                 errorCondition={
                                    errors.cloth_rack_wooden_condition
                                 }
                                 errorQuantity={
                                    errors.cloth_rack_wooden_quantity
                                 }
                                 touchedCondition={
                                    touched.cloth_rack_wooden_condition
                                 }
                                 touchedQuantity={
                                    touched.cloth_rack_wooden_quantity
                                 }
                                 description={roomItems[3].item_name}
                                 setShowCondition={
                                    setShowClothRackWoodenCondition
                                 }
                                 showCondition={showClothRackWoodenCondition}
                                 handleBlur={handleBlur}
                                 handleChange={handleChange}
                                 valueC={"cloth_rack_wooden_condition"}
                                 valueQ={"cloth_rack_wooden_quantity"}
                              />
                              <ItemConditionDetails
                                 valueCondition={
                                    values.wall_mounted_light_condition
                                 }
                                 valueQuantity={
                                    values.wall_mounted_light_quantity
                                 }
                                 errorCondition={
                                    errors.wall_mounted_light_condition
                                 }
                                 errorQuantity={
                                    errors.wall_mounted_light_quantity
                                 }
                                 touchedCondition={
                                    touched.wall_mounted_light_condition
                                 }
                                 touchedQuantity={
                                    touched.wall_mounted_light_quantity
                                 }
                                 description={roomItems[4].item_name}
                                 setShowCondition={
                                    setShowWallMountedLightCondition
                                 }
                                 showCondition={showWallMountedLightCondition}
                                 handleBlur={handleBlur}
                                 handleChange={handleChange}
                                 valueC={"wall_mounted_light_condition"}
                                 valueQ={"wall_mounted_light_quantity"}
                              />
                              <ItemConditionDetails
                                 valueCondition={values.balcony_light_condition}
                                 valueQuantity={values.balcony_light_quantity}
                                 errorCondition={errors.balcony_light_condition}
                                 errorQuantity={errors.balcony_light_quantity}
                                 touchedCondition={
                                    touched.balcony_light_condition
                                 }
                                 touchedQuantity={
                                    touched.balcony_light_quantity
                                 }
                                 description={roomItems[5].item_name}
                                 setShowCondition={setShowBalconyLightCondition}
                                 showCondition={showBalconyLightCondition}
                                 handleBlur={handleBlur}
                                 handleChange={handleChange}
                                 valueC={"balcony_light_condition"}
                                 valueQ={"balcony_light_quantity"}
                              />
                              <ItemConditionDetails
                                 valueCondition={values.socket_condition}
                                 valueQuantity={values.socket_quantity}
                                 errorCondition={errors.socket_condition}
                                 errorQuantity={errors.socket_quantity}
                                 touchedCondition={touched.socket_condition}
                                 touchedQuantity={touched.socket_quantity}
                                 description={roomItems[6].item_name}
                                 setShowCondition={setShowSocketCondition}
                                 showCondition={showSocketCondition}
                                 handleBlur={handleBlur}
                                 handleChange={handleChange}
                                 valueC={"socket_condition"}
                                 valueQ={"socket_quantity"}
                              />
                              <ItemConditionDetails
                                 valueCondition={values.switch_condition}
                                 valueQuantity={values.switch_quantity}
                                 errorCondition={errors.switch_condition}
                                 errorQuantity={errors.switch_quantity}
                                 touchedCondition={touched.switch_condition}
                                 touchedQuantity={touched.switch_quantity}
                                 description={roomItems[7].item_name}
                                 setShowCondition={setShowSwitchCondition}
                                 showCondition={showSwitchCondition}
                                 handleBlur={handleBlur}
                                 handleChange={handleChange}
                                 valueC={"switch_condition"}
                                 valueQ={"switch_quantity"}
                              />
                              <ItemConditionDetails
                                 valueCondition={values.main_door_key_condition}
                                 valueQuantity={values.main_door_key_quantity}
                                 errorCondition={errors.main_door_key_condition}
                                 errorQuantity={errors.main_door_key_quantity}
                                 touchedCondition={
                                    touched.main_door_key_condition
                                 }
                                 touchedQuantity={
                                    touched.main_door_key_quantity
                                 }
                                 description={roomItems[8].item_name}
                                 setShowCondition={setShowMainDoorKeyCondition}
                                 showCondition={showMainDoorKeyCondition}
                                 handleBlur={handleBlur}
                                 handleChange={handleChange}
                                 valueC={"main_door_key_condition"}
                                 valueQ={"main_door_key_quantity"}
                              />
                              <ItemConditionDetails
                                 valueCondition={
                                    values.window_door_key_condition
                                 }
                                 valueQuantity={values.window_door_key_quantity}
                                 errorCondition={
                                    errors.window_door_key_condition
                                 }
                                 errorQuantity={errors.window_door_key_quantity}
                                 touchedCondition={
                                    touched.window_door_key_condition
                                 }
                                 touchedQuantity={
                                    touched.window_door_key_quantity
                                 }
                                 description={roomItems[9].item_name}
                                 setShowCondition={
                                    setShowWindowDoorKeyCondition
                                 }
                                 showCondition={showWindowDoorKeyCondition}
                                 handleBlur={handleBlur}
                                 handleChange={handleChange}
                                 valueC={"window_door_key_condition"}
                                 valueQ={"window_door_key_quantity"}
                              />
                              <ItemConditionDetails
                                 valueCondition={values.mattress_condition}
                                 valueQuantity={values.mattress_quantity}
                                 errorCondition={errors.mattress_condition}
                                 errorQuantity={errors.mattress_quantity}
                                 touchedCondition={touched.mattress_condition}
                                 touchedQuantity={touched.mattress_quantity}
                                 description={roomItems[10].item_name}
                                 setShowCondition={setShowMattressCondition}
                                 showCondition={showMattressCondition}
                                 handleBlur={handleBlur}
                                 handleChange={handleChange}
                                 valueC={"mattress_condition"}
                                 valueQ={"mattress_quantity"}
                              />

                              <TextInput
                                 mode="outlined"
                                 label={"Other Conditions or Comments"}
                                 onChangeText={handleChange("comments")}
                                 onBlur={handleBlur("comments")}
                                 multiline
                                 numberOfLines={6}
                                 value={values.comments}
                                 selectionColor={lightGray}
                                 cursorColor={primaryBlue}
                                 outlineColor={lightGray}
                                 activeOutlineColor={primaryBlue}
                                 outlineStyle={{ borderRadius: 4 }}
                                 style={{ marginTop: 15 }}
                              />
                              {errors.comments && touched.comments ? (
                                 <Text style={styles.errorText}>
                                    {errors.comments}
                                 </Text>
                              ) : null}

                              <View style={styles.actionButtonContainer}>
                                 <Button
                                    mode="contained"
                                    style={{
                                       width: "100%",
                                       borderRadius: 8,
                                       borderColor: primaryBlue,
                                       marginTop: 15,
                                    }}
                                    buttonColor={primaryBlue}
                                    labelStyle={{
                                       fontFamily: "fontRegular",
                                       fontSize: 16,
                                       color: white,
                                    }}
                                    onPress={handleSubmit}
                                 >
                                    Submit
                                 </Button>
                              </View>
                           </View>
                        );
                     }}
                  </Formik>
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
   detailsFormContainer: {
      width: "100%",
   },
   formContainer: {
      width: "100%",
   },
   form: {
      width: "100%",
   },
   dropdownContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 5,
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

export default RoomChecklistDetails;
