import { ScrollView } from "react-native-gesture-handler";

import { useState } from "react";
import { View, Text, Image, StyleSheet, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";

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
import axios from "axios";
import { baseUrl } from "../../config/BaseUrl";

const SignUp = ({ navigation }) => {
   const [showMemberType, setShowMemberType] = useState(false);
   const [showGender, setShowGender] = useState(false);
   const [showPassword, setShowPassword] = useState(false);

   const showToast = () => {
      ToastAndroid.show("User registered successfully!", ToastAndroid.SHORT);
   };

   const handleSignUp = (values) => {
      axios
         .post(`${baseUrl}auth/register`, {
            email: values.email,
            full_name: values.name,
            password: values.password,
            member_type: values.memberType,
            mobile_no: values.mobileNo,
            registration_no: values.regNo,
            gender: values.gender,
         })
         .then((res) => {
            console.log(res.data);
            showToast();
            navigation.navigate("Login");
         })
         .catch((e) => {
            console.log(e);
         });
   };

   const regNoFormat = /^(\d{4})\/[A-Za-z]{1,2}\/\d{3}$/;

   const signUpSchema = Yup.object({
      email: Yup.string()
         .email("Enter a valid email!")
         .required("Email is required!"),
      name: Yup.string().required("Name is required!"),
      mobileNo: Yup.string()
         .length(10, "Enter a valid phone number!")
         .required("Mobile No is required!"),
      memberType: Yup.string().required("Member type is required!"),
      regNo: Yup.string().matches(regNoFormat, "Invalid format!"),
      gender: Yup.string().required("Gender is required!"),
      password: Yup.string().required("Password is required!"),
   });

   return (
      <SafeAreaView style={styles.mainContainer}>
         <ScrollView
            style={styles.container}
            contentContainerStyle={{
               alignItems: "center",
               justifyContent: "center",
            }}
            showsVerticalScrollIndicator={false}
         >
            <View style={styles.contentContainer}>
               <View style={styles.imageContainer}>
                  <Image
                     source={logo}
                     resizeMode="contain"
                     style={styles.image}
                  />
               </View>
               <Text style={styles.title}>Sign Up</Text>
               <Text style={styles.text}>
                  Welcome to Hostel Hive - Hostel Management Application
               </Text>
               <View style={styles.signUpForm}>
                  <Formik
                     initialValues={{
                        email: "",
                        name: "",
                        mobileNo: "",
                        memberType: "",
                        regNo: "",
                        gender: "",
                        password: "",
                     }}
                     validationSchema={signUpSchema}
                     onSubmit={(values) => handleSignUp(values)}
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
                                 <TextInput
                                    mode="outlined"
                                    label={"Name"}
                                    onChangeText={handleChange("name")}
                                    onBlur={handleBlur("name")}
                                    value={values.name}
                                    selectionColor={lightGray}
                                    cursorColor={primaryBlue}
                                    outlineColor={lightGray}
                                    activeOutlineColor={primaryBlue}
                                    outlineStyle={{ borderRadius: 4 }}
                                    style={{ marginVertical: 10 }}
                                 />
                                 {errors.name && touched.name ? (
                                    <Text style={styles.errorText}>
                                       {errors.name}
                                    </Text>
                                 ) : null}
                                 <TextInput
                                    mode="outlined"
                                    label={"Mobile Number"}
                                    onChangeText={handleChange("mobileNo")}
                                    onBlur={handleBlur("mobileNo")}
                                    value={values.mobileNo}
                                    selectionColor={lightGray}
                                    cursorColor={primaryBlue}
                                    outlineColor={lightGray}
                                    activeOutlineColor={primaryBlue}
                                    outlineStyle={{ borderRadius: 4 }}
                                    style={{ marginBottom: 10 }}
                                 />
                                 {errors.mobileNo && touched.mobileNo ? (
                                    <Text style={styles.errorText}>
                                       {errors.mobileNo}
                                    </Text>
                                 ) : null}
                                 <DropDown
                                    mode="outlined"
                                    label="Member Type"
                                    visible={showMemberType}
                                    showDropDown={() => setShowMemberType(true)}
                                    onDismiss={() => setShowMemberType(false)}
                                    list={[
                                       { label: "Student", value: "student" },
                                       {
                                          label: "Academic Staff",
                                          value: "academicStaff",
                                       },
                                    ]}
                                    value={values.memberType}
                                    onBlur={handleBlur("memberType")}
                                    setValue={handleChange("memberType")}
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
                                 {errors.memberType && touched.memberType ? (
                                    <Text style={styles.errorText}>
                                       {errors.memberType}
                                    </Text>
                                 ) : null}
                                 {values.memberType === "student" && (
                                    <View>
                                       <TextInput
                                          mode="outlined"
                                          label={"Registration Number"}
                                          onChangeText={handleChange("regNo")}
                                          onBlur={handleBlur("regNo")}
                                          value={values.regNo}
                                          selectionColor={lightGray}
                                          cursorColor={primaryBlue}
                                          outlineColor={lightGray}
                                          activeOutlineColor={primaryBlue}
                                          outlineStyle={{ borderRadius: 4 }}
                                          style={{ marginTop: 10 }}
                                       />
                                       {errors.regNo && touched.regNo ? (
                                          <Text style={styles.errorText}>
                                             {errors.regNo}
                                          </Text>
                                       ) : null}
                                    </View>
                                 )}
                                 <DropDown
                                    mode="outlined"
                                    label="Gender"
                                    visible={showGender}
                                    showDropDown={() => setShowGender(true)}
                                    onDismiss={() => setShowGender(false)}
                                    list={[
                                       { label: "Male", value: "male" },
                                       { label: "Female", value: "female" },
                                       { label: "Other", value: "other" },
                                    ]}
                                    value={values.gender}
                                    onBlur={handleBlur("gender")}
                                    setValue={handleChange("gender")}
                                    activeColor={primaryBlue}
                                    inputProps={{
                                       outlineColor: lightGray,
                                       style: {
                                          marginTop: 10,
                                       },
                                       right: (
                                          <TextInput.Icon
                                             icon={"chevron-down"}
                                          />
                                       ),
                                    }}
                                 />
                                 {errors.gender && touched.gender ? (
                                    <Text style={styles.errorText}>
                                       {errors.gender}
                                    </Text>
                                 ) : null}
                                 <TextInput
                                    mode="outlined"
                                    label={"Password"}
                                    onChangeText={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                    value={values.password}
                                    selectionColor={lightGray}
                                    cursorColor={primaryBlue}
                                    outlineColor={lightGray}
                                    activeOutlineColor={primaryBlue}
                                    outlineStyle={{ borderRadius: 4 }}
                                    secureTextEntry={!showPassword}
                                    right={
                                       <TextInput.Icon
                                          icon={
                                             showPassword ? "eye-off" : "eye"
                                          }
                                          iconColor={textLightGray}
                                          size={20}
                                          onPress={() => {
                                             setShowPassword(!showPassword);
                                          }}
                                       />
                                    }
                                    style={{ marginVertical: 10 }}
                                 />
                                 {errors.password && touched.password ? (
                                    <Text style={styles.errorText}>
                                       {errors.password}
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
                                    labelStyle={{ fontSize: 16 }}
                                    onPress={handleSubmit}
                                 >
                                    Sign Up
                                 </Button>
                              </View>
                           </View>
                        );
                     }}
                  </Formik>
                  <View
                     style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                     }}
                  >
                     <Text
                        style={{
                           fontFamily: "Roboto Regular",
                           fontSize: 16,
                           color: textLightGray,
                        }}
                     >
                        Already have an account?{" "}
                     </Text>
                     <Button
                        mode="text"
                        textColor={primaryBlue}
                        labelStyle={{
                           textDecorationLine: "underline",
                           textDecorationStyle: "solid",
                           fontFamily: "Roboto Regular",
                           fontSize: 16,
                        }}
                        onPress={() => {
                           navigation.navigate("Login");
                        }}
                     >
                        Login
                     </Button>
                  </View>
               </View>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   mainContainer: {
      flex: 1,
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: white,
   },
   container: {
      flex: 1,
      width: "100%",
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
      fontFamily: "Roboto Bold",
      fontSize: 24,
      color: textDarkGray,
      textAlign: "center",
      margin: 5,
   },
   text: {
      fontFamily: "Roboto Regular",
      fontSize: 16,
      color: textLightGray,
      width: "70%",
      textAlign: "center",
   },
   signUpForm: {
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

export default SignUp;
