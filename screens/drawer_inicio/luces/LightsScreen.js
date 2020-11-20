import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
    Switch
} from 'react-native'

import { useTheme } from '@react-navigation/native'

// Components
// import InicioButton from '../../../components/InicioButton'

// SVG Components
import CuartoIcono from '../../../resources/cuarto.svg'
import EstanciaIcono from '../../../resources/estancia.svg'
import BanoIcono from '../../../resources/baño.svg'
import CocinaIcono from '../../../resources/cocina.svg'
import EntradaIcono from '../../../resources/entrada.svg'
import ComedorIcono from '../../../resources/comedor.svg'

import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman'


const LightsScreen = ({ navigation }) => {

    const { colors } = useTheme()


    // - Habitacion
    const [habIsEnabled, setHabIsEnabled] = React.useState(false)
    const toggleHabSwitch = () => {
        alert("Habitacion")
        setHabIsEnabled(previousState => !previousState)
    }

    //  - Estancia
    const [estIsEnabled, setEstIsEnabled] = React.useState(false)
    const toggleEstSwitch = () => {
        alert("Estancia")
        setEstIsEnabled(previousState => !previousState)
    }

    //  - Baño
    const [banoIsEnabled, setBanoIsEnabled] = React.useState(false)
    const toggleBanoSwitch = () => {
        alert("Baño")
        setBanoIsEnabled(previousState => !previousState)
    }

    //  - Cocina
    const [cocinaIsEnabled, setCocinaIsEnabled] = React.useState(false)
    const toggleCocinaSwitch = () => {
        alert("Cocina")
        setCocinaIsEnabled(previousState => !previousState)
    }

    //  - Entrada
    const [entradaIsEnabled, setEntradaIsEnabled] = React.useState(false)
    const toggleEntradaSwitch = () => {
        alert("Entrada")
        setEntradaIsEnabled(previousState => !previousState)
    }

    //  - Comedor
    const [comedorIsEnabled, setComedorIsEnabled] = React.useState(false)
    const toggleComedorSwitch = () => {
        alert("Comedor")
        setComedorIsEnabled(previousState => !previousState)
    }


    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: colors.text }]}>Luces del hogar</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Controla la iluminación de las distintas habitaciones.</Text>

            <View style={{ flexDirection: 'row' }}>
                <CuartoIcono
                    width={50}
                    height={50}
                    style={{ color: colors.text }}
                />

                <Text style={{ paddingTop: 15, paddingRight: 150, fontSize: 15, color: colors.text }}>
                    Habitación
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
                    Estancia
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
                    Baño
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
                    Cocina
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
                    Entrada
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
                    Comedor
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