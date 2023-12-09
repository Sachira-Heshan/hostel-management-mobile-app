import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "../config/BaseUrl";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [isLoading, setIsLoading] = useState(false);
   const [userToken, setUserToken] = useState(null);
   const [userInfo, setUserInfo] = useState(null);

   const [err, setErr] = useState(null);

   const isLoggedIn = async () => {
      setIsLoading(true);
      try {
         let userToken = await AsyncStorage.getItem("userToken");
         let userInfo = await AsyncStorage.getItem("userInfo");
         userInfo = JSON.parse(userInfo);
         if (userInfo) {
            setUserInfo(userInfo);
            setUserToken(userToken);
         }
         setIsLoading(false);
      } catch (e) {
         setErr(e);
         console.log(`Error: ${e}`);
      }
   };

   useEffect(() => {
      isLoggedIn();
   }, []);

   const login = (email, password) => {
      setIsLoading(true);
      axios
         .post(`${baseUrl}auth/login`, {
            email,
            password,
         })
         .then((res) => {
            setUserInfo(res.data.existUser);
            setUserToken(res.data.accessToken);
            AsyncStorage.setItem("userToken", res.data.accessToken);
            AsyncStorage.setItem(
               "userInfo",
               JSON.stringify(res.data.existUser)
            );
         })
         .catch((e) => {
            setErr(e);
            console.log(`Error: ${e}`);
         });
      setIsLoading(false);
   };

   const logout = async () => {
      setIsLoading(true);
      setUserToken(null);
      setUserInfo(null);
      await AsyncStorage.removeItem("userToken");
      await AsyncStorage.removeItem("userInfo");
      setIsLoading(false);
   };

   return (
      <AuthContext.Provider
         value={{ login, logout, err, isLoading, userToken, userInfo }}
      >
         {children}
      </AuthContext.Provider>
   );
};
