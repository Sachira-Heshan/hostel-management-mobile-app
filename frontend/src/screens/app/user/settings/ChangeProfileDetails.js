import { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as Yup from "yup";
import {
   black,
   lightGray,
   primaryBlue,
   white,
} from "../../../../constants/Colors";
import { Button, Avatar } from "react-native-paper";

import { AuthContext } from "../../../../context/AuthContext";

const ChangeProfileDetails = ({ navigation }) => {
   const handleProfileEdit = () => {
      //handle profile edit
   };

   const { userInfo } = useContext(AuthContext);

   const profileDetailsValidationSchema = Yup.object().shape({
      fullName: Yup.string().required("Full Name is required!"),
      email: Yup.string()
         .email("Enter a valid email!")
         .required("Email is required!"),
      mobileNo: Yup.string().required("Mobile Number is required!"),
      bio: Yup.string(),
   });

   return (
      <ScrollView
         style={{ flex: 1 }}
         contentContainerStyle={{ backgroundColor: white, minHeight: "100%" }}
         showsVerticalScrollIndicator={false}
      >
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <ImageBackground
                  style={styles.profileTop}
                  source={require("../../../../../assets/images/profile_cover.png")}
                  resizeMode="cover"
                  borderRadius={8}
               >
                  <View style={styles.profileDataContainer}>
                     <View style={styles.profilePictureContainer}>
                        <Avatar.Image
                           size={75}
                           source={require("../../../../../assets/images/profile_pic.png")}
                        />
                        <Avatar.Icon
                           size={24}
                           icon={"camera"}
                           color={white}
                           style={{
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                              marginLeft: "auto",
                              marginTop: -20,
                           }}
                        />
                        <Text
                           style={{
                              fontFamily: "fontBold",
                              textAlign: "center",
                              marginTop: 5,
                           }}
                        >
                           {userInfo.full_name}
                        </Text>
                        <Text
                           style={{
                              fontFamily: "fontRegular",
                              textAlign: "center",
                              marginTop: -5,
                           }}
                        >
                           {userInfo.registration_no}
                        </Text>
                     </View>
                  </View>
               </ImageBackground>
               <View style={styles.profileDetailsContainer}>
                  <Formik
                     initialValues={{
                        fullName: "",
                        email: "",
                        mobileNo: "",
                        bio: "",
                     }}
                     onSubmit={() => handleProfileEdit}
                     validationSchema={profileDetailsValidationSchema}
                  >
                     {({ handleChange, handleBlur, handleSubmit, values }) => {
                        return <View style={styles.formContainer}></View>;
                     }}
                  </Formik>
                  <View style={styles.detailContainer}>
                     <Text style={styles.detailTitle}>Full Name</Text>
                     <Text style={styles.detailValue}>
                        {userInfo.full_name}
                     </Text>
                  </View>
                  <View style={styles.detailContainer}>
                     <Text style={styles.detailTitle}>Email</Text>
                     <Text style={styles.detailValue}>{userInfo.email}</Text>
                  </View>
                  <View style={styles.detailContainer}>
                     <Text style={styles.detailTitle}>Phone Number</Text>
                     <Text style={styles.detailValue}>
                        {userInfo.mobile_no}
                     </Text>
                  </View>
               </View>
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
   profileTop: {
      width: "100%",
      height: 180,
      marginVertical: 15,
      borderRadius: 8,
   },
   profileDataContainer: {
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
   },
   profilePictureContainer: {},
   profileDetailsContainer: {
      width: "100%",
   },
   detailContainer: {
      width: "100%",
      marginVertical: 5,
   },
   detailTitle: {
      fontFamily: "fontBold",
      fontSize: 16,
   },
   detailValue: {
      fontFamily: "fontRegular",
      fontSize: 14,
      paddingHorizontal: 10,
      marginBottom: 5,
      borderBottomColor: primaryBlue,
      borderBottomWidth: 1,
   },
   formContainer: {},
});

export default ChangeProfileDetails;
