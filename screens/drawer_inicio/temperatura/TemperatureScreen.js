import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import { useTheme } from '@react-navigation/native'

// React native svg charts
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'

// Components
import InicioButton from '../../../components/InicioButton'

// SVG Components
import TemperaturaIcono from '../../../resources/ac_unit-24px.svg'
import { Line } from 'react-native-svg'


const TemperatureScreen = ({ navigation }) => {

    // Theme
    const { colors } = useTheme()
    const theme = useTheme()

    // RN SVG Charts
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20]
    const contentInsent = { top: 20, bottom: 20 }

    const [sensor, setSensor] = React.useState({
        temperatura: [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20]
    })

    function actualizarTemperatura() {
        // Este arreglo debe ser sacado de la API.
        // TODO: Crear un endpoint para conseguir las 14 últimas temperaturas
        let temperatura_aleatoria = Array.from({ length: 14 }, () => Math.floor(Math.random() * 14))

        setSensor({
            temperatura: temperatura_aleatoria
        })
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: colors.text }]}>Temperatura y humedad</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Monitorea la temperatura interior y el porcentaje de humedad.</Text>

            {/* <TemperaturaIcono
                width={200}
                height={200}
                style={{ color: '#694fad', paddingTop: 250 }}
            /> */}

            <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    // data={data}
                    data={sensor.temperatura}
                    contentInsent={contentInsent}
                    svg={{
                        fill: 'grey',
                        fontSize: 10
                    }}
                    numberOfTicks={10}
                    formatLabel={(value) => `${value}°C`}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={sensor.temperatura}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInsent={contentInsent}
                >
                    <Grid />
                </LineChart>

            </View>

            <Text style={[styles.subtitle,
            {
                color: theme.dark ? colors.text : '#694fad',
                fontWeight: 'bold'
            }]}>
                Temperatura actual: 10°C</Text>

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
                    // alert("Actualizando temperatura y humedad...")
                    actualizarTemperatura()
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