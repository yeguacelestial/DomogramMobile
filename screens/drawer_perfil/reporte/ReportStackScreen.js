import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Icon from 'react-native-vector-icons/Ionicons'
import ReportScreen from './ReportScreen'

const background_color = '#d02860'
const ReportStack = createStackNavigator()

const ReportStackScreen = ({ navigation }) => {
    return (
        <ReportStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: `${background_color}`,
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
                            backgroundColor={`${background_color}`}
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