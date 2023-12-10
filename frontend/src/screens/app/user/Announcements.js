import { useState, useCallback } from "react";
import { View, Text, FlatList, RefreshControl, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
   black,
   darkRed,
   lightGray,
   primaryBlue,
   textDarkGray,
   textLightGray,
   white,
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

const Announcements = ({ navigation }) => {
   const [refreshing, setRefreshing] = useState(false);
   const [visible, setVisible] = useState(false);
   const [clickedItem, setClickedItem] = useState(null);

   const data = require("../../../data/dummyData.json");

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
            <Text
               style={{
                  fontFamily: "fontBold",
                  fontSize: 20,
                  width: "100%",
                  textAlign: "center",
                  marginTop: 5,
               }}
            >
               Announcements
            </Text>
            <View style={styles.announcementContainer}>
               <FlatList
                  data={data.announcements}
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
                           title={item.title}
                           description={item.description}
                           left={(color = textDarkGray) => (
                              <View style={styles.imageContainer}>
                                 <Avatar.Image
                                    size={40}
                                    source={require("../../../../assets/images/announcement.png")}
                                 />
                              </View>
                              // <List.Icon
                              //    color={color}
                              //    icon={"account-circle"}
                              // />
                           )}
                           right={(color = textDarkGray) => (
                              <List.Icon
                                 color={textDarkGray}
                                 icon={"chevron-right"}
                              />
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
                              navigation.navigate("UserViewAnnouncement", {
                                 announcement: item,
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
                           There are no announcements!
                        </Text>
                     </View>
                  }
               />
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

export default Announcements;
