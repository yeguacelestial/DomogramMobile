import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons'
import TemperatureScreen from '../navigation/TemperatureScreen'


const TemperatureStack = createStackNavigator()

const TemperatureStackScreen = ({ navigation }) => {
    return (
        <TemperatureStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
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
                            backgroundColor="#009387"
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