import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { AdminAnnouncements, AdminComplains, AdminDashboard, AdminLatePasses, AdminRooms, AdminSettings } from '../navigation/admin/AdminDrawer';
import { IconButton, Icon } from 'react-native-paper';
import { black, lightGray, primaryBlue, textDarkGray, textLightGray } from '../constants/Colors';

const Drawer = createDrawerNavigator();

const AdminDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerTitleAlign: 'center',
                headerRight: () => {
                    return (
                        <IconButton
                            icon={'bell-ring-outline'}
                        />
                    )
                },
                drawerActiveTintColor: primaryBlue,
                drawerInactiveTintColor: textDarkGray,
            }}
        >
            <Drawer.Screen name='Home' component={AdminDashboard} options={{
                headerTitle: 'Admin Dashboard',
                drawerIcon: ({ color, size }) => { return <Icon source={'home'} size={size} color={color} /> },
            }} />
            <Drawer.Screen name='Rooms' component={AdminRooms} options={{
                drawerIcon: ({ color, size }) => { return <Icon source={'office-building-cog'} size={size} color={color} /> },
            }} />
            <Drawer.Screen name='Announcements' component={AdminAnnouncements} options={{
                drawerIcon: ({ color, size }) => { return <Icon source={'bullhorn'} size={size} color={color} /> },
            }} />
            <Drawer.Screen name='Complains' component={AdminComplains} options={{
                drawerIcon: ({ color, size }) => { return <Icon source={'comment-plus'} size={size} color={color} /> },
            }} />
            <Drawer.Screen name='Late Passes' component={AdminLatePasses} options={{
                drawerIcon: ({ color, size }) => { return <Icon source={'clock-check'} size={size} color={color} /> },
            }} />
            <Drawer.Screen name='Settings' component={AdminSettings} options={{
                drawerIcon: ({ color, size }) => { return <Icon source={'cog'} size={size} color={color} /> },
            }} />
        </Drawer.Navigator>
    )
}

export default AdminDrawer