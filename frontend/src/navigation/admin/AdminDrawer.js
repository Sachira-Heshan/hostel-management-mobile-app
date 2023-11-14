import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../../screens/app/admin/Dashboard';
import Rooms from '../../screens/app/admin/Rooms';
import Announcements from '../../screens/app/admin/Announcements';
import Complains from '../../screens/app/admin/Complains';
import LatePasses from '../../screens/app/admin/LatePasses';
import Settings from '../../screens/app/admin/Settings';

const DashboardStack = createStackNavigator();
const RoomsStack = createStackNavigator();
const AnnouncementStack = createStackNavigator();
const ComplainsStack = createStackNavigator();
const LatePassesStack = createStackNavigator();
const SettingsStack = createStackNavigator();

export const AdminDashboard = () => {
    return (
        <DashboardStack.Navigator
            initialRouteName='AdminHome'
            screenOptions={{
                headerShown: false
            }}
        >
            <DashboardStack.Screen name='AdminHome' component={Dashboard} />
        </DashboardStack.Navigator>
    )
}

export const AdminRooms = () => {
    return (
        <RoomsStack.Navigator
            initialRouteName='AdminRooms'
            screenOptions={{
                headerShown: false
            }}
        >
            <RoomsStack.Screen name='AdminRooms' component={Rooms} />
        </RoomsStack.Navigator>
    )
}

export const AdminAnnouncements = () => {
    return (
        <AnnouncementStack.Navigator
            initialRouteName='AdminAnnouncements'
            screenOptions={{
                headerShown: false
            }}
        >
            <AnnouncementStack.Screen name='AdminAnnouncements' component={Announcements} />
        </AnnouncementStack.Navigator>
    )
}

export const AdminComplains = () => {
    return (
        <ComplainsStack.Navigator
            initialRouteName='AdminComplains'
            screenOptions={{
                headerShown: false
            }}
        >
            <ComplainsStack.Screen name='AdminComplains' component={Complains} />
        </ComplainsStack.Navigator>
    )
}

export const AdminLatePasses = () => {
    return (
        <LatePassesStack.Navigator
            initialRouteName='AdminLatePasses'
            screenOptions={{
                headerShown: false
            }}
        >
            <LatePassesStack.Screen name='AdminLatePasses' component={LatePasses} />
        </LatePassesStack.Navigator>
    )
}

export const AdminSettings = () => {
    return (
        <SettingsStack.Navigator
            initialRouteName='AdminSettings'
            screenOptions={{
                headerShown: false
            }}
        >
            <SettingsStack.Screen name='AdminSettings' component={Settings} />
        </SettingsStack.Navigator>
    )
}


// const AppStack = () => {
//     return (
//         <Drawer.Navigator>

//         </Drawer.Navigator>
//     )
// }

// export default AppStack
