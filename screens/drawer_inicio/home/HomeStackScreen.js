import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from './HomeScreen'

// TRANSLATIONS
import i18n from 'i18n-js'

import { en, es } from '../../translations.json'

// Traducciones dependiendo del lenguaje
i18n.translations = { en, es }

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true


const HomeStack = createStackNavigator()

const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }}>
            <HomeStack.Screen
                name={i18n.t('home')}
                component={HomeScreen}
                options={{
                    headerLeft: () => (
                        <Icon.Button
                            name="ios-menu"
                            size={25}
                            backgroundColor="#009387"
                            onPress={() => {
                                navigation.openDrawer()
                            }}
                        />
                    )
                }}
            />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen