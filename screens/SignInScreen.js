import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    TextInput,
    StatusBar,
} from 'react-native'

import { useTheme } from 'react-native-paper'

// Expo Icons
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient'
import * as Animatable from 'react-native-animatable'

import { AuthContext } from '../components/context'


// TRANSLATIONS
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'


// Traducciones dependiendo del lenguaje
i18n.translations = {
    ...i18n.translations.en,
    es: {
        login1: "¡Bienvenido a Domogram!",
        login2: "Correo electrónico",
        login3: "Tu correo aquí",
        login4: "Contraseña",
        login5: "Tu contraseña aquí",
        login6: "Iniciar sesión",
        login7: "Regístrate",
    },

    en: {
        login1: "Welcome to Domogram!",
        login2: "E-mail",
        login3: "Your e-mail here",
        login4: "Password",
        login5: "Your password here",
        login6: "Log In",
        login7: "Sign Up",
    }
}

// Set the locale once at the beginning of the app
// i18n.locale = Localization.locale

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;


const SignInScreen = ({ navigation }) => {

    /* States */
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })

    const { colors } = useTheme()

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

    const loginHandle = (username, password) => {
        signIn(username, password)
    }

    return (
        <View style={styles.container}>
            {/* StatusBar */}
            <StatusBar backgroundColor='#00796B' barStyle="light-content" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.text_header}>
                    {/* ¡Bienvenido a Domogram! */}
                    {i18n.t('login1')}
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
                    {i18n.t('login2')}
                </Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        size={24}
                        color={colors.text} />

                    {/* Placeholder */}
                    <TextInput
                        placeholder={i18n.t('login3')}
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
                <Text style={[styles.text_footer, { marginTop: 35 }, { color: colors.text }]}>
                    {/* Contraseña */}
                    {i18n.t('login4')}
                </Text>
                <View style={styles.action}>
                    <AntDesign
                        name="lock1"
                        size={24}
                        color={colors.text}
                    />

                    {/* Placeholder */}
                    <TextInput
                        placeholder="Tu contraseña aquí"
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

                {/* Botón "Iniciar sesión" */}
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        // onPress={() => handleLoginForm({ email: data.email, password: data.password })}
                        // onPress={() => { signIn() }}
                        onPress={() => { loginHandle(data.email, data.password) }}
                    >
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, { color: 'white' }]}>
                                {/* Iniciar sesión */}
                                {i18n.t('login6')}
                            </Text>
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
                            {/* Regístrate */}
                            {i18n.t('login7')}
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