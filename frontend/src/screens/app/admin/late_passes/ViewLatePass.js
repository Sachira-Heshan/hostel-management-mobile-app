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
import { Button } from "react-native-paper";

const ViewLatePass = ({ navigation, route }) => {
   const { item } = route.params;

   return (
      <ScrollView
         style={{ flex: 1 }}
         contentContainerStyle={{ backgroundColor: white, minHeight: "100%" }}
         showsVerticalScrollIndicator={false}
      >
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <View style={styles.detailContainer}>
                  <Text style={styles.detailTitle}>Full Name</Text>
                  <Text style={styles.detailValue}>{item.name}</Text>
               </View>
               <View style={styles.detailContainer}>
                  <Text style={styles.detailTitle}>Registration Number</Text>
                  <Text style={styles.detailValue}>
                     {item.registration_number}
                  </Text>
               </View>
               <View style={styles.detailContainer}>
                  <Text style={styles.detailTitle}>Reason</Text>
                  <Text style={styles.detailValue}>{item.reason}</Text>
               </View>
               <View style={styles.detailContainer}>
                  <Text style={styles.detailTitle}>Departure</Text>
                  <Text style={styles.detailValue}>
                     {`${item.departure_date} @ ${item.departure_time}`}
                  </Text>
               </View>
               <View style={styles.detailContainer}>
                  <Text style={styles.detailTitle}>Arrival</Text>
                  <Text style={styles.detailValue}>
                     {`${item.departure_date} @ ${item.departure_time}`}
                  </Text>
               </View>
               <Button
                  style={styles.actionButton}
                  mode="contained"
                  labelStyle={{ fontFamily: "fontRegular", fontSize: 16 }}
                  buttonColor={darkGreen}
               >
                  Accept Request
               </Button>
               <Button
                  style={[styles.actionButton]}
                  mode="contained"
                  labelStyle={{ fontFamily: "fontRegular", fontSize: 16 }}
                  buttonColor={darkRed}
               >
                  Decline Request
               </Button>
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
   actionButton: {
      width: "100%",
      borderRadius: 6,
      marginTop: 10,
   },
});

export default ViewLatePass;
