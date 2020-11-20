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

    const [isEnabled, setIsEnabled] = React.useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)

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
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
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
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
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
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
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
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
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
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
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
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View style={{ paddingTop: 50 }}>
                <AwesomeButtonCartman
                    textColor="white"
                    backgroundDarker={colors.buttonBackgroundDarker}
                    borderColor={colors.buttonBackgroundDarker}
                    backgroundColor={colors.backgroundColor}
                    width={250}
                    height={70}
                    onPress={next => next()}
                >
                    <Text style={{ color: colors.text, fontWeight: 'bold' }}>
                        Encender/apagar todas las luces
                    {/* Cuarto */}
                    </Text>
                </AwesomeButtonCartman>
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