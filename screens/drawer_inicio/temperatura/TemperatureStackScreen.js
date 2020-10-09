import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons'
import TemperatureScreen from './TemperatureScreen'

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
                name="Temperatura y humedad"
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