import { StyleSheet } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";
import { primaryBlue, white } from "../constants/Colors";

const SuccessModal = ({ message, visible, hideModal }) => {
   return (
      <Portal>
         <Dialog visible={visible} onDismiss={hideModal()} style={styles.modal}>
            <Dialog.Icon icon="check-circle" color={primaryBlue} size={40} />
            <Dialog.Title style={styles.title}>Success</Dialog.Title>
            <Dialog.Content>
               <Text variant="bodyMedium" style={{ textAlign: "center" }}>
                  {message}
               </Text>
            </Dialog.Content>
            <Dialog.Actions style={{ width: "100%", justifyContent: "center" }}>
               <Button
                  mode="contained"
                  labelStyle={{ fontFamily: "fontRegular", fontSize: 16 }}
                  buttonColor={primaryBlue}
                  style={{ borderRadius: 6, width: "50%" }}
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
      textAlign: "center",
      fontFamily: "fontBold",
      color: primaryBlue,
   },
   modal: {
      backgroundColor: white,
      borderRadius: 12,
   },
});

export default SuccessModal;
