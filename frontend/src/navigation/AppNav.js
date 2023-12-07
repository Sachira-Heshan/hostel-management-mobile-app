import { useContext } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { AuthContext } from "../context/AuthContext";

const AppNav = () => {
   // const userToken = null
   // const userToken = "not-null";
   const { userToken } = useContext(AuthContext);

   return (
      <NavigationContainer>
         {userToken !== null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
   );
};

export default AppNav;
