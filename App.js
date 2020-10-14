import React from 'react'

import {
  View,
  Text,
  ActivityIndicator,
  Alert
} from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import AsyncStorage from '@react-native-community/async-storage'

import RootStackScreen from './screens/RootStackScreen'

// Bottom tab navigator
import MainTabScreen from './screens/MainTabScreen'

// DrawerContent
import DrawerContent from './screens/DrawerContent'

// Authentication context
import { AuthContext } from './components/context'

import { domogram_api_endpoint } from './screens/config'


const Drawer = createDrawerNavigator()

const App = () => {

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
      let userToken
      userToken = null

      if (userName.length > 0 && password.length > 0) {
        try {
          userToken = 'thisisageneratedToken!'
          await AsyncStorage.setItem('userToken', userToken)

          const result = await fetch(`${domogram_api_endpoint}/signin`, {
            method: 'post',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: userName,
              password: password
            })
          })

          const response = await result.json()
          const response_value = Object.values(response)[0]

          // Handling different types of responses
          if (result.ok && response.success) {
            console.log(JSON.stringify(response))
            Alert.alert('¡Hola!', response_value)

          } else if (result.ok && response.error) {
            console.log(JSON.stringify(response))
            Alert.alert('Algo salió mal', response_value)
            return

          } else {
            console.log(JSON.stringify(response))
            Alert.alert('Algo salió mal', 'Hay un problema con la API. Por favor, contacta al desarrollador.')
            return
          }

        } catch (e) {
          console.log(e)
          Alert.alert('Algo salió mal', 'Whoops! Algo salió mal al enviar tus datos.')
          return
        }
      }

      else {
        Alert.alert('¿Se te olvida algo?', 'Por favor, llena los campos requeridos.')
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