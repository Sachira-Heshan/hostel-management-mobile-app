import { ScrollView } from 'react-native-gesture-handler';

import { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, TextInput } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';

import logo from '../../../assets/images/logo.png';
import { primaryBlue, textLightGray, lightGray, textDarkGray, white } from '../../constants/Colors';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignUp = ({ navigation }) => {
    const [showMemberType, setShowMemberType] = useState(false)
    const [showGender, setShowGender] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleSignUp = () => {
        //sign up
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={logo} resizeMode='contain' style={styles.image} />
                    </View>
                    <Text style={styles.title}>Sign Up</Text>
                    <Text style={styles.text}>Welcome to Hostel Hive - Hostel Management Application</Text>
                    <View style={styles.signUpForm}>
                        <Formik
                            initialValues={{ email: '', name: '', mobileNo: '', memberType: '', regNo: '', gender: '', password: '' }}
                            onSubmit={() => handleSignUp}
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
                                                label={'Name'}
                                                onChangeText={handleChange('name')}
                                                selectionColor={lightGray}
                                                cursorColor={primaryBlue}
                                                outlineColor={lightGray}
                                                activeOutlineColor={primaryBlue}
                                                outlineStyle={{ borderRadius: 4 }}
                                                style={{ marginVertical: 10 }}
                                            />
                                            <TextInput
                                                mode='outlined'
                                                label={'Mobile Number'}
                                                onChangeText={handleChange('mobileNo')}
                                                selectionColor={lightGray}
                                                cursorColor={primaryBlue}
                                                outlineColor={lightGray}
                                                activeOutlineColor={primaryBlue}
                                                outlineStyle={{ borderRadius: 4 }}
                                                style={{ marginBottom: 10 }}
                                            />
                                            <DropDown
                                                mode='outlined'
                                                label='Member Type'
                                                visible={showMemberType}
                                                showDropDown={() => setShowMemberType(true)}
                                                onDismiss={() => setShowMemberType(false)}
                                                list={[
                                                    { label: 'Student', value: 'student' },
                                                    { label: 'Academic Staff', value: 'academicStaff' }
                                                ]}
                                                value={values.memberType}
                                                setValue={handleChange('memberType')}
                                                activeColor={primaryBlue}
                                                inputProps={{
                                                    outlineColor: lightGray,
                                                    right: <TextInput.Icon icon={'chevron-down'} />
                                                }}
                                            />
                                            {values.memberType === 'student' && <TextInput
                                                mode='outlined'
                                                label={'Registration Number'}
                                                onChangeText={handleChange('regNo')}
                                                selectionColor={lightGray}
                                                cursorColor={primaryBlue}
                                                outlineColor={lightGray}
                                                activeOutlineColor={primaryBlue}
                                                outlineStyle={{ borderRadius: 4 }}
                                                style={{ marginTop: 10 }}
                                            />}
                                            <DropDown
                                                mode='outlined'
                                                label='Gender'
                                                visible={showGender}
                                                showDropDown={() => setShowGender(true)}
                                                onDismiss={() => setShowGender(false)}
                                                list={[
                                                    { label: 'Male', value: 'male' },
                                                    { label: 'Female', value: 'female' },
                                                    { label: 'Other', value: 'other' }
                                                ]}
                                                value={values.gender}
                                                setValue={handleChange('gender')}
                                                activeColor={primaryBlue}
                                                inputProps={{
                                                    outlineColor: lightGray,
                                                    style: {
                                                        marginTop: 10
                                                    },
                                                    right: <TextInput.Icon icon={'chevron-down'} />
                                                }}
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
                                                style={{ marginVertical: 10 }}
                                            />

                                            <Button
                                                mode='contained'
                                                style={{ width: '100%', borderRadius: 9, marginTop: 10 }}
                                                buttonColor={primaryBlue}
                                                labelStyle={{ fontSize: 16 }}
                                            >Sign Up</Button>
                                        </View>
                                    </View>
                                )
                            }}
                        </Formik>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: 'Roboto Regular', fontSize: 16, color: textLightGray }}>Already have an account? </Text>
                            <Button
                                mode='text'
                                textColor={primaryBlue}
                                labelStyle={{ textDecorationLine: 'underline', textDecorationStyle: 'solid', fontFamily: 'Roboto Regular', fontSize: 16 }}
                                onPress={() => {
                                    navigation.navigate('Login')
                                }}
                            >Login</Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: white
    },
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: white
    },
    contentContainer: {
        width: '85%',
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
        margin: 5,
    },
    text: {
        fontFamily: 'Roboto Regular',
        fontSize: 16,
        color: textLightGray,
        width: '70%',
        textAlign: 'center',
    },
    signUpForm: {
        marginTop: 15,
        width: '100%'
    }
})

export default SignUp