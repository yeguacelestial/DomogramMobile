import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

import { useTheme } from '@react-navigation/native'

// Components
import InicioButton from '../../../components/InicioButton'

// SVG Components
import MovimientoIcono from '../../../resources/track_changes-24px.svg'
import RefreshIcono from '../../../resources/refresh-24px.svg'

const MovementScreen = ({ navigation }) => {

    const { colors } = useTheme()

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: colors.text }]}>Sensor de movimiento</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Distancia a la que hay movimiento, calculada a través de ultrasonido.</Text>

            <MovimientoIcono
                width={200}
                height={200}
                style={{ color: '#1f65ff', paddingTop: 250 }}
            />

            <Text style={[styles.distanciaTexto, { color: colors.text, paddingBottom: 15 }]}>Ultima distancia: 3 metros.</Text>

            <InicioButton
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

    distanciaTexto: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
    }

})

export default MovementScreen