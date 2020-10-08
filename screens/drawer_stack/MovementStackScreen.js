import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons'
import MovementScreen from '../navigation/MovementScreen'


const MovementStack = createStackNavigator()

const MovementStackScreen = ({ navigation }) => {
    return (
        <MovementStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }}>
            <MovementStack.Screen
                name="Movimiento"
                component={MovementScreen}
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
        </MovementStack.Navigator>
    )
}

export default MovementStackScreen