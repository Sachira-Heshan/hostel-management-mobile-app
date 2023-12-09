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
   white,
} from "../../../constants/Colors";
import {
   Button,
   List,
   TouchableRipple,
   TextInput,
   Avatar,
} from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { useCallback, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const Rooms = ({ navigation }) => {
   const [refreshing, setRefreshing] = useState(false);
   const [showFaculty, setShowFaculty] = useState(false);
   const [showBatch, setShowBatch] = useState(false);

   const data = require("../../../data/dummyData.json");

   const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
         setRefreshing(false);
      }, 1500);
   }, []);

   const handleRequestRoom = (values) => {
      //request room logic
      console.log(values);
   };

   const requestRoomSchema = Yup.object({
      faculty: Yup.string(),
      batch: Yup.string(),
      second_member: Yup.string().email("Enter a valid email!"),
      third_member: Yup.string().email("Enter a valid email!"),
      fourth_member: Yup.string().email("Enter a valid email!"),
      reason: Yup.string(),
   });

   return (
      <View style={{ flex: 1, backgroundColor: white, minHeight: "100%" }}>
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <Text style={styles.reqRoomTitle}>Request a Room</Text>
               <View style={styles.formContainer}>
                  <Formik
                     validationSchema={requestRoomSchema}
                     initialValues={{
                        faculty: "",
                        batch: "",
                        second_member: "",
                        third_member: "",
                        fourth_member: "",
                     }}
                     onSubmit={(values) => handleRequestRoom(values)}
                  >
                     {({
                        handleChange,
                        handleSubmit,
                        handleBlur,
                        values,
                        errors,
                        touched,
                     }) => {
                        return (
                           <View style={styles.form}>
                              <DropDown
                                 mode="outlined"
                                 label="Faculty"
                                 visible={showFaculty}
                                 showDropDown={() => setShowFaculty(true)}
                                 onDismiss={() => setShowFaculty(false)}
                                 list={[
                                    {
                                       label: "Engineering",
                                       value: "engineering",
                                    },
                                    {
                                       label: "Technology",
                                       value: "technology",
                                    },
                                    {
                                       label: "Agriculture",
                                       value: "agriculture",
                                    },
                                 ]}
                                 value={values.faculty}
                                 onBlur={handleBlur("faculty")}
                                 setValue={handleChange("faculty")}
                                 activeColor={primaryBlue}
                                 inputProps={{
                                    outlineColor: lightGray,
                                    right: (
                                       <TextInput.Icon icon={"chevron-down"} />
                                    ),
                                 }}
                              />
                              {errors.faculty && touched.faculty ? (
                                 <Text style={styles.errorText}>
                                    {errors.faculty}
                                 </Text>
                              ) : null}
                              <View style={{ marginTop: 8 }}>
                                 <DropDown
                                    mode="outlined"
                                    label="Batch"
                                    visible={showBatch}
                                    showDropDown={() => setShowBatch(true)}
                                    onDismiss={() => setShowBatch(false)}
                                    list={[
                                       {
                                          label: "1st Year",
                                          value: "first_year",
                                       },
                                       {
                                          label: "2nd Year",
                                          value: "second_year",
                                       },
                                       {
                                          label: "3rd Year",
                                          value: "third_year",
                                       },
                                       {
                                          label: "4th Year",
                                          value: "fourth_year",
                                       },
                                    ]}
                                    value={values.batch}
                                    onBlur={handleBlur("batch")}
                                    setValue={handleChange("batch")}
                                    activeColor={primaryBlue}
                                    inputProps={{
                                       outlineColor: lightGray,
                                       right: (
                                          <TextInput.Icon
                                             icon={"chevron-down"}
                                          />
                                       ),
                                    }}
                                 />
                                 {errors.batch && touched.batch ? (
                                    <Text style={styles.errorText}>
                                       {errors.batch}
                                    </Text>
                                 ) : null}
                              </View>
                              <TextInput
                                 mode="outlined"
                                 label={"Second Member Email"}
                                 onChangeText={handleChange("second_member")}
                                 onBlur={handleBlur("second_member")}
                                 value={values.second_member}
                                 style={{ marginTop: 8 }}
                                 selectionColor={lightGray}
                                 cursorColor={primaryBlue}
                                 outlineColor={lightGray}
                                 activeOutlineColor={primaryBlue}
                                 outlineStyle={{ borderRadius: 4 }}
                              />
                              {errors.second_member && touched.second_member ? (
                                 <Text style={styles.errorText}>
                                    {errors.second_member}
                                 </Text>
                              ) : null}
                              <TextInput
                                 mode="outlined"
                                 label={"Third Member Email"}
                                 onChangeText={handleChange("third_member")}
                                 onBlur={handleBlur("third_member")}
                                 value={values.third_member}
                                 style={{ marginTop: 8 }}
                                 selectionColor={lightGray}
                                 cursorColor={primaryBlue}
                                 outlineColor={lightGray}
                                 activeOutlineColor={primaryBlue}
                                 outlineStyle={{ borderRadius: 4 }}
                              />
                              {errors.third_member && touched.third_member ? (
                                 <Text style={styles.errorText}>
                                    {errors.third_member}
                                 </Text>
                              ) : null}
                              <TextInput
                                 mode="outlined"
                                 label={"Fourth Member Email"}
                                 onChangeText={handleChange("fourth_member")}
                                 onBlur={handleBlur("fourth_member")}
                                 value={values.fourth_member}
                                 style={{ marginTop: 8 }}
                                 selectionColor={lightGray}
                                 cursorColor={primaryBlue}
                                 outlineColor={lightGray}
                                 activeOutlineColor={primaryBlue}
                                 outlineStyle={{ borderRadius: 4 }}
                              />
                              {errors.fourth_member && touched.fourth_member ? (
                                 <Text style={styles.errorText}>
                                    {errors.fourth_member}
                                 </Text>
                              ) : null}
                              <TextInput
                                 mode="outlined"
                                 label={"Reason"}
                                 onChangeText={handleChange("reason")}
                                 onBlur={handleBlur("reason")}
                                 value={values.reason}
                                 multiline
                                 numberOfLines={6}
                                 style={{ marginTop: 8 }}
                                 selectionColor={lightGray}
                                 cursorColor={primaryBlue}
                                 outlineColor={lightGray}
                                 activeOutlineColor={primaryBlue}
                                 outlineStyle={{ borderRadius: 4 }}
                              />
                              {errors.reason && touched.reason ? (
                                 <Text style={styles.errorText}>
                                    {errors.reason}
                                 </Text>
                              ) : null}
                              <Button
                                 mode="contained"
                                 style={{
                                    width: "100%",
                                    borderRadius: 9,
                                    marginTop: 10,
                                 }}
                                 buttonColor={primaryBlue}
                                 labelStyle={{
                                    fontFamily: "fontRegular",
                                    fontSize: 16,
                                 }}
                                 onPress={handleSubmit}
                                 disabled={
                                    errors.second_member ||
                                    errors.third_member ||
                                    errors.fourth_member
                                       ? true
                                       : false
                                 }
                              >
                                 Request Room
                              </Button>
                           </View>
                        );
                     }}
                  </Formik>
               </View>
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
   reqRoomTitle: {
      marginVertical: 8,
      fontFamily: "fontBold",
      fontSize: 18,
   },
   formContainer: {
      width: "90%",
   },
   form: {
      width: "100%",
   },
   errorText: {
      color: darkRed,
      fontFamily: "fontRegular",
      fontSize: 16,
      marginTop: 3,
   },
});

export default Rooms;
