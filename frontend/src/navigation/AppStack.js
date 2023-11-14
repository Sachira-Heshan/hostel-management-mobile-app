import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { AdminAnnouncements, AdminComplains, AdminDashboard, AdminLatePasses, AdminRooms, AdminSettings } from '../navigation/admin/AdminDrawer';
import { IconButton } from 'react-native-paper';

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
                }
            }}
        >
            <Drawer.Screen name='Home' component={AdminDashboard} />
            <Drawer.Screen name='Rooms' component={AdminRooms} />
            <Drawer.Screen name='Announcements' component={AdminAnnouncements} />
            <Drawer.Screen name='Complains' component={AdminComplains} />
            <Drawer.Screen name='Late Passes' component={AdminLatePasses} />
            <Drawer.Screen name='Settings' component={AdminSettings} />
        </Drawer.Navigator>
    )
}

export default AdminDrawer