import { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatListComponent } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, TextInput, Checkbox, IconButton } from 'react-native-paper';

import logo from '../../../assets/images/logo.png';
import { primaryBlue, textLightGray, lightGray, textDarkGray, white } from '../../constants/Colors';
import { Formik } from 'formik';
import * as Yup from 'yup';

const Login = ({ navigation }) => {
    const [rememberMe, setRememberMe] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = () => {
        //login
    }

    const handleMicrosoftLogin = () => {
        //microsoft login
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={logo} resizeMode='contain' style={styles.image} />
                </View>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.text}>Welcome to Hostel Hive - Hostel Management Application</Text>
                <View style={styles.loginForm}>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={() => handleLogin}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => {
                            return (
                                <View>
                                    <View>
                                        <TextInput
                                            mode='outlined'
                                            label={'Email'}
                                            onChangeText={handleChange('email')}
                                            selectionColor={lightGray}
                                            cursorColor={primaryBlue}
                                            outlineColor={lightGray}
                                            activeOutlineColor={primaryBlue}
                                            outlineStyle={{ borderRadius: 4 }}
                                        />
                                        <TextInput
                                            mode='outlined'
                                            label={'Password'}
                                            onChangeText={handleChange('email')}
                                            selectionColor={lightGray}
                                            cursorColor={primaryBlue}
                                            outlineColor={lightGray}
                                            activeOutlineColor={primaryBlue}
                                            outlineStyle={{ borderRadius: 4 }}
                                            secureTextEntry={!showPassword}
                                            right={<TextInput.Icon
                                                icon={showPassword ? 'eye-off' : 'eye'}
                                                iconColor={textLightGray}
                                                size={20}
                                                onPress={() => {
                                                    setShowPassword(!showPassword)
                                                }}
                                            />}
                                            style={{ marginTop: 10 }}
                                        />
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Checkbox
                                                    status={rememberMe ? 'checked' : 'unchecked'}
                                                    color={primaryBlue}
                                                    uncheckedColor={lightGray}
                                                    onPress={() => {
                                                        setRememberMe(!rememberMe)
                                                    }}
                                                />
                                                <Text>Remember me</Text>
                                            </View>
                                            <Button
                                                mode='text'
                                                textColor={primaryBlue}
                                                labelStyle={{ textDecorationLine: 'underline', textDecorationStyle: 'solid', fontFamily: 'Roboto Regular', fontSize: 16 }}
                                                onPress={() => {
                                                    navigation.navigate('ForgotPassword')
                                                }}
                                            >Forgot password</Button>
                                        </View>
                                        <Button
                                            mode='contained'
                                            style={{ width: '100%', borderRadius: 9 }}
                                            buttonColor={primaryBlue}
                                            labelStyle={{ fontSize: 16 }}
                                        >Login</Button>
                                    </View>
                                </View>
                            )
                        }}
                    </Formik>
                    <View style={{ marginVertical: 8, alignItems: 'center' }}>
                        <IconButton
                            icon={'microsoft'}
                            size={20}
                            onPress={() => {
                                handleMicrosoftLogin()
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Roboto Regular', fontSize: 16, color: textLightGray }}>Don't have an account? </Text>
                        <Button
                            mode='text'
                            textColor={primaryBlue}
                            labelStyle={{ textDecorationLine: 'underline', textDecorationStyle: 'solid', fontFamily: 'Roboto Regular', fontSize: 16 }}
                            onPress={() => {
                                navigation.navigate('SignUp')
                            }}
                        >Sign up</Button>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: white
    },
    contentContainer: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    image: {
        height: 150,
    },
    title: {
        fontFamily: 'Roboto Bold',
        fontSize: 24,
        color: textDarkGray,
        textAlign: 'center',
        margin: 15,
    },
    text: {
        fontFamily: 'Roboto Regular',
        fontSize: 16,
        color: textLightGray,
        width: '70%',
        textAlign: 'center',
    },
    loginForm: {
        marginTop: 15,
        width: '100%'
    }
})

export default Login