import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

import { useTheme } from '@react-navigation/native'


const LightsScreen = ({ navigation }) => {

    const { colors } = useTheme()

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: colors.text }]}>Luces del hogar</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Controla la iluminación de las distintas habitaciones.</Text>

            <Button
                title="Cuarto"
            />

            <Button
                title="Estancia"
            />

            <Button
                title="Baño"
            />

            <Button
                title="Cocina"
            />

            <Button
                title="Entrada"
            />

            <Button
                title="Comedor"
            />

            <Text style={[styles.text, { color: colors.text }]}>Pulsa el siguiente botón para encender y apagar todas las luces a la vez.</Text>

            <Button
                title="Encender todas las luces"
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

export default LightsScreen