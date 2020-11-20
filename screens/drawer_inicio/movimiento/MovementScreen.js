import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import { useTheme } from '@react-navigation/native'

import { Pulse, Bounce } from 'react-native-animated-spinkit'

// // Components
// import InicioButton from '../../../components/InicioButton'

// // SVG Components
// import RefreshIcono from '../../../resources/refresh-24px.svg'

import { domogram_api_endpoint } from '../../../screens/config'


const MovementScreen = ({ navigation }) => {

    const { colors } = useTheme()

    // Security animations state
    const [secAnimations, setSecAnimations] = React.useState({
        security_animation: <Pulse size={150} color={'#1f65ff'} style={{ marginTop: 40, marginBottom: 50 }} />
    })

    // Distancia state
    const [ultrasonico, setUltrasonico] = React.useState({
        distancia: 14.00
    })

    const getDistanciaApi = async () => {
        try {
            let response = await fetch(`${domogram_api_endpoint}/dispositivo/ultrasonico`)
            let json = await response.json()
            let data_parametros = await json.data.parametros
            let distancia = await data_parametros.distancia

            console.log("JSON => " + json)
            console.log("DISTANCIA => " + distancia)
            // return json[0]
            return distancia

        } catch (error) {
            console.error(error)
        }
    }

    React.useEffect(() => {
        setInterval(async () => {
            // API Calls
            const random_dist = await getDistanciaApi()
            setUltrasonico({ distancia: random_dist })
        }, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: colors.text }]}>Capturando movimiento...</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Actualizando la distancia del objeto más cercano por ultrasonido...</Text>

            {ultrasonico.distancia >= 12 ?
                <Pulse size={150} color={'#1f65ff'} style={{ marginTop: 40, marginBottom: 50 }} />
                :
                <Bounce size={150} color={'red'} style={{ marginTop: 40, marginBottom: 50 }} />}

            <Text style={[styles.distanciaTexto, { color: colors.text, paddingBottom: 5 }]}>El objeto más cercano está a {ultrasonico.distancia / 100} metros.</Text>

            { ultrasonico.distancia >= 12 ?
                <Text style={[styles.distanciaTexto, { color: 'green', paddingBottom: 5 }]}>El hogar está seguro.</Text>
                :
                <Text style={[styles.distanciaTexto, { color: 'red', paddingBottom: 5 }]}>Hay algo/alguien cerca.</Text>
            }

            {/* <InicioButton
                customBackgroundColor="#1f65ff"
                customText={"Refrescar distancia"}
                customImage={<RefreshIcono
                    width={40}
                    height={40}
                    style={{ color: 'white' }}
                />}

                handlePress={next => {
                    alert("Refrescando distancia...")
                    next()
                    // setTimeout(() => alert("Listo"), 2000)
                }}
            /> */}

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

    distanciaTexto: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    }

})

export default MovementScreen