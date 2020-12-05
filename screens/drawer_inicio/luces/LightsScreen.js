import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Switch
} from 'react-native'

import { useTheme } from '@react-navigation/native'

// SVG Components
import CuartoIcono from '../../../resources/cuarto.svg'
import EstanciaIcono from '../../../resources/estancia.svg'
import BanoIcono from '../../../resources/baño.svg'
import CocinaIcono from '../../../resources/cocina.svg'
import EntradaIcono from '../../../resources/entrada.svg'
import ComedorIcono from '../../../resources/comedor.svg'

import { domogram_api_endpoint } from '../../../screens/config'

// TRANSLATIONS
import i18n from 'i18n-js'

import { en, es } from '../../translations.json'

// Traducciones dependiendo del lenguaje
i18n.translations = { en, es }

// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true


const LightsScreen = ({ navigation }) => {

    const { colors } = useTheme()

    // Handle led
    const handleLed = async (cuarto, serial, estado) => {
        try {
            const result = await fetch(`${domogram_api_endpoint}/dispositivo/luz-${cuarto}`, {
                method: 'put',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // Encender led
                    "parametros": {
                        "dato_serial": `${serial}`,
                        "encendido": estado
                    }
                })
            })

            const response = await result.json()
            // alert(JSON.stringify(response))

        } catch (error) {
            console.error(error)
        }
    }

    // - Habitacion
    const [habIsEnabled, setHabIsEnabled] = React.useState(false)
    const toggleHabSwitch = () => {
        setHabIsEnabled(previousState => {
            // When switch = ON....
            if (!previousState === true) {
                // PUT request - Encender led
                handleLed('habitacion', 'Q', true)

            } else {
                // When switch == OFF...
                // PUT request - Apagar led
                handleLed('habitacion', 'W', false)
            }

            return !previousState
        })
    }

    //  - Estancia
    const [estIsEnabled, setEstIsEnabled] = React.useState(false)
    const toggleEstSwitch = () => {
        setEstIsEnabled(previousState => {
            // When switch = ON....
            if (!previousState === true) {
                // PUT request - Encender led
                handleLed('estancia', 'E', true)

            } else {
                // When switch == OFF...
                // PUT request - Apagar led
                handleLed('estancia', 'R', false)
            }

            return !previousState
        })
    }

    //  - Baño
    const [banoIsEnabled, setBanoIsEnabled] = React.useState(false)
    const toggleBanoSwitch = () => {
        setBanoIsEnabled(previousState => {
            // When switch = ON....
            if (!previousState === true) {
                // PUT request - Encender led
                handleLed('baño', 'T', true)

            } else {
                // When switch == OFF...
                // PUT request - Apagar led
                handleLed('baño', 'Y', false)
            }

            return !previousState
        })
    }

    //  - Cocina
    const [cocinaIsEnabled, setCocinaIsEnabled] = React.useState(false)
    const toggleCocinaSwitch = () => {
        setCocinaIsEnabled(previousState => {
            // When switch = ON....
            if (!previousState === true) {
                // PUT request - Encender led
                handleLed('cocina', 'G', true)

            } else {
                // When switch == OFF...
                // PUT request - Apagar led
                handleLed('cocina', 'H', false)
            }

            return !previousState
        })
    }

    //  - Entrada
    const [entradaIsEnabled, setEntradaIsEnabled] = React.useState(false)
    const toggleEntradaSwitch = () => {
        setEntradaIsEnabled(previousState => {
            // When switch = ON....
            if (!previousState === true) {
                // PUT request - Encender led
                handleLed('entrada', 'J', true)

            } else {
                // When switch == OFF...
                // PUT request - Apagar led
                handleLed('entrada', 'K', false)
            }

            return !previousState
        })
    }

    //  - Comedor
    const [comedorIsEnabled, setComedorIsEnabled] = React.useState(false)
    const toggleComedorSwitch = () => {
        setComedorIsEnabled(previousState => {
            // When switch = ON....
            if (!previousState === true) {
                // PUT request - Encender led
                handleLed('comedor', 'L', true)

            } else {
                // When switch == OFF...
                // PUT request - Apagar led
                handleLed('comedor', 'Z', false)
            }

            return !previousState
        })
    }


    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: colors.text }]}>{i18n.t('luces1')}</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>{i18n.t('luces2')}</Text>

            <View style={{ flexDirection: 'row' }}>
                <CuartoIcono
                    width={50}
                    height={50}
                    style={{ color: colors.text }}
                />

                <Text style={{ paddingTop: 15, paddingRight: 150, fontSize: 15, color: colors.text }}>
                    {i18n.t('luces3')}
                </Text>

                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={habIsEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleHabSwitch}
                    value={habIsEnabled}
                />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <EstanciaIcono
                    width={50}
                    height={40}
                    style={{ color: colors.text, marginLeft: -10 }}
                />

                <Text style={{ paddingTop: 10, paddingRight: 160, fontSize: 15, color: colors.text }}>
                    {i18n.t('luces4')}
                </Text>

                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={estIsEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleEstSwitch}
                    value={estIsEnabled}
                />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <BanoIcono
                    width={40}
                    height={40}
                    style={{ color: colors.text }}
                />

                <Text style={{ paddingTop: 15, paddingRight: 190, fontSize: 15, color: colors.text }}>
                    {i18n.t('luces5')}
                </Text>

                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={banoIsEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleBanoSwitch}
                    value={banoIsEnabled}
                />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <CocinaIcono
                    width={40}
                    height={40}
                    style={{ color: colors.text }}
                />

                <Text style={{ paddingTop: 15, paddingRight: 180, fontSize: 15, color: colors.text }}>
                    {i18n.t('luces6')}
                </Text>

                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={cocinaIsEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleCocinaSwitch}
                    value={cocinaIsEnabled}
                />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <EntradaIcono
                    width={40}
                    height={40}
                    style={{ color: colors.text }}
                />

                <Text style={{ paddingTop: 15, paddingRight: 180, fontSize: 15, color: colors.text }}>
                    {i18n.t('luces7')}
                </Text>

                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={entradaIsEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleEntradaSwitch}
                    value={entradaIsEnabled}
                />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <ComedorIcono
                    width={40}
                    height={40}
                    style={{ color: colors.text }}
                />

                <Text style={{ paddingTop: 15, paddingRight: 170, fontSize: 15, color: colors.text }}>
                    {i18n.t('luces8')}
                </Text>

                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={comedorIsEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleComedorSwitch}
                    value={comedorIsEnabled}
                />
            </View>

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