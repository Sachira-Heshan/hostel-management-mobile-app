import { View, Text, RefreshControl, FlatList, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import {
   black,
   lightGray,
   primaryBlue,
   textDarkGray,
   white,
} from "../../../constants/Colors";
import { Button, List } from "react-native-paper";
import { useCallback, useState } from "react";

const Complains = ({ navigation }) => {
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
               <View style={styles.listContainer}>
                  <FlatList
                     data={data.complains}
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
                              description={<Text>{item.description}</Text>}
                              left={(color = textDarkGray) => (
                                 <List.Icon
                                    color={color}
                                    icon={"account-circle"}
                                 />
                              )}
                              right={(props) => (
                                 <List.Icon {...props} icon={"chevron-right"} />
                              )}
                              style={{
                                 paddingLeft: 20,
                                 backgroundColor: lightGray, //remove
                                 marginVertical: 8, //remove
                                 borderRadius: 6, //remove
                              }}
                              titleStyle={{ fontFamily: "fontRegular" }}
                              descriptionStyle={{
                                 fontFamily: "fontRegular",
                                 marginTop: -5,
                              }}
                              onPress={() => {
                                 navigation.navigate("AdminViewComplain", {
                                    complain: item,
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
                              There are no current late pass requests!
                           </Text>
                        </View>
                     }
                     //  ListHeaderComponent={
                     //     <View>
                     //        <Text
                     //           style={{
                     //              fontFamily: "fontBold",
                     //              fontSize: 20,
                     //              textAlign: "center",
                     //              marginVertical: 10,
                     //           }}
                     //        >
                     //           Late Pass Requests
                     //        </Text>
                     //     </View>
                     //  }
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
      width: "90%",
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
});

export default Complains;
