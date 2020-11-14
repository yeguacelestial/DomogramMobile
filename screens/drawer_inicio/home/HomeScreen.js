import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    // StatusBar
} from 'react-native'

import { useTheme } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

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
    })

    const { colors } = useTheme()

    // const theme = useTheme()
    function handleButtonContent() {
        // API calls here

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
            })
        }

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
                />
            })
        }
    }

    return (
        <View style={styles.container}>
            {/* <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} /> */}
            <Text style={[styles.title, { color: colors.text }]}>Domogram</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Gestiona tu hogar, desde cualquier lugar del mundo.</Text>

            {/* Home Icon */}
            {casa.estadoIcon}
            <Text style={[styles.homeStateText, { color: casa.estadoColor }]}>{casa.estadoTexto}</Text>

            <Text style={[styles.text, { color: colors.text, paddingBottom: 10 }]}>Abre el portón principal para una mejor experiencia con Domogram.</Text>

            <InicioButton
                customBackgroundColor={casa.botonColor}
                customText={casa.botonText}
                customImage={casa.botonIcon}

                handlePress={next => {
                    // alert("Abriendo casa...")
                    handleButtonContent()
                    next()
                    // setTimeout(() => alert("Listo"), 2000)
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