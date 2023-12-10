import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
   black,
   darkGreen,
   darkRed,
   lightGray,
   lightGreen,
   primaryBlue,
   white,
} from "../../../../constants/Colors";
import { Button, TouchableRipple } from "react-native-paper";

const ViewPaymentReceipt = ({ navigation, route }) => {
   const { payment_receipt } = route.params;

   return (
      <ScrollView
         style={{ flex: 1 }}
         contentContainerStyle={{ backgroundColor: white, minHeight: "100%" }}
         showsVerticalScrollIndicator={false}
      >
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <Text style={styles.titleText}>Receipt Details</Text>
               <View style={styles.detailContainer}>
                  <Text style={styles.detailTitle}>Full Name</Text>
                  <Text style={styles.detailValue}>{payment_receipt.name}</Text>
               </View>
               <View style={styles.detailContainer}>
                  <Text style={styles.detailTitle}>Registration Number</Text>
                  <Text style={styles.detailValue}>
                     {payment_receipt.registration_number}
                  </Text>
               </View>
               <View style={styles.detailContainer}>
                  <Text style={styles.detailTitle}>Reason</Text>
                  <Text style={styles.detailValue}>
                     {payment_receipt.reason}
                  </Text>
               </View>
               <View style={styles.detailContainer}>
                  <Text style={styles.detailTitle}>Amount</Text>
                  <Text style={styles.detailValue}>
                     {payment_receipt.amount}
                  </Text>
               </View>
               <TouchableRipple style={styles.uploadImage}>
                  <View style={{ flex: 1 }}></View>
               </TouchableRipple>
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

export default ViewPaymentReceipt;
