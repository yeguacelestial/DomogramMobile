import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { NavigationContainer } from '@react-navigation/native'

import RootStackScreen from './screens/RootStackScreen'

// Drawer (menu)
import HomeStackScreen from './screens/drawer_stack/HomeStackScreen'
import MovementStackScreen from './screens/drawer_stack/MovementStackScreen'
import LightsStackScreen from './screens/drawer_stack/LightsStackScreen'
import TemperatureStackScreen from './screens/drawer_stack/TemperatureStackScreen'
import ReportStackScreen from './screens/drawer_stack/ReportStackScreen'


const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home">

        <Drawer.Screen name="Home" component={HomeStackScreen}></Drawer.Screen>
        <Drawer.Screen name="Movimiento" component={MovementStackScreen}></Drawer.Screen>
        <Drawer.Screen name="Luces" component={LightsStackScreen}></Drawer.Screen>
        <Drawer.Screen name="Temperatura y humedad" component={TemperatureStackScreen}></Drawer.Screen>
        <Drawer.Screen name="Reporte general" component={ReportStackScreen}></Drawer.Screen>

      </Drawer.Navigator>
      {/* <RootStackScreen /> */}
    </NavigationContainer>
  )
}

export default App