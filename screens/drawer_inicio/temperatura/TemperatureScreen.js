import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import { useTheme } from '@react-navigation/native'

// React native svg charts
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'

// SVG Components
import TemperaturaIcono from '../../../resources/ac_unit-24px.svg'

import { domogram_api_endpoint } from '../../../screens/config'

// TRANSLATIONS
import i18n from 'i18n-js'

import { en, es } from '../../translations.json'

// Traducciones dependiendo del lenguaje
i18n.translations = { en, es }

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true


const TemperatureScreen = ({ navigation }) => {

    // Theme
    const { colors } = useTheme()
    const theme = useTheme()

    // Distancia state
    const [sensor, setSensor] = React.useState({
        temperatura: 0.0,
        humedad: 0.0
    })

    const [sensorDatos, setSensorDatos] = React.useState({
        temperatura: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20]
    })

    const getTempHumApi = async () => {
        try {
            let response = await fetch(`${domogram_api_endpoint}/dispositivo/temp-y-humedad`)
            let json = await response.json()
            let data_parametros = await json.data.parametros
            let temperatura = await data_parametros.temperatura
            let humedad = await data_parametros.humedad

            console.log("TEMPERATURA => " + temperatura)
            console.log("HUMEDAD => " + humedad)

            return { temperatura, humedad }

        } catch (error) {
            console.error(error)
        }
    }

    React.useEffect(() => {
        setInterval(async () => {
            // API Calls
            const { temperatura, humedad } = await getTempHumApi()
            setSensor({ temperatura: temperatura, humedad: humedad })

            let updateTemperaturaArray = sensorDatos.temperatura
            updateTemperaturaArray.shift()
            updateTemperaturaArray.push(temperatura)

            setSensorDatos({
                temperatura: updateTemperaturaArray
            })
        }, 6450)
    }, [])

    // RN SVG Charts
    const contentInsent = { top: 20, bottom: 20 }

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: colors.text }]}>Temperatura y humedad</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Monitorea la temperatura interior y el porcentaje de humedad.</Text>

            <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    // data={data}
                    data={sensorDatos.temperatura}
                    contentInsent={contentInsent}
                    svg={{
                        fill: colors.text,
                        fontSize: 13
                    }}
                    numberOfTicks={10}
                    formatLabel={(value) => `${value}°C`}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={sensorDatos.temperatura}
                    svg={{ stroke: 'rgb(134, 65, 244)', strokeWidth: 3 }}
                    contentInsent={contentInsent}
                >
                    <Grid
                        svg={{ stroke: colors.text, strokeOpacity: 0.5 }}
                    />
                </LineChart>

            </View>

            <TemperaturaIcono
                width={50}
                height={50}
                style={{ color: '#694fad' }}
            />
            <Text style={[styles.subtitle,
            {
                color: theme.dark ? colors.text : '#694fad',
                fontWeight: 'bold'
            }]}>
                Temperatura actual: {sensor.temperatura} °C</Text>

            <Text style={[styles.subtitle,
            {
                color: theme.dark ? colors.text : '#694fad',
                fontWeight: 'bold',
                paddingBottom: 20
            }]}>
                Humedad: {sensor.humedad} %</Text>

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