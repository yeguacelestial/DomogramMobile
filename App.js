import React from 'react'

import { View, Text, ActivityIndicator } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import RootStackScreen from './screens/RootStackScreen'

// Bottom tab navigator
import MainTabScreen from './screens/MainTabScreen'

// DrawerContent
import DrawerContent from './screens/DrawerContent'

// Authentication context
import { AuthContext } from './components/context'


const Drawer = createDrawerNavigator()

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)

  // Simulating loading screen -- Check in 1000 ms if user is logged in or not
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  // Hnadle auth operations
  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('abcdefghij')
      setIsLoading(false)
    },

    signOut: () => {
      setUserToken(null)
      setIsLoading(false)
    },

    signUp: () => {
      setUserToken('abcdefghij')
      setIsLoading(false)
    }
  }), [])

  // If screen isLoading is set to true, display a nice spinner
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator
          size="large"
          color="green" />
      </View>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? ( //If userToken is not NULL
          <Drawer.Navigator
            initialRouteName="Inicio"
            drawerContent={props => <DrawerContent {...props} />}>

            <Drawer.Screen name="Inicio" component={MainTabScreen}></Drawer.Screen>

          </Drawer.Navigator>
        )
          : // Else (if userToken is NULL), show RootStack
          <RootStackScreen />
        }

      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App