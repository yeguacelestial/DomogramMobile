import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons'
import ReportScreen from '../navigation/ReportScreen'


const ReportStack = createStackNavigator()

const ReportStackScreen = ({ navigation }) => {
    return (
        <ReportStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        }}>
            <ReportStack.Screen
                name="Reporte"
                component={ReportScreen}
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
        </ReportStack.Navigator>
    )
}

export default ReportStackScreen