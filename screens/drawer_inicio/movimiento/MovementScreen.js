import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

import { useTheme } from '@react-navigation/native'


const MovementScreen = ({ navigation }) => {

    const { colors } = useTheme()

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: colors.text }]}>Sensor de movimiento</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>El sensor ultrasónico calcula la distancia a la que hay movimiento con tecnología de ultrasonido.</Text>

            <Text style={[styles.text, { color: colors.text }]}>Ultima distancia capturada: 3 metros.</Text>

            <Button
                title="Refrescar distancia"
            // onPress={() => navigation.popToTop()}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
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
        paddingTop: 20,
    }
})

export default MovementScreen