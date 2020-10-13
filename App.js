import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import RootStackScreen from './screens/RootStackScreen'

// Bottom tab navigator
import MainTabScreen from './screens/MainTabScreen'

// DrawerContent
import DrawerContent from './screens/DrawerContent'


const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Inicio"
        drawerContent={props => <DrawerContent {...props} />}>

        <Drawer.Screen name="Inicio" component={MainTabScreen}></Drawer.Screen>

      </Drawer.Navigator>
      {/* <RootStackScreen /> */}
    </NavigationContainer>
  )
}

export default App