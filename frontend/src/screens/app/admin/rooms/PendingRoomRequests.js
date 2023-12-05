import { View, Text, RefreshControl, FlatList, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
   black,
   lightGray,
   primaryBlue,
   textDarkGray,
   white,
} from "../../../../constants/Colors";
import { Avatar, Button, List } from "react-native-paper";
import { useCallback, useState } from "react";

const PendingRoomRequests = ({ navigation }) => {
   const [refreshing, setRefreshing] = useState(false);

   const data = require("../../../../data/dummyData.json");

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
               <View style={styles.listContainer}>
                  <FlatList
                     data={data.pending_room_requests}
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
                              title={item.name}
                              description={item.faculty}
                              left={(color = textDarkGray) => (
                                 <View style={styles.imageContainer}>
                                    <Avatar.Image
                                       size={50}
                                       source={require("../../../../../assets/images/profile_pic.png")}
                                    />
                                 </View>
                                 // <List.Icon
                                 //    color={color}
                                 //    icon={"account-circle"}
                                 // />
                              )}
                              right={(props) => (
                                 <List.Icon {...props} icon={"chevron-right"} />
                              )}
                              style={{
                                 paddingLeft: 15,
                                 width: "90%",
                                 alignSelf: "center",
                                 backgroundColor: white, //remove
                                 marginVertical: 8, //remove
                                 borderRadius: 8, //remove
                                 elevation: 5,
                              }}
                              titleStyle={{ fontFamily: "fontRegular" }}
                              descriptionStyle={{
                                 fontFamily: "fontRegular",
                                 marginTop: -5,
                              }}
                              onPress={() => {
                                 navigation.navigate("AdminRoomAllocation", {
                                    room_request: item,
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
                              There are no current pending room requests!
                           </Text>
                        </View>
                     }
                     ListHeaderComponent={
                        <View>
                           <Text
                              style={{
                                 fontFamily: "fontBold",
                                 fontSize: 20,
                                 textAlign: "center",
                                 marginVertical: 10,
                              }}
                           >
                              Pending Requests
                           </Text>
                        </View>
                     }
                  />
               </View>
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
   },
   imageContainer: {
      backgroundColor: primaryBlue,
      width: 50,
      height: 50,
      borderRadius: 50,
   },
});

export default PendingRoomRequests;
