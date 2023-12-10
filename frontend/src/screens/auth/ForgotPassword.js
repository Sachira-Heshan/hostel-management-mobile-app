import { useState, useContext } from "react";
import { View, Text, Image, StyleSheet, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput, Checkbox, IconButton } from "react-native-paper";

import logo from "../../../assets/images/logo.png";
import {
   primaryBlue,
   textLightGray,
   lightGray,
   textDarkGray,
   white,
   darkRed,
} from "../../constants/Colors";
import { Formik } from "formik";
import * as Yup from "yup";

const ForgotPassword = ({ navigation }) => {
   const loginSchema = Yup.object({
      email: Yup.string()
         .email("Enter a valid email!")
         .required("Email is required!"),
   });

   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
               <Image source={logo} resizeMode="contain" style={styles.image} />
            </View>
            <Text style={styles.title}>Forgot Password</Text>
            <View style={styles.forgotPasswordForm}>
               <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={loginSchema}
                  onSubmit={(values) => handleLogin(values)}
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
                        <View>
                           <View>
                              <TextInput
                                 mode="outlined"
                                 label={"Email"}
                                 onChangeText={handleChange("email")}
                                 onBlur={handleBlur("email")}
                                 value={values.email}
                                 selectionColor={lightGray}
                                 cursorColor={primaryBlue}
                                 outlineColor={lightGray}
                                 activeOutlineColor={primaryBlue}
                                 outlineStyle={{ borderRadius: 4 }}
                              />
                              {errors.email && touched.email ? (
                                 <Text style={styles.errorText}>
                                    {errors.email}
                                 </Text>
                              ) : null}

                              <Button
                                 mode="contained"
                                 style={{
                                    width: "100%",
                                    borderRadius: 8,
                                    marginTop: 10,
                                 }}
                                 buttonColor={primaryBlue}
                                 labelStyle={{
                                    fontFamily: "fontRegular",
                                    fontSize: 16,
                                 }}
                                 onPress={handleSubmit}
                                 disabled={errors.email ? true : false}
                              >
                                 Send Verification Code
                              </Button>
                           </View>
                           <View
                              style={{
                                 flexDirection: "row",
                                 alignItems: "center",
                                 justifyContent: "center",
                              }}
                           >
                              <Text
                                 style={{
                                    fontFamily: "fontRegular",
                                    fontSize: 16,
                                    color: textLightGray,
                                 }}
                              >
                                 Don't have an account?{" "}
                              </Text>
                              <Button
                                 mode="text"
                                 textColor={primaryBlue}
                                 labelStyle={{
                                    textDecorationLine: "underline",
                                    textDecorationStyle: "solid",
                                    fontFamily: "fontRegular",
                                    fontSize: 16,
                                 }}
                                 onPress={() => {
                                    navigation.navigate("SignUp");
                                 }}
                              >
                                 Sign up
                              </Button>
                           </View>
                        </View>
                     );
                  }}
               </Formik>
            </View>
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: white,
   },
   contentContainer: {
      width: "85%",
      alignItems: "center",
      justifyContent: "center",
   },
   imageContainer: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
   },
   image: {
      height: 150,
   },
   title: {
      fontFamily: "fontBold",
      fontSize: 24,
      color: textDarkGray,
      textAlign: "center",
      margin: 15,
   },
   text: {
      fontFamily: "fontRegular",
      fontSize: 16,
      color: textLightGray,
      width: "70%",
      textAlign: "center",
   },
   forgotPasswordForm: {
      marginTop: 15,
      width: "100%",
   },
   errorText: {
      color: darkRed,
      fontFamily: "fontRegular",
      fontSize: 16,
      marginTop: 3,
   },
});

export default ForgotPassword;
