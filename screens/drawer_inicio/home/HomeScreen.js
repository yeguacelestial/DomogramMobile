import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    // StatusBar
} from 'react-native'

import { useTheme } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

import { Fold, Wave } from 'react-native-animated-spinkit'

import { domogram_api_endpoint } from '../../../screens/config'

// Components
import InicioButton from '../../../components/InicioButton'

// SVG Components
import HomeOff from '../../../resources/no_meeting_room-24px.svg'
import HomeOn from '../../../resources/meeting_room-24px.svg'


const HomeScreen = ({ navigation }) => {
    /* Casa States */
    const [casa, setCasa] = React.useState({
        abierta: false,
        estadoTexto: 'La casa está cerrada.',
        estadoColor: '#009387',
        estadoIcon:
            <HomeOff
                width={200}
                height={200}
                style={{ color: '#009387', paddingTop: 240 }}
            />,

        botonText: 'Abrir portón principal',
        botonColor: '#009387',
        botonIcon: <HomeOn
            width={40}
            height={40}
            style={{ color: 'white' }}
        />,

        isLoading: false,
    })

    const { colors } = useTheme()

    // Mandar señal a la API para que abra la casa
    async function abrirPortonApi() {
        try {
            const result = await fetch(`${domogram_api_endpoint}/dispositivo/puertas`, {
                method: 'put',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // Abrir puerta
                    "parametros": {
                        "dato_serial": "A",
                        "abierto": true
                    }
                })
            })

            const response = await result.json()
            // alert(JSON.stringify(response))

        } catch (error) {
            console.error(error)
        }
    }

    // Mandar señal a la API para que abra la casa
    async function cerrarPortonApi() {
        try {
            const result = await fetch(`${domogram_api_endpoint}/dispositivo/puertas`, {
                method: 'put',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // Abrir puerta
                    "parametros": {
                        "dato_serial": "S",
                        "abierto": false
                    }
                })
            })

            const response = await result.json()
            // alert(JSON.stringify(response))

        } catch (error) {
            console.error(error)
        }
    }

    function handlePortonButton() {
        // Si la casa está abierta, cierrala.
        if (casa.abierta) {
            setCasa({
                abierta: false,
                estadoTexto: 'La casa está cerrada.',
                estadoColor: '#009387',
                estadoIcon:
                    <Animatable.View
                        animation="flipOutY"
                        iterationCount={1}
                        direction="reverse"
                    >
                        <HomeOff
                            width={200}
                            height={200}
                            style={{ color: '#009387', paddingTop: 240 }}
                        />
                    </Animatable.View>,

                botonText: 'Abrir portón principal',
                botonColor: '#009387',
                botonIcon: <HomeOn
                    width={40}
                    height={40}
                    style={{ color: 'white' }}
                />,
                isLoading: false,
            })
            cerrarPortonApi()
        }

        // De lo contrario, abrela.
        else {
            setCasa({
                abierta: true,
                estadoTexto: 'La casa está abierta.',
                estadoColor: 'red',
                estadoIcon:
                    <Animatable.View
                        animation="flipInY"
                        iterationCount={1}
                        direction="alternate"
                    >
                        <HomeOn
                            width={200}
                            height={200}
                            style={{ color: 'red', paddingTop: 240 }}
                        />
                    </Animatable.View>,

                botonText: 'Cerrar portón principal',
                botonColor: 'red',
                botonIcon: <HomeOff
                    width={40}
                    height={40}
                    style={{ color: 'white' }}
                />,
                isLoading: false,
            })
            abrirPortonApi()
        }
    }

    return (
        <View style={styles.container}>
            {/* <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} /> */}
            <Text style={[styles.title, { color: colors.text }]}>Domogram</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Gestiona tu hogar, desde cualquier parte del mundo.</Text>

            {/* Home Icon */}
            {casa.estadoIcon}
            <Text style={[styles.homeStateText, { color: casa.estadoColor }]}>{casa.estadoTexto}</Text>

            <Text style={[styles.text, { color: colors.text, paddingBottom: 10 }]}>Abre el portón principal para una mejor experiencia con Domogram.</Text>

            <InicioButton
                customBackgroundColor={casa.botonColor}
                customText={casa.botonText}
                customImage={casa.botonIcon}
                isLoading={casa.isLoading}
                handlePress={next => {
                    setCasa({
                        ...casa,
                        botonIcon: <Text> </Text>,
                        botonText: <Wave size={38} color='#FFF' style={{ paddingLeft: -40 }} />,
                        estadoTexto: casa.abierta ? 'Cerrando casa...' : 'Abriendo casa...',
                        estadoIcon:
                            <Fold size={100} color={casa.estadoColor} style={{ marginTop: 40, marginBottom: 50 }} />,
                        isLoading: true,
                    })
                    setTimeout(() => { handlePortonButton() }, 6000)
                    next()
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 50,
    },

    subtitle: {
        fontSize: 20,
        textAlign: "center",
    },

    text: {
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
        paddingTop: 20,
    },

    homeStateText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: -30
    }
})


export default HomeScreen