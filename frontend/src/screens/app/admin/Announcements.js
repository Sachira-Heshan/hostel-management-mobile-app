import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { black, lightGray, primaryBlue, white } from '../../../constants/Colors';
import { Button } from 'react-native-paper';

const Announcements = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ backgroundColor: white, minHeight: '100%' }} showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text>Hello Announcements</Text>
                    <Button mode='contained' onPress={() => navigation.navigate('AdminAddAnnouncement')} style={{ width: '100%', margin: 15, padding: 10 }}>Add Announcement</Button>
                    <Button mode='contained' onPress={() => navigation.navigate('AdminViewAnnouncement')} style={{ width: '100%', margin: 15, padding: 10 }}>View Announcement</Button>
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

export default Announcements