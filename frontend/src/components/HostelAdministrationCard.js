import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";
import { primaryBlue, textLightGray, white } from "../constants/Colors";

const HostelAdministrationCard = ({ position, name, phone_no, email }) => {
   return (
      <View style={styles.cardContainer}>
         <View style={styles.imageContainer}></View>
         <View style={styles.detailsContainer}>
            <Text
               style={{
                  fontFamily: "fontBold",
                  fontSize: 18,
                  textAlign: "center",
               }}
            >
               {position}
            </Text>
            <Text
               style={{
                  fontFamily: "fontRegular",
                  fontSize: 16,
                  textAlign: "center",
               }}
            >
               {name}
            </Text>
            <View style={styles.contactDetails}>
               <View style={styles.contactDetail}>
                  <Icon source="phone" color={primaryBlue} size={20} />
                  <Text
                     style={{
                        fontFamily: "fontRegular",
                        fontSize: 15,
                        textAlign: "center",
                     }}
                  >
                     {phone_no}
                  </Text>
               </View>
               <View style={styles.contactDetail}>
                  <Icon source="email" color={primaryBlue} size={20} />
                  <Text
                     style={{
                        fontFamily: "fontRegular",
                        fontSize: 15,
                        textAlign: "center",
                     }}
                  >
                     {email}
                  </Text>
               </View>
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   cardContainer: {
      borderWidth: 1,
      borderColor: textLightGray,
      padding: 10,
      width: "44%",
      borderRadius: 8,
      marginVertical: 8,
   },
   imageContainer: {
      height: 120,
   },
   detailsContainer: {},
   contactDetails: {
      flexDirection: "column",
      gap: 5,
   },
   contactDetail: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
   },
});

export default HostelAdministrationCard;
