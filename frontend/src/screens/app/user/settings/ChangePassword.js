import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
   black,
   lightGray,
   primaryBlue,
   textLightGray,
   white,
} from "../../../../constants/Colors";
import { Button, TextInput } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";

const ChangePassword = ({ navigation }) => {
   const [showOldPassword, setShowOldPassword] = useState(false);
   const [showNewPassword, setShowNewPassword] = useState(false);
   const [showReNewPassword, setShowReNewPassword] = useState(false);

   const handleChangePassword = () => {
      //handle change password
      //   console.log("handle change pressed");
   };

   const passwordChangeValidationSchema = Yup.object().shape({
      oldPassword: Yup.string().required("Required!"),
      newPassword: Yup.string().required("Required!"),
      reNewPassword: Yup.string().required("Required!"),
   });

   return (
      <ScrollView
         style={{ flex: 1 }}
         contentContainerStyle={{ backgroundColor: white, minHeight: "100%" }}
         showsVerticalScrollIndicator={false}
      >
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <Text style={styles.title}>Change Password</Text>
               <Formik
                  initialValues={{
                     oldPassword: "",
                     newPassword: "",
                     reNewPassword: "",
                  }}
                  onSubmit={() => handleChangePassword}
                  validationSchema={passwordChangeValidationSchema}
               >
                  {({ handleBlur, handleChange, handleSubmit, values }) => {
                     return (
                        <View style={styles.formContainer}>
                           <TextInput
                              mode="outlined"
                              label={"Old Password"}
                              onChangeText={handleChange("oldPassword")}
                              selectionColor={lightGray}
                              cursorColor={primaryBlue}
                              outlineColor={lightGray}
                              activeOutlineColor={primaryBlue}
                              outlineStyle={{ borderRadius: 4 }}
                              secureTextEntry={!showOldPassword}
                              right={
                                 <TextInput.Icon
                                    icon={showOldPassword ? "eye-off" : "eye"}
                                    iconColor={textLightGray}
                                    size={20}
                                    onPress={() => {
                                       setShowOldPassword(!showOldPassword);
                                    }}
                                 />
                              }
                              style={{ width: "100%" }}
                           />
                           <TextInput
                              mode="outlined"
                              label={"New Password"}
                              onChangeText={handleChange("newPassword")}
                              selectionColor={lightGray}
                              cursorColor={primaryBlue}
                              outlineColor={lightGray}
                              activeOutlineColor={primaryBlue}
                              outlineStyle={{ borderRadius: 4 }}
                              secureTextEntry={!showNewPassword}
                              right={
                                 <TextInput.Icon
                                    icon={showNewPassword ? "eye-off" : "eye"}
                                    iconColor={textLightGray}
                                    size={20}
                                    onPress={() => {
                                       setShowNewPassword(!showNewPassword);
                                    }}
                                 />
                              }
                              style={{ marginTop: 15, width: "100%" }}
                           />
                           <TextInput
                              mode="outlined"
                              label={"Re-Type New Password"}
                              onChangeText={handleChange("reNewPassword")}
                              selectionColor={lightGray}
                              cursorColor={primaryBlue}
                              outlineColor={lightGray}
                              activeOutlineColor={primaryBlue}
                              outlineStyle={{ borderRadius: 4 }}
                              secureTextEntry={!showReNewPassword}
                              right={
                                 <TextInput.Icon
                                    icon={showReNewPassword ? "eye-off" : "eye"}
                                    iconColor={textLightGray}
                                    size={20}
                                    onPress={() => {
                                       setShowReNewPassword(!showReNewPassword);
                                    }}
                                 />
                              }
                              style={{
                                 marginTop: 15,
                                 width: "100%",
                              }}
                           />
                           <Button
                              mode="contained"
                              labelStyle={{
                                 fontFamily: "fontRegular",
                                 fontSize: 16,
                              }}
                              buttonColor={primaryBlue}
                              style={styles.submitButton}
                              onPress={handleSubmit}
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
      width: "100%",
      fontFamily: "fontBold",
      fontSize: 18,
      marginVertical: 15,
   },
   formContainer: {
      width: "100%",
   },
   submitButton: {
      marginTop: 20,
      borderRadius: 8,
   },
});

export default ChangePassword;
