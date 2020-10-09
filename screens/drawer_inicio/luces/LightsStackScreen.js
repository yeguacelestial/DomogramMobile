import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons'
import LightsScreen from './LightsScreen'


const background_color = '#c41c00'
const LightsStack = createStackNavigator()

const LightsStackScreen = ({ navigation }) => {
    return (
        <LightsStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: `${background_color}`,
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
                            backgroundColor={`${background_color}`}
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