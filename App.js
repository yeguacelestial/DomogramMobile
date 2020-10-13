import React from 'react'

import { View, Text, ActivityIndicator } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import AyncStorage from '@react-native-community/async-storage'

import RootStackScreen from './screens/RootStackScreen'

// Bottom tab navigator
import MainTabScreen from './screens/MainTabScreen'

// DrawerContent
import DrawerContent from './screens/DrawerContent'

// Authentication context
import { AuthContext } from './components/context'
import AsyncStorage from '@react-native-community/async-storage'


const Drawer = createDrawerNavigator()

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true)
  // const [userToken, setUserToken] = React.useState(null)

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        }

      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }

      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        }

      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        }
    }
  }

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

  React.useEffect(() => {
    setTimeout(async () => {
      let userToken
      userToken = null

      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e)
      }

      dispatch({
        type: 'RETRIEVE_TOKEN',
        token: userToken
      })
    }, 1000)
  }, [])

  // Hnadle auth operations
  const authContext = React.useMemo(() => ({

    // API calling for signIn
    signIn: async (userName, password) => {
      // setUserToken('abcdefghij')
      // setIsLoading(false)
      let userToken
      userToken = null

      if (userName == 'user' && password == 'pass') {
        try {
          userToken = 'asdasdasd'
          await AsyncStorage.setItem('userToken', userToken)
        } catch (e) {
          console.log(e)
        }

      }

      dispatch({
        type: 'LOGIN',
        id: userName,
        token: userToken
      })
    },

    // Removing userToken from async storage
    signOut: async () => {
      // setUserToken(null)
      // setIsLoading(false)
      try {
        await AsyncStorage.removeItem('userToken')
      } catch (e) {
        console.log(e)
      }
      dispatch({
        type: 'LOGOUT',
      })
    },

    signUp: () => {
      setUserToken('abcdefghij')
      setIsLoading(false)
    }
  }), [])

  // If screen isLoading is set to true, display a nice spinner
  if (loginState.isLoading) {
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
        {loginState.userToken !== null ? ( //If userToken is not NULL
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