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
import { Button, List, TouchableRipple, Avatar } from "react-native-paper";
import { useCallback, useState } from "react";

const HostelRules = ({ navigation }) => {
   const [refreshing, setRefreshing] = useState(false);

   const data = require("../../../data/dummyData.json");

   const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
         setRefreshing(false);
      }, 1500);
   }, []);

   return (
      <ScrollView>
         <View style={{ flex: 1, backgroundColor: white, minHeight: "100%" }}>
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
                     Hostel Rules
                  </Text>
                  <Text style={styles.ruleDetails}>
                     Welcome to Hostel Hive! To ensure a safe and enjoyable
                     living environment for all residents, please adhere to the
                     following rules and regulations
                  </Text>
                  <Text style={styles.ruleTitle}>
                     1. General Conduct Respect Others:{" "}
                  </Text>
                  <Text style={styles.ruleDetails}>
                     Treat fellow residents, staff, and guests with courtesy and
                     respect. Any form of harassment or discrimination will not
                     be tolerated. Quiet Hours: Maintain a quiet atmosphere
                     during designated quiet hours to ensure a conducive
                     environment for studying and rest. Guest Policy: Visitors
                     are allowed only during specified hours. All guests must
                     register at the front desk and adhere to hostel rules.
                  </Text>
                  <Text style={styles.ruleTitle}>
                     2. Room Regulations Cleanliness:{" "}
                  </Text>
                  <Text style={styles.ruleDetails}>
                     Keep your room tidy and organized. Regular room inspections
                     will be conducted to ensure compliance. Prohibited Items:
                     Do not bring prohibited items such as alcohol, illegal
                     substances, or any items that may pose a safety risk.
                     Decorations: Personalize your space with decorations, but
                     ensure they comply with safety regulations and do not
                     damage the property.
                  </Text>
                  <Text style={styles.ruleTitle}>
                     3. Safety and Security Emergency Procedures:{" "}
                  </Text>
                  <Text style={styles.ruleDetails}>
                     Familiarize yourself with emergency evacuation procedures
                     and the location of emergency exits. In case of an
                     emergency, follow instructions from hostel staff. Lock and
                     Key: Keep your room locked at all times when not inside.
                     Report lost keys or suspicious activity immediately to the
                     front desk. Restricted Areas: Access to certain areas may
                     be restricted. Do not attempt to enter unauthorized areas
                     for safety reasons.
                  </Text>
                  <Text style={styles.ruleTitle}>
                     4. Community Spaces Kitchen Etiquette:{" "}
                  </Text>
                  <Text style={styles.ruleDetails}>
                     Clean up after using the kitchen facilities. Label and
                     store your food appropriately, and be mindful of others
                     sharing the communal space. Laundry Facilities: Use the
                     laundry facilities during designated hours. Remove your
                     clothes promptly to allow others access to the machines.
                     Recreational Spaces: Respect the schedule for common area
                     use. Be considerate of others who may want to use these
                     spaces.{" "}
                  </Text>
                  <Text style={styles.ruleTitle}>
                     5. Penalties for Violations:{" "}
                  </Text>
                  <Text style={styles.ruleDetails}>
                     Violations of hostel rules may result in warnings, fines,
                     or expulsion from the hostel. Repeat offenses will be dealt
                     with more severely. It is your responsibility to be aware
                     of and adhere to these rules. Thank you for your
                     cooperation! Enjoy and stay safe.
                  </Text>
                  <Text></Text>
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
      width: "100%",
      alignItems: "center",
   },
   title: {
      width: "90%",
      fontFamily: "Roboto Regular",
      fontSize: 16,
      marginVertical: 10,
   },
   ruleTitle: {
      fontFamily: "fontBold",
      fontSize: 16,
   },
   ruleDetails: {
      fontFamily: "fontRegular",
      fontSize: 16,
      paddingHorizontal: 25,
      paddingVertical: 8,
      textAlign: "justify",
   },
});

export default HostelRules;
