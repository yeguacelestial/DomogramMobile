import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable'

import { useTheme } from '@react-navigation/native'

// TRANSLATIONS
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'

import { en, es } from './translations.json'
import LocalizationContext from './LocalizationContext'

import RNPickerSelect from 'react-native-picker-select'

// Traducciones dependiendo del lenguaje
i18n.translations = { en, es }

// Set the locale once at the beginning of the app
// i18n.locale = "es"

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

const SplashScreen = ({ navigation }) => {

    const { colors } = useTheme()
    const [language, setLanguage] = React.useState({ langKey: "es" })
    i18n.locale = language.langKey

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    source={require('../assets/robot.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>

            {/* Footer */}
            <Animatable.View
                style={[
                    styles.footer,
                    { backgroundColor: colors.background }
                ]}
                animation="fadeInUpBig"
            >
                <Text style={[styles.title, { color: colors.text }]}>
                    {/* Domogram, tu asistente doméstico */}
                    {i18n.t('splash1')}
                </Text>
                <Text style={[styles.text, { color: colors.text }]}>
                    {i18n.t('splash2')}
                </Text>

                <RNPickerSelect
                    onValueChange={(value) => {
                        setLanguage({ langKey: value == "es" ? "es" : "en" })
                    }}
                    placeholder={{
                        label: "Lenguaje/Language"
                    }}
                    items={[
                        { label: 'English', value: 'en' },
                        { label: 'Español', value: 'es' }
                    ]}
                />

                {/* Botón 'Empieza' */}
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>
                                {/* Empezar */}
                                {i18n.t('splash3')}
                            </Text>
                            <AntDesign name="right" size={20} color="white" />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </View>
    )
}

// Get the device height
const { height } = Dimensions.get('screen')
const height_logo = height * 0.35

const styles = StyleSheet.create({
    container: {
        // Flex 1: Taking 1/3 of screen
        flex: 1,
        backgroundColor: '#00796B'
    },

    header: {
        // Flex 2: Taking 2/3 of screen
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },

    logo: {
        width: height_logo,
        height: height_logo
    },

    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },

    text: {
        color: 'grey',
        marginTop: 5
    },

    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },

    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },

    textSign: {
        color: 'white',
        fontWeight: 'bold',
    }
})

export default SplashScreen