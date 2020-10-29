import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

import { useTheme } from '@react-navigation/native'


const TemperatureScreen = ({ navigation }) => {

    const { colors } = useTheme()

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: colors.text }]}>Temperatura y humedad</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Monitorea la temperatura interior y el porcentaje de humedad.</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Temperatura: 10°C</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Humedad: 50%</Text>

            <Button
                title="Actualizar"
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

export default TemperatureScreen