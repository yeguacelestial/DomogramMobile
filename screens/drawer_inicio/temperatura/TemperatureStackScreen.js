import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons'
import TemperatureScreen from './TemperatureScreen'

// TRANSLATIONS
import i18n from 'i18n-js'

import { en, es } from '../../translations.json'

// Traducciones dependiendo del lenguaje
i18n.translations = { en, es }

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true

const background_color = '#694fad'
const TemperatureStack = createStackNavigator()

const TemperatureStackScreen = ({ navigation }) => {
    return (
        <TemperatureStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: `${background_color}`,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }}>
            <TemperatureStack.Screen
                name={i18n.t('temperatura')}
                component={TemperatureScreen}
                options={{
                    headerLeft: () => (
                        <Icon.Button
                            name="ios-menu"
                            size={25}
                            backgroundColor={`${background_color}`}
                            onPress={() => {
                                navigation.openDrawer()
                            }}
                        />
                    )
                }}
            />
        </TemperatureStack.Navigator>
    )
}

export default TemperatureStackScreen