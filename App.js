import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer, TabActions } from '@react-navigation/native'


import RootStackScreen from './screens/RootStackScreen'

// Drawer (menu)
import HomeStackScreen from './screens/drawer_stack/HomeStackScreen'
import MovementStackScreen from './screens/drawer_stack/MovementStackScreen'
import LightsStackScreen from './screens/drawer_stack/LightsStackScreen'
import TemperatureStackScreen from './screens/drawer_stack/TemperatureStackScreen'
import ReportStackScreen from './screens/drawer_stack/ReportStackScreen'

// Material Bottom Tab Navigator
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'


import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { Entypo } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'

const Tab = createMaterialBottomTabNavigator()

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{ backgroundColor: 'tomato' }}
    >

      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />

      <Tab.Screen
        name="Movimiento"
        component={MovementStackScreen}
        options={{
          tabBarLabel: 'Movimiento',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="radar" color={color} size={26} />
          )
        }}
      />

      <Tab.Screen
        name="Luces"
        component={LightsStackScreen}
        options={{
          tabBarLabel: 'Luces',
          tabBarColor: '#c41c00',
          tabBarIcon: ({ color }) => (
            <Entypo name="light-up" size={24} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Temperatura y humedad"
        component={TemperatureStackScreen}
        options={{
          tabBarLabel: 'Temperatura',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="temperature-low" size={24} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Reporte"
        component={ReportStackScreen}
        options={{
          tabBarLabel: 'Reporte',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="list-alt" size={24} color={color} />
          )
        }}
      />

    </Tab.Navigator>
  )
}


const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home">

        {/* <Drawer.Screen name="Home" component={HomeStackScreen}></Drawer.Screen> */}
        <Drawer.Screen name="Home" component={MainTabScreen}></Drawer.Screen>
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