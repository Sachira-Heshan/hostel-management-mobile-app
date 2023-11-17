import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { black, lightGray, primaryBlue, white } from '../../../constants/Colors';
import { Button } from 'react-native-paper';

const Rooms = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ backgroundColor: white, minHeight: '100%' }} showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text>Hello Rooms</Text>
                    <Button mode='contained' onPress={() => navigation.navigate('AdminPendingRoomRequests')} style={{ width: '100%', margin: 15, padding: 10 }}>Pending</Button>
                    <Button mode='contained' onPress={() => navigation.navigate('AdminAcceptedRoomRequests')} style={{ width: '100%', margin: 15, padding: 10 }}>Accepted</Button>
                    <Button mode='contained' onPress={() => navigation.navigate('AdminRoomDetails')} style={{ width: '100%', margin: 15, padding: 10 }}>Room Details</Button>
                    <Button mode='contained' onPress={() => navigation.navigate('AdminVacateRoom')} style={{ width: '100%', margin: 15, padding: 10 }}>Vacate Room</Button>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: white
    },
    contentContainer: {
        flex: 1,
        width: '90%',
        alignItems: 'center',
    },
    title: {
        width: '90%',
        fontFamily: 'Roboto Regular',
        fontSize: 16,
        marginVertical: 10,
    },
})

export default Rooms