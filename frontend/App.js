import AppNav from "./src/navigation/AppNav";
import { useColorScheme } from "react-native";
import { MD3LightTheme, MD3DarkTheme, PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import { LightScheme } from "./src/theme/lightScheme";
import { DarkScheme } from "./src/theme/darkScheme";
import { StatusBar } from "expo-status-bar";

import {
   fontBold,
   fontLight,
   fontMedium,
   fontRegular,
   fontThin,
} from "./src/constants/Fonts";
import { AuthProvider } from "./src/context/AuthContext";
import { white } from "./src/constants/Colors";

const App = () => {
   const colorScheme = useColorScheme();

   const [fontsLoaded] = useFonts({
      "Roboto Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "Roboto Light": require("./assets/fonts/Roboto-Light.ttf"),
      "Roboto Medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "Roboto Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      fontBold: fontBold,
      fontRegular: fontRegular,
      fontMedium: fontMedium,
      fontLight: fontLight,
      fontThin: fontThin,
   });

   if (!fontsLoaded) {
      return null;
   }

   const LightTheme = {
      ...MD3LightTheme,
      colors: LightScheme,
   };

   const DarkTheme = {
      ...MD3DarkTheme,
      colors: DarkScheme,
   };

   const theme = colorScheme === "dark" ? DarkTheme : LightTheme;

   return (
      <PaperProvider settings={{ rippleEffectEnabled: false }}>
         <AuthProvider>
            <AppNav />
            <StatusBar backgroundColor={white} />
         </AuthProvider>
      </PaperProvider>
   );
};

export default App;
