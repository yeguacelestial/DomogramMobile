import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    TextInput,
    StatusBar,
    Alert
} from 'react-native'

import { useTheme } from 'react-native-paper'

// Expo Icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient'
import * as Animatable from 'react-native-animatable'

import { domogram_api_endpoint } from './config'

// TRANSLATIONS
import i18n from 'i18n-js'

import { en, es } from './translations.json'

// Traducciones dependiendo del lenguaje
i18n.translations = { en, es }

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true


const SignUpScreen = ({ navigation }) => {

    /* States */
    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    })

    const { colors } = useTheme()

    /* Functions */

    // Handling E-mail length change
    const textInputChange = (value) => {
        if (value.length !== 0) {
            // First, fetch existing data, then add new value
            setData({
                ...data,
                email: value,
                check_textInputChange: true
            })
        }
        else {
            setData({
                ...data,
                email: value,
                check_textInputChange: false
            })
        }
    }

    // Handling password change
    const handlePasswordChange = (value) => {
        setData({
            ...data,
            password: value
        })
    }

    // Handling password change
    const handleConfirmPasswordChange = (value) => {
        setData({
            ...data,
            confirm_password: value
        })
    }

    // Handling Password entry
    const updateSecureTextEntry = () => {

        setData({
            ...data,

            // Set entry field to the opposite boolean
            secureTextEntry: !data.secureTextEntry
        })
    }

    // Handling Confirm Password entry
    const updateConfirmSecureTextEntry = () => {

        setData({
            ...data,

            // Set entry field to the opposite boolean
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
    }

    // Handling registration fields
    const handleRegisterForm = async (form_data) => {

        // If fields are not empty and passwords matches
        if (form_data.email.length > 0 &&
            form_data.password.length > 0 &&
            form_data.password === form_data.confirm_password) {

            const result = await fetch(`${domogram_api_endpoint}/signup`, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: form_data.email,
                    password: form_data.password
                })
            })

            const response = await result.json()
            const response_value = Object.values(response)[0]

            // Handling different types of responses
            if (result.ok && response.success) {
                console.log(JSON.stringify(response))
                Alert.alert('¡Bienvenido!', response_value)

            } else if (result.ok && response.error) {
                console.log(JSON.stringify(response))
                Alert.alert('Algo salió mal', response_value)
            } else {
                console.log(JSON.stringify(response))
                Alert.alert(i18n.t('login8'), i18n.t('login9'))
            }
        }

        else if (data.password !== data.confirm_password) {
            Alert.alert(i18n.t('password_error1'), i18n.t('password_error2'))
        }

        else {
            Alert.alert(i18n.t('login8'), i18n.t('login9'))
        }
    }


    return (
        <View style={styles.container}>
            {/* StatusBar */}
            <StatusBar backgroundColor='#00796B' barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.text_header}>
                    {/* Registrate ahora para acceder a Domogram */}
                    {i18n.t('registrate1')}
                </Text>
            </View>

            {/* Footer */}
            <Animatable.View
                style={[styles.footer, { backgroundColor: colors.background }]}
                animation="fadeInUpBig"
            >

                {/* Correo electrónico field */}
                <Text style={[styles.text_footer, { color: colors.text }]}>
                    {/* Correo electrónico */}
                    {i18n.t('registrate2')}
                </Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        size={24}
                        color={colors.text} />

                    {/* Placeholder */}
                    <TextInput
                        placeholder={i18n.t('registrate3')}
                        placeholderTextColor="#666666"
                        style={[styles.textInput, { color: colors.text }]}
                        autoCapitalize="none"
                        onChangeText={(value) => textInputChange(value)}
                    />

                    {/* If length of email is greater than 0, display the following icon. */}
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn">
                            <AntDesign
                                name="checkcircle"
                                size={24}
                                color="green"
                            />
                        </Animatable.View>

                        /* Else, display nothing */
                        : null}
                </View>

                {/* Contraseña field */}
                <Text style={[styles.text_footer, { color: colors.text, marginTop: 35 }]}>
                    {/* Contraseña */}
                    {i18n.t('registrate4')}
                </Text>
                <View style={styles.action}>
                    <AntDesign
                        name="lock1"
                        size={24}
                        color={colors.text}
                    />

                    {/* Placeholder */}
                    <TextInput
                        placeholder={i18n.t('registrate5')}
                        placeholderTextColor="#666666"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={[styles.textInput, { color: colors.text }]}
                        autoCapitalize="none"
                        onChangeText={(value) => handlePasswordChange(value)}
                    />

                    {/* Handling password visibility */}
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Entypo
                                name="eye-with-line"
                                size={24}
                                color="gray"
                            />
                            :
                            <Entypo
                                name="eye"
                                size={24}
                                color="gray"
                            />
                        }
                    </TouchableOpacity>
                </View>

                {/* Confirmar contraseña field */}
                <Text style={[styles.text_footer, { color: colors.text, marginTop: 35 }]}>
                    {/* Confirmar contraseña */}
                    {i18n.t('registrate6')}
                </Text>
                <View style={styles.action}>
                    <AntDesign
                        name="lock1"
                        size={24}
                        color={colors.text}
                    />

                    {/* Placeholder */}
                    <TextInput
                        placeholder={i18n.t('registrate7')}
                        placeholderTextColor="#666666"
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        style={[styles.textInput, { color: colors.text }]}
                        autoCapitalize="none"
                        onChangeText={(value) => handleConfirmPasswordChange(value)}
                    />

                    {/* Handling password visibility */}
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.confirm_secureTextEntry ?
                            <Entypo
                                name="eye-with-line"
                                size={24}
                                color="gray"
                            />
                            :
                            <Entypo
                                name="eye"
                                size={24}
                                color="gray"
                            />
                        }
                    </TouchableOpacity>
                </View>

                {/* Botón "Registrarse ahora" */}
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => handleRegisterForm({ email: data.email, password: data.password, confirm_password: data.confirm_password })}
                    >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, { color: 'white' }]}>
                                {i18n.t('registrate8')}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignInScreen')}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, { color: '#009387' }]}>
                            {/* ¿Ya tienes cuenta? Inicia sesión */}
                            {i18n.t('registrate9')}
                        </Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00796B'
    },

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },

    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },

    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },

    text_footer: {
        color: '#05375a',
        fontSize: 18
    },

    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },

    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },

    button: {
        alignItems: 'center',
        marginTop: 50
    },

    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default SignUpScreen