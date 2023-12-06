import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { lightGray, primaryBlue, white } from "../../../constants/Colors";
import { Button, TextInput } from "react-native-paper";

const HostelRules = ({ navigation, route }) => {
   //    const { payment_receipt } = route.params;

   return (
      <ScrollView
         style={{ flex: 1 }}
         contentContainerStyle={{ backgroundColor: white, minHeight: "100%" }}
         showsVerticalScrollIndicator={false}
      >
         <View style={styles.container}>
            <View style={styles.contentContainer}>
               <TextInput
                  mode="outlined"
                  label={"Hostel Rules"}
                  // onChangeText={handleChange('email')}
                  selectionColor={lightGray}
                  multiline
                  numberOfLines={30}
                  style={{ width: "100%", marginTop: 15 }}
                  cursorColor={primaryBlue}
                  outlineColor={lightGray}
                  activeOutlineColor={primaryBlue}
                  outlineStyle={{ borderRadius: 4 }}
               />
               <Button
                  style={styles.actionButton}
                  mode="contained"
                  labelStyle={{ fontFamily: "fontRegular", fontSize: 16 }}
                  buttonColor={primaryBlue}
               >
                  Update Hostel Rules
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

export default HostelRules;
