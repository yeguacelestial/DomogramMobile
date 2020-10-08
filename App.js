import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'

import { NavigationContainer } from '@react-navigation/native'
import RootStackScreen from './screens/RootStackScreen'

import HomeScreen from './screens/HomeScreen'
import MovementScreen from './screens/MovementScreen'


const Drawer = createDrawerNavigator()
const HomeStack = createStackNavigator()
const MovementStack = createStackNavigator()

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
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
    </HomeStack.Navigator>
  )
}


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


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
      >
        <Drawer.Screen name="Home" component={HomeStackScreen}></Drawer.Screen>
        <Drawer.Screen name="Movimiento" component={MovementStackScreen}></Drawer.Screen>
      </Drawer.Navigator>
      {/* <RootStackScreen /> */}
    </NavigationContainer>
  )
}

export default App