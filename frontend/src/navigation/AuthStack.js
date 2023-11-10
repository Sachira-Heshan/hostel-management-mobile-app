import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';

const AuStack = createStackNavigator();

const AuthStack = () => {
    return (
        <AuStack.Navigator
            initialRouteName='Welcome'
            screenOptions={{ headerShown: false }}
        >
            <AuStack.Screen
                name='Welcome'
                component={Welcome}
            />
            <AuStack.Screen
                name='Login'
                component={Login}
            />
            <AuStack.Screen
                name='SignUp'
                component={SignUp}
            />
        </AuStack.Navigator>
    )
}

export default AuthStack