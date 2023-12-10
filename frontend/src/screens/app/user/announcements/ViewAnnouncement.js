import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
   black,
   lightGray,
   primaryBlue,
   textDarkGray,
   textLightGray,
   white,
} from "../../../../constants/Colors";
import { Button } from "react-native-paper";

const ViewAnnouncement = ({ navigation, route }) => {
   const { announcement } = route.params;

   return (
      <ScrollView
         style={{ flex: 1 }}
         contentContainerStyle={{ backgroundColor: white, minHeight: "100%" }}
         showsVerticalScrollIndicator={false}
      >
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <Text style={styles.announcementTitle}>
                  {announcement.title}
               </Text>
               <View
                  style={{
                     width: "100%",
                     height: 1,
                     backgroundColor: textLightGray,
                     marginVertical: 15,
                  }}
               ></View>
               <Text style={styles.announcementDescription}>
                  {announcement.description}
               </Text>
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
   announcementTitle: {
      marginTop: 15,
      fontFamily: "fontBold",
      fontSize: 18,
      width: "100%",
   },
   announcementDescription: {
      width: "100%",
      fontFamily: "fontRegular",
      fontSize: 16,
   },
});

export default ViewAnnouncement;
