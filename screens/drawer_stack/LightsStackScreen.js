import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons'
import LightsScreen from '../navigation/LightsScreen'


const LightsStack = createStackNavigator()

const LightsStackScreen = ({ navigation }) => {
    return (
        <LightsStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }}>
            <LightsStack.Screen
                name="Luces"
                component={LightsScreen}
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
        </LightsStack.Navigator>
    )
}

export default LightsStackScreen