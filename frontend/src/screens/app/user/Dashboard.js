import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dashboard = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text>User Dashboard</Text>
            </View>
        </SafeAreaView>
    )
}

export default Dashboard