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

// Expo Icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient'
import * as Animatable from 'react-native-animatable'

import { domogram_api_endpoint } from './config'

import { AuthContext } from '../components/context'


const SignInScreen = ({ navigation }) => {

    /* States */
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })

    /* Authorization context */
    const { signIn } = React.useContext(AuthContext)

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

    // Handling Password entry
    const updateSecureTextEntry = () => {
        setData({
            ...data,

            // Set entry field to the opposite boolean
            secureTextEntry: !data.secureTextEntry
        })
    }

    // Handling Login fields
    const handleLoginForm = async (form_data) => {
        // If fields are not empty...
        if (form_data.email.length > 0 && form_data.password.length > 0) {
            const result = await fetch(`${domogram_api_endpoint}/signin`, {
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
                Alert.alert('¡Hola!', response_value)

            } else if (result.ok && response.error) {
                console.log(JSON.stringify(response))
                Alert.alert('Algo salió mal', response_value)

            } else {
                console.log(JSON.stringify(response))
                Alert.alert('Algo salió mal', 'Hay un problema con la API. Por favor, contacta al desarrollador.')
            }
        }

        else {
            alert("Por favor, llena los campos requeridos.")
        }
    }

    const loginHandle = (username, password) => {
        signIn(username, password)
    }

    return (
        <View style={styles.container}>
            {/* StatusBar */}
            <StatusBar backgroundColor='#00796B' barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.text_header}>¡Bienvenido a Domogram!</Text>
            </View>

            {/* Footer */}
            <Animatable.View
                style={styles.footer}
                animation="fadeInUpBig"
            >

                {/* Correo electrónico field */}
                <Text style={styles.text_footer}>Correo electrónico</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        size={24}
                        color="black" />

                    {/* Placeholder */}
                    <TextInput
                        placeholder="Tu correo aquí"
                        style={styles.textInput}
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
                <Text style={[styles.text_footer, { marginTop: 35 }]}>
                    Contraseña
                </Text>
                <View style={styles.action}>
                    <AntDesign
                        name="lock1"
                        size={24}
                        color="green"
                    />

                    {/* Placeholder */}
                    <TextInput
                        placeholder="Tu contraseña aquí"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        style={styles.textInput}
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

                {/* Botón "Iniciar sesión" */}
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        // onPress={() => handleLoginForm({ email: data.email, password: data.password })}
                        // onPress={() => { signIn() }}
                        onPress={() => { loginHandle(data.username, data.password) }}
                    >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, { color: 'white' }]}>Iniciar sesión</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signIn, {
                            borderColor: '#009387',
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, { color: '#009387' }]}>
                            Regístrate
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

export default SignInScreen