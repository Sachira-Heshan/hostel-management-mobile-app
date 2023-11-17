import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { AdminAnnouncements, AdminComplains, AdminDashboard, AdminLatePasses, AdminRooms, AdminSettings } from '../navigation/admin/AdminDrawer';
import { IconButton, Icon, Button } from 'react-native-paper';
import { black, lightGray, primaryBlue, seperatorColor, textDarkGray, textLightGray } from '../constants/Colors';

const Drawer = createDrawerNavigator();

const AdminDrawer = () => {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            drawerContent={
                (props) => {
                    return (
                        <View style={{ flex: 1 }}>
                            <DrawerContentScrollView {...props}>
                                <View style={styles.drawerTop}></View>
                                <DrawerItemList {...props} />
                            </DrawerContentScrollView>
                            <View style={styles.drawerBottom}>
                                <Button
                                    icon={'logout'}
                                    mode='text'
                                    buttonColor={lightGray}
                                    textColor={textDarkGray}
                                    labelStyle={{ fontSize: 16 }}
                                    style={{ borderRadius: 6 }}
                                >
                                    Sign out
                                </Button>
                            </View>
                        </View>
                    )
                }
            }
            screenOptions={{
                headerTitleAlign: 'center',
                headerRight: () => {
                    return (
                        <IconButton
                            icon={'bell-ring-outline'}
                        />
                    )
                },
                drawerLabelStyle: {
                    marginLeft: -20,
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

const styles = StyleSheet.create({
    drawerTop: {
        height: 150,
        width: '100%',
        backgroundColor: lightGray,
        marginBottom: 10,
    },
    drawerBottom: {
        padding: 20,
        borderTopColor: lightGray,
        borderTopWidth: 1,
    }
})

export default AdminDrawer