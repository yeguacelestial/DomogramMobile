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
import TemperaturaIcono from '../../../resources/ac_unit-24px.svg'


const TemperatureScreen = ({ navigation }) => {

    const { colors } = useTheme()

    const theme = useTheme()

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: colors.text }]}>Temperatura y humedad</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Monitorea la temperatura interior y el porcentaje de humedad.</Text>

            <TemperaturaIcono
                width={200}
                height={200}
                style={{ color: '#694fad', paddingTop: 250 }}
            />

            <Text style={[styles.subtitle,
            {
                color: theme.dark ? colors.text : '#694fad',
                fontWeight: 'bold'
            }]}>
                Temperatura: 10°C</Text>

            <Text style={[styles.subtitle,
            {
                color: theme.dark ? colors.text : '#694fad',
                fontWeight: 'bold',
                paddingBottom: 20
            }]}>
                Humedad: 50%</Text>

            <InicioButton
                customBackgroundColor="#694fad"
                customText={"Actualizar temp. y humedad"}
                customImage={<TemperaturaIcono
                    width={40}
                    height={40}
                    style={{ color: 'white' }}
                />}

                handlePress={next => {
                    alert("Actualizando temperatura y humedad...")
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

export default TemperatureScreen