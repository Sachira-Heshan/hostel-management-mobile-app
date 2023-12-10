import { StyleSheet } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import {
   primaryBlue,
   textDarkGray,
   textLightGray,
   white,
} from "../constants/Colors";

const WarningModal = ({ message, visible, hideModal, content }) => {
   return (
      <Portal>
         <Dialog visible={visible} onDismiss={hideModal()} style={styles.modal}>
            <Dialog.Title style={styles.title}>{message}</Dialog.Title>
            <Dialog.Content>
               <Text variant="bodyMedium" style={{}}>
                  {content}
               </Text>
            </Dialog.Content>
            <Dialog.Actions>
               <Button
                  mode="outlined"
                  labelStyle={{
                     fontFamily: "fontRegular",
                     fontSize: 16,
                     color: primaryBlue,
                     paddingHorizontal: 10,
                  }}
                  style={{ borderRadius: 6 }}
                  onPress={hideModal()}
               >
                  Cancel
               </Button>
               <Button
                  mode="contained"
                  labelStyle={{
                     fontFamily: "fontRegular",
                     fontSize: 16,
                     paddingHorizontal: 15,
                  }}
                  buttonColor={primaryBlue}
                  style={{ borderRadius: 6 }}
                  onPress={hideModal()}
               >
                  Ok
               </Button>
            </Dialog.Actions>
         </Dialog>
      </Portal>
   );
};

const styles = StyleSheet.create({
   title: {
      fontFamily: "fontBold",
      color: textDarkGray,
   },
   modal: {
      backgroundColor: white,
      borderRadius: 12,
   },
});

export default WarningModal;
