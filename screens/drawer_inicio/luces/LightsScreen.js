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
import LuzIcono from '../../../resources/flash_on-24px.svg'


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

            <Text style={[styles.text, {
                color: colors.text,
                fontWeight: 'bold',
                paddingBottom: 10
            }]}>Pulsa el siguiente botón para encender y apagar todas las luces a la vez.</Text>

            <InicioButton
                customBackgroundColor="#c41c00"
                customText={"Encender todas las luces"}
                customImage={<LuzIcono
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