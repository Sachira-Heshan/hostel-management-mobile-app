import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
   lightGray,
   primaryBlue,
   textLightGray,
   white,
} from "../../../../constants/Colors";
import DropDown from "react-native-paper-dropdown";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, TextInput } from "react-native-paper";

const VacateRoom = ({ navigation }) => {
   const [showBlock, setShowBlock] = useState(false);
   const [showFloor, setShowFloor] = useState(false);
   const [showRoomNumber, setShowRoomNumber] = useState(false);

   const handleRoomVacate = (values) => {
      //room vacate logic
      console.log(values);
   };

   const roomVacateSchema = Yup.object({
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
               <Text style={styles.vacateRoomTitle}>Vacate Room</Text>
               <Formik
                  initialValues={{
                     block: "",
                     floor: "",
                     roomNumber: "",
                     comments: "",
                  }}
                  onSubmit={(values) => handleRoomVacate(values)}
                  validationSchema={roomVacateSchema}
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

                           <View style={styles.actionButtonContainer}>
                              <Button
                                 mode="contained"
                                 style={{ width: "100%", borderRadius: 8 }}
                                 buttonColor={primaryBlue}
                                 labelStyle={{
                                    fontFamily: "fontRegular",
                                    fontSize: 16,
                                 }}
                                 onPress={handleSubmit}
                              >
                                 Vacate Room
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
   vacateRoomTitle: {
      width: "100%",
      textAlign: "center",
      marginVertical: 10,
      fontFamily: "fontBold",
      fontSize: 18,
   },
   formContainer: {
      width: "100%",
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

export default VacateRoom;
