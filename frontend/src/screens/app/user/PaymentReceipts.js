import { useState, useCallback, useContext } from "react";
import { View, Text, FlatList, RefreshControl, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
   black,
   darkGreen,
   darkRed,
   lightGray,
   primaryBlue,
   textDarkGray,
   textLightGray,
   white,
   yellowDark,
} from "../../../constants/Colors";
import {
   Button,
   Icon,
   TouchableRipple,
   List,
   Portal,
   Dialog,
   Avatar,
} from "react-native-paper";

import { AuthContext } from "../../../context/AuthContext";

const PaymentReceipts = ({ navigation }) => {
   const [refreshing, setRefreshing] = useState(false);
   const [visible, setVisible] = useState(false);
   const [clickedItem, setClickedItem] = useState(null);

   const { userInfo } = useContext(AuthContext);

   const data = require("../../../data/dummyData.json");
   const userPaymentReceipts = data.payment_receipts.filter(
      (receipt) => receipt.user === userInfo._id
   );

   const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
         setRefreshing(false);
      }, 1500);
   }, []);

   const showDeleteAnnouncementDialog = () => {
      setVisible(true);
   };

   const hideDeleteAnnouncementDialog = () => {
      setVisible(false);
   };

   return (
      <View style={styles.container}>
         <View style={styles.contentContainer}>
            <View style={styles.announcementContainer}>
               <Text
                  style={{
                     fontFamily: "fontBold",
                     fontSize: 20,
                     width: "100%",
                     textAlign: "center",
                     marginTop: 5,
                  }}
               >
                  Payment Receipts
               </Text>
               <FlatList
                  data={userPaymentReceipts}
                  refreshControl={
                     <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                     />
                  }
                  renderItem={({ item }) => {
                     return (
                        <List.Item
                           key={item.id}
                           title={item.reason}
                           description={item.amount}
                           left={(color = textDarkGray) => (
                              <List.Icon
                                 color={
                                    item.status === "pending"
                                       ? yellowDark
                                       : darkGreen
                                 }
                                 icon={
                                    item.status === "pending"
                                       ? "clock"
                                       : "check-bold"
                                 }
                              />
                           )}
                           right={(props) => (
                              <TouchableRipple
                                 // onPress={() => {
                                 //    showDeleteAnnouncementDialog();
                                 //    setClickedItem(item);
                                 // }}
                                 style={{ justifyContent: "center" }}
                              >
                                 <List.Icon
                                    {...props}
                                    icon={"chevron-right"}
                                    color={textDarkGray}
                                 />
                              </TouchableRipple>
                           )}
                           style={{
                              paddingLeft: 15,
                              elevation: 5,
                              width: "90%",
                              backgroundColor: white,
                              alignSelf: "center",
                              marginVertical: 8, //remove
                              borderRadius: 8, //remove
                           }}
                           titleStyle={{ fontFamily: "fontRegular" }}
                           descriptionStyle={{
                              fontFamily: "fontRegular",
                              marginTop: -5,
                           }}
                           onPress={() => {
                              navigation.navigate("UserViewPaymentReceipts", {
                                 payment_receipt: item,
                              }); //placeholder navigation
                           }}
                        />
                     );
                  }}
                  style={styles.listStyles}
                  showsVerticalScrollIndicator={false}
                  ListEmptyComponent={
                     <View>
                        <Text
                           style={{
                              fontFamily: "fontBold",
                              textAlign: "center",
                              marginHorizontal: 15,
                           }}
                        >
                           There are no payment receipts!
                        </Text>
                     </View>
                  }
                  ListHeaderComponent={
                     <View
                        style={{
                           width: "90%",
                           alignItems: "center",
                           alignSelf: "center",
                        }}
                     >
                        <TouchableRipple
                           style={{
                              width: "100%",
                              margin: 15,
                              padding: 15,
                              paddingHorizontal: 20,
                              borderRadius: 8,
                              borderColor: primaryBlue,
                              borderWidth: 1,
                           }}
                           onPress={() =>
                              navigation.navigate("UserAddPaymentReceipts")
                           }
                        >
                           <View style={styles.addAnnouncement}>
                              <Text
                                 style={{
                                    color: textDarkGray,
                                    fontFamily: "fontRegular",
                                    fontSize: 16,
                                 }}
                              >
                                 Add Payment Receipt
                              </Text>
                              <Icon
                                 source={"plus-box"}
                                 color={primaryBlue}
                                 size={24}
                              />
                           </View>
                        </TouchableRipple>

                        <Text
                           style={{
                              fontFamily: "fontRegular",
                              fontSize: 16,
                              width: "100%",
                              marginVertical: 8,
                           }}
                        >
                           Manage
                        </Text>
                        <View
                           style={{
                              width: "100%",
                              height: 1,
                              backgroundColor: textLightGray,
                              marginBottom: 8,
                           }}
                        ></View>
                     </View>
                  }
               />
               <Portal>
                  <Dialog
                     visible={visible}
                     onDismiss={hideDeleteAnnouncementDialog}
                     style={styles.announcementDialog}
                  >
                     <Dialog.Title>
                        <Text style={{ fontFamily: "fontBold", fontSize: 20 }}>
                           Are you sure?
                        </Text>
                     </Dialog.Title>
                     <Dialog.Content>
                        <Text
                           style={{ fontFamily: "fontRegular", fontSize: 16 }}
                        >
                           Do you really want to delete "{clickedItem?.title}"
                           announcement. If you delete, this action can't be
                           undone!
                        </Text>
                     </Dialog.Content>
                     <Dialog.Actions>
                        <Button
                           mode="outlined"
                           style={{
                              paddingHorizontal: 15,
                              borderColor: textLightGray,
                           }}
                           labelStyle={{
                              fontFamily: "fontRegular",
                              fontSize: 16,
                              color: textLightGray,
                           }}
                           onPress={hideDeleteAnnouncementDialog}
                        >
                           Cancel
                        </Button>
                        <Button
                           mode="contained"
                           style={{
                              paddingHorizontal: 15,
                           }}
                           buttonColor={darkRed}
                           labelStyle={{
                              fontFamily: "fontRegular",
                              fontSize: 16,
                           }}
                           onPress={hideDeleteAnnouncementDialog}
                        >
                           Delete
                        </Button>
                     </Dialog.Actions>
                  </Dialog>
               </Portal>
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
   addAnnouncement: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
   announcementContainer: {
      flex: 1,
      width: "100%",
   },
   announcementDialog: {
      backgroundColor: lightGray,
      borderRadius: 12,
   },
   imageContainer: {
      backgroundColor: primaryBlue,
      width: 40,
      height: 40,
      borderRadius: 40,
      alignSelf: "center",
   },
});

export default PaymentReceipts;
