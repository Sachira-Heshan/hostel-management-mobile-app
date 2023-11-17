import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { black, lightGray, primaryBlue, white } from '../../../constants/Colors';
import { Button } from 'react-native-paper';
import CircularProgress from 'react-native-circular-progress-indicator'

const Dashboard = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ backgroundColor: white, minHeight: '100%' }} showsVerticalScrollIndicator={false} >
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.capacityCard}>
                        <Text style={styles.title}>Student Capacity</Text>
                        <View style={styles.indicatorContainer}>
                            <View style={{}}>
                                <CircularProgress
                                    value={21}
                                    radius={50}
                                    duration={1500}
                                    progressValueColor={primaryBlue}
                                    maxValue={64}
                                    title='Block A'
                                    titleColor={black}
                                    titleStyle={{ fontWeight: 'bold' }}
                                    inActiveStrokeColor={primaryBlue}
                                    inActiveStrokeOpacity={0.2}
                                    activeStrokeColor={primaryBlue}
                                />
                            </View>
                            <View style={styles.progressIndicator}>
                                <CircularProgress
                                    value={253}
                                    radius={50}
                                    duration={1500}
                                    progressValueColor={primaryBlue}
                                    maxValue={400}
                                    title='Block B'
                                    titleColor={black}
                                    titleStyle={{ fontWeight: 'bold' }}
                                    inActiveStrokeColor={primaryBlue}
                                    inActiveStrokeOpacity={0.2}
                                    activeStrokeColor={primaryBlue}
                                />
                            </View>
                            <View style={{}}>
                                <CircularProgress
                                    value={178}
                                    radius={50}
                                    duration={1500}
                                    progressValueColor={primaryBlue}
                                    maxValue={400}
                                    title='Block C'
                                    titleColor={black}
                                    titleStyle={{ fontWeight: 'bold' }}
                                    inActiveStrokeColor={primaryBlue}
                                    inActiveStrokeOpacity={0.2}
                                    activeStrokeColor={primaryBlue}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.capacityCard}>
                        <Text style={styles.title}>Room Capacity</Text>
                        <View style={styles.indicatorContainer}>
                            <View style={{}}>
                                <CircularProgress
                                    value={12}
                                    radius={50}
                                    duration={1500}
                                    progressValueColor={primaryBlue}
                                    maxValue={32}
                                    title='Block A'
                                    titleColor={black}
                                    titleStyle={{ fontWeight: 'bold' }}
                                    inActiveStrokeColor={primaryBlue}
                                    inActiveStrokeOpacity={0.2}
                                    activeStrokeColor={primaryBlue}
                                />
                            </View>
                            <View style={styles.progressIndicator}>
                                <CircularProgress
                                    value={65}
                                    radius={50}
                                    duration={1500}
                                    progressValueColor={primaryBlue}
                                    maxValue={100}
                                    title='Block B'
                                    titleColor={black}
                                    titleStyle={{ fontWeight: 'bold' }}
                                    inActiveStrokeColor={primaryBlue}
                                    inActiveStrokeOpacity={0.2}
                                    activeStrokeColor={primaryBlue}
                                />
                            </View>
                            <View style={{}}>
                                <CircularProgress
                                    value={48}
                                    radius={50}
                                    duration={1500}
                                    progressValueColor={primaryBlue}
                                    maxValue={100}
                                    title='Block C'
                                    titleColor={black}
                                    titleStyle={{ fontWeight: 'bold' }}
                                    inActiveStrokeColor={primaryBlue}
                                    inActiveStrokeOpacity={0.2}
                                    activeStrokeColor={primaryBlue}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.quickButtons}>
                        <Button mode='contained' onPress={() => navigation.navigate('AdminRoomsDashboard', { screen: 'AdminPendingRoomRequests' })} style={{ width: '100%', margin: 15, padding: 10 }}>Room Management</Button>
                        <Button mode='contained' onPress={() => navigation.navigate('AdminComplainsDashboard')} style={{ width: '100%', margin: 15, padding: 10 }}>Complains</Button>
                        <Button mode='contained' onPress={() => navigation.navigate('AdminAnnouncementsDashboard')} style={{ width: '100%', margin: 15, padding: 10 }}>Announcements</Button>
                        <Button mode='contained' onPress={() => navigation.navigate('AdminLatePassesDashboard')} style={{ width: '100%', margin: 15, padding: 10 }}>Late Passes</Button>
                    </View>
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
    capacityCard: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: lightGray
    },
    title: {
        width: '90%',
        fontFamily: 'Roboto Regular',
        fontSize: 16,
        marginVertical: 10,
    },
    indicatorContainer: {
        padding: 10,
        flexDirection: 'row'
    },
    progressIndicator: {
        marginHorizontal: 10
    },
    quickButtons: {}
})

export default Dashboard