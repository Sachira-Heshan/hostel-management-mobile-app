import { TextInput } from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import DropDown from "react-native-paper-dropdown";
import { darkRed, primaryBlue, lightGray } from "../constants/Colors";

const ItemConditionDetails = ({
   valueCondition,
   valueQuantity,
   errorCondition,
   errorQuantity,
   touchedCondition,
   touchedQuantity,
   description,
   setShowCondition,
   showCondition,
   handleBlur,
   handleChange,
   valueC,
   valueQ,
}) => {
   return (
      <View style={styles.dropdownContainer}>
         <Text
            style={{
               fontFamily: "fontRegular",
               fontSize: 16,
               flex: 3,
            }}
         >
            {description}
         </Text>
         <View style={{ flex: 2.5, marginRight: 10 }}>
            <DropDown
               mode="outlined"
               label="Condition"
               visible={showCondition}
               showDropDown={() => setShowCondition(true)}
               onDismiss={() => setShowCondition(false)}
               list={[
                  { label: "New", value: "new" },
                  { label: "Old", value: "old" },
               ]}
               value={valueCondition}
               onBlur={handleBlur(valueC)}
               setValue={handleChange(valueC)}
               activeColor={primaryBlue}
               inputProps={{
                  outlineColor: lightGray,
                  style: {},
                  right: <TextInput.Icon icon={"chevron-down"} />,
               }}
            />
            {/* {errorCondition && touchedCondition ? (
               <Text style={styles.errorText}>{errorCondition}</Text>
            ) : null} */}
         </View>
         <TextInput
            mode="outlined"
            label={"Qt"}
            onChangeText={handleChange(valueQ)}
            onBlur={handleBlur(valueQ)}
            keyboardType="numeric"
            value={valueQuantity}
            selectionColor={lightGray}
            cursorColor={primaryBlue}
            outlineColor={lightGray}
            activeOutlineColor={primaryBlue}
            outlineStyle={{ borderRadius: 4 }}
            style={{ flex: 1.5 }}
         />
         {/* {errorQuantity && touchedQuantity ? (
            <Text style={styles.errorText}>{errorQuantity}</Text>
         ) : null} */}
      </View>
   );
};

const styles = StyleSheet.create({
   dropdownContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 5,
   },
   errorText: {
      color: darkRed,
      marginTop: 4,
      fontFamily: "fontRegular",
      fontSize: 16,
   },
});

export default ItemConditionDetails;
