import React from 'react'

import {
  View,
  ActivityIndicator,
  Alert,
  LogBox
} from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native'

import AsyncStorage from '@react-native-community/async-storage'

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper'

import RootStackScreen from './screens/RootStackScreen'

// Bottom tab navigator
import MainTabScreen from './screens/MainTabScreen'

// DrawerContent
import DrawerContent from './screens/DrawerContent'

// Authentication context
import { AuthContext } from './components/context'

import { domogram_api_endpoint } from './screens/config'

// DEBUG ON EXPO
LogBox.ignoreAllLogs(true)

const Drawer = createDrawerNavigator()

// TRANSLATIONS
import i18n from 'i18n-js'

import { en, es } from './screens/translations.json'

// Traducciones dependiendo del lenguaje
i18n.translations = { en, es }

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true


const App = () => {

  // Dark mode state
  const [isDarkTheme, setIsDarkTheme] = React.useState(false)

  const initialLoginState = {
    isLoading: true,
    email: null,
    userToken: null
  }

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333',
      buttonBackgroundDarker: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff',
      buttonBackgroundDarker: 'white'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme

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
          email: action.id,
          userToken: action.token,
          isLoading: false
        }

      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false
        }

      case 'REGISTER':
        return {
          ...prevState,
          email: action.id,
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

  // Handle auth operations
  const authContext = React.useMemo(() => ({

    // API calling for signIn
    signIn: async (email, password) => {
      let userToken
      userToken = null

      if (email.length > 0 && password.length > 0) {
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
              email: email,
              password: password
            })
          })

          const response = await result.json()
          const response_value = Object.values(response)[0]

          // Handling different types of responses
          if (result.ok && response.success) {
            console.log(JSON.stringify(response))
            Alert.alert(i18n.t('saludo1'), i18n.t('saludo2'))
            dispatch({
              type: 'LOGIN',
              id: email,
              token: userToken
            })

          } else if (result.ok && response.error) {
            console.log(JSON.stringify(response))
            // Alert.alert('Algo salió mal', response_value)
            Alert.alert(i18n.t('algomalo1'), i18n.t('algomalo2'))
            return

          } else {
            console.log(JSON.stringify(response))
            Alert.alert(i18n.t('algomalo1'), i18n.t('algomalo3'))
            return
          }

        } catch (e) {
          console.log(e)
          Alert.alert(i18n.t('algomalo1'), i18n.t('algomalo2'))
          return
        }
      }

      else {
        Alert.alert(i18n.t('login8'), i18n.t('login9'))
      }

      // dispatch({
      //   type: 'LOGIN',
      //   id: email,
      //   token: userToken
      // })
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
    },

    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme)
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
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
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
    </PaperProvider>
  )
}

export default App