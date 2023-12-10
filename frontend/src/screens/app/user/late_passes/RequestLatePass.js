import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
   black,
   lightGray,
   primaryBlue,
   textLightGray,
   white,
} from "../../../../constants/Colors";
import { Button, TextInput, TouchableRipple } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import { DatePickerInput } from "react-native-paper-dates";

const RequestLatePass = ({ navigation }) => {
   const requestNewLatePassSchema = Yup.object({
      reason: Yup.string().required(),
      departure_date: Yup.string().required("Departure date is required!"),
      departure_time: Yup.string().required("Departure time is required!"),
      arrival_date: Yup.string().required("Arrival date is required!"),
      arrival_time: Yup.string().required("Arrival time is required!"),
   });

   const handleAddNewComplain = (values) => {
      //handle add complain
      console.log(values);
   };

   const handleUploadImage = () => {
      //handle upload image
   };

   return (
      <ScrollView
         style={{ flex: 1 }}
         contentContainerStyle={{ backgroundColor: white, minHeight: "100%" }}
         showsVerticalScrollIndicator={false}
      >
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <Text style={styles.titleText}>Request a Late Pass</Text>
               <Formik
                  onSubmit={(values) => handleAddNewComplain(values)}
                  initialValues={{
                     reason: "",
                     departure_date: "",
                     departure_time: "",
                     arrival_date: "",
                     arrival_time: "",
                  }}
                  validationSchema={requestNewLatePassSchema}
               >
                  {({ handleBlur, handleChange, handleSubmit, values }) => {
                     return (
                        <View style={styles.form}>
                           <TextInput
                              mode="outlined"
                              label={"Reason"}
                              placeholder="Going home"
                              onChangeText={handleChange("reason")}
                              onBlur={handleBlur("reason")}
                              selectionColor={lightGray}
                              cursorColor={primaryBlue}
                              outlineColor={lightGray}
                              activeOutlineColor={primaryBlue}
                              outlineStyle={{ borderRadius: 4 }}
                           />
                           <Text style={styles.infoTextDesc}>Departure</Text>
                           <View
                              style={{
                                 width: "100%",
                                 height: 1,
                                 backgroundColor: textLightGray,
                              }}
                           ></View>
                           <View
                              style={{
                                 justifyContent: "center",
                                 flex: 1,
                                 alignItems: "center",
                                 marginTop: 8,
                              }}
                           >
                              <DatePickerInput
                                 locale="en"
                                 label="Departure Date"
                                 value={values.departure_date}
                                 onChange={handleChange("departure_date")}
                                 inputMode="start"
                                 style={{ width: "100%" }}
                                 mode="outlined"
                                 selectionColor={lightGray}
                                 cursorColor={primaryBlue}
                                 outlineColor={lightGray}
                                 activeOutlineColor={primaryBlue}
                                 outlineStyle={{ borderRadius: 4 }}
                              />
                           </View>

                           <Text style={styles.infoTextDesc}>Arrival</Text>
                           <View
                              style={{
                                 width: "100%",
                                 height: 1,
                                 backgroundColor: textLightGray,
                              }}
                           ></View>

                           <Button
                              mode="contained"
                              labelStyle={{
                                 fontFamily: "fontRegular",
                                 fontSize: 16,
                                 paddingVertical: 5,
                              }}
                              buttonColor={primaryBlue}
                              onPress={handleSubmit}
                              style={{ marginTop: 12, borderRadius: 8 }}
                           >
                              Submit
                           </Button>
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
   titleText: {
      fontFamily: "fontBold",
      fontSize: 20,
      marginVertical: 12,
   },
   infoTextDesc: {
      width: "100%",
      fontFamily: "fontMedium",
      fontSize: 16,
      marginTop: 10,
   },
   form: {
      width: "100%",
   },
   uploadImage: {
      height: 150,
      width: "100%",
      marginTop: 15,
      borderRadius: 8,
      borderStyle: "dashed",
      borderWidth: 1,
      borderColor: lightGray,
   },
});

export default RequestLatePass;
