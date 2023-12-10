import { useState, useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
   black,
   lightGray,
   primaryBlue,
   textDarkGray,
   textLightGray,
   white,
} from "../../../../constants/Colors";
import { Button, TextInput, TouchableRipple } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import { DatePickerInput, TimePickerModal } from "react-native-paper-dates";

const RequestLatePass = ({ navigation }) => {
   const [inputDepartureDate, setInputDepartureDate] = useState(undefined);
   const [inputDepartureTime, setInputDepartureTime] = useState({
      hours: "",
      minutes: "",
   });
   const [inputArrivalDate, setInputArrivalDate] = useState(undefined);
   const [inputArrivalTime, setInputArrivalTime] = useState({
      hours: "",
      minutes: "",
   });

   const [visible, setVisible] = useState(false);
   const onDismiss = useCallback(() => {
      setVisible(false);
   }, [setVisible]);

   const onConfirm = useCallback(
      ({ hours, minutes }) => {
         setVisible(false);
         setInputDepartureTime({ hours, minutes });
         console.log({ hours, minutes });
      },
      [setVisible]
   );

   const [visibleArrivalTime, setVisibleArrivalTime] = useState(false);
   const onDismissArrivalTime = useCallback(() => {
      setVisible(false);
   }, [setVisible]);

   const onConfirmArrivalTime = useCallback(
      ({ hours, minutes }) => {
         setVisible(false);
         setInputArrivalTime({ hours, minutes });
         console.log({ hours, minutes });
      },
      [setVisibleArrivalTime]
   );

   const requestNewLatePassSchema = Yup.object({
      reason: Yup.string().required(),
      departure_date: Yup.date().required("Departure date is required!"),
      departure_time: Yup.string().required("Departure time is required!"),
      arrival_date: Yup.string().required("Arrival date is required!"),
      arrival_time: Yup.string().required("Arrival time is required!"),
   });

   const handleRequestLatePass = (values) => {
      //handle request late pass
      console.log(values);
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
                  onSubmit={(values) => handleRequestLatePass(values)}
                  initialValues={{
                     reason: "",
                     departure_date: new Date(),
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
                                 value={inputDepartureDate}
                                 onChange={(d) => setInputDepartureDate(d)}
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
                           <TextInput
                              mode="outlined"
                              label={"Departure Time"}
                              onChangeText={handleChange("departure_time")}
                              onBlur={handleBlur("departure_time")}
                              value={`${inputDepartureTime.hours}:${inputDepartureTime.minutes}`}
                              selectionColor={lightGray}
                              cursorColor={primaryBlue}
                              outlineColor={lightGray}
                              activeOutlineColor={primaryBlue}
                              outlineStyle={{ borderRadius: 4 }}
                              right={
                                 <TextInput.Icon
                                    icon={"clock-outline"}
                                    iconColor={textDarkGray}
                                    size={20}
                                    onPress={() => setVisible(true)}
                                 />
                              }
                              style={{ marginTop: 10 }}
                           />
                           <TimePickerModal
                              visible={visible}
                              onDismiss={onDismiss}
                              onConfirm={onConfirm}
                              hours={12}
                              minutes={14}
                           />

                           <Text style={styles.infoTextDesc}>Arrival</Text>
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
                                 label="Arrival Date"
                                 value={inputArrivalDate}
                                 onChange={(d) => setInputArrivalDate(d)}
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
                           <TextInput
                              mode="outlined"
                              label={"Arrival Time"}
                              onChangeText={handleChange("arrival_time")}
                              onBlur={handleBlur("arrival_time")}
                              value={`${inputDepartureTime.hours}:${inputDepartureTime.minutes}`}
                              selectionColor={lightGray}
                              cursorColor={primaryBlue}
                              outlineColor={lightGray}
                              activeOutlineColor={primaryBlue}
                              outlineStyle={{ borderRadius: 4 }}
                              right={
                                 <TextInput.Icon
                                    icon={"clock-outline"}
                                    iconColor={textDarkGray}
                                    size={20}
                                 />
                              }
                              style={{ marginTop: 10 }}
                           />
                           <TimePickerModal
                              visible={visibleArrivalTime}
                              onDismiss={onDismissArrivalTime}
                              onConfirm={onConfirmArrivalTime}
                              hours={12}
                              minutes={14}
                           />

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
