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

const Notifications = ({ navigation }) => {
   const [refreshing, setRefreshing] = useState(false);

   const data = require("../../../data/dummyData.json");

   const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
         setRefreshing(false);
      }, 1500);
   }, []);

   return (
      <View style={{ flex: 1, backgroundColor: white, minHeight: "100%" }}>
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <Text>UserNotifications</Text>
            </View>
         </View>
      </View>
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
   listContainer: {
      flex: 1,
      width: "100%",
   },
   listStyles: {
      flex: 1,
      marginTop: 10,
   },
   imageContainer: {
      backgroundColor: primaryBlue,
      width: 50,
      height: 50,
      borderRadius: 50,
      alignSelf: "center",
   },
});

export default Notifications;
