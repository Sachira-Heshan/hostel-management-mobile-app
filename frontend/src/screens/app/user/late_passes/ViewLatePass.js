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

const ViewLatePass = ({ navigation, route }) => {
   const handleProfileEdit = () => {
      //handle profile edit
   };

   const { userInfo } = useContext(AuthContext);

   const { late_pass } = route.params;

   return (
      <ScrollView
         style={{ flex: 1 }}
         contentContainerStyle={{ backgroundColor: white, minHeight: "100%" }}
         showsVerticalScrollIndicator={false}
      >
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <Text
                  style={{
                     fontFamily: "fontBold",
                     fontSize: 20,
                     width: "100%",
                     textAlign: "center",
                     marginTop: 5,
                  }}
               >
                  Late Pass Details
               </Text>
               <View style={styles.detailContainer}>
                  <Text style={styles.detailTitle}>Name</Text>
                  <Text style={styles.detailValue}>{late_pass.name}</Text>
               </View>
               <View style={styles.detailContainer}>
                  <Text style={styles.detailTitle}>Registration Number</Text>
                  <Text style={styles.detailValue}>
                     {late_pass.registration_number}
                  </Text>
               </View>
               <View style={styles.detailContainer}>
                  <Text style={styles.detailTitle}>Reason</Text>
                  <Text style={styles.detailValue}>{late_pass.reason}</Text>
               </View>
               <View style={styles.detailContainer}>
                  <Text style={styles.detailTitle}>Departure</Text>
                  <Text
                     style={styles.detailValue}
                  >{`${late_pass.departure_date} @ ${late_pass.departure_time}`}</Text>
               </View>
               <View style={styles.detailContainer}>
                  <Text style={styles.detailTitle}>Arrival</Text>
                  <Text
                     style={styles.detailValue}
                  >{`${late_pass.arrival_date} @ ${late_pass.arrival_time}`}</Text>
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

export default ViewLatePass;
