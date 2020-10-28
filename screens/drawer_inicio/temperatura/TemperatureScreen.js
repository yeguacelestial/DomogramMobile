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
            <Text style={{ color: colors.text }}>Temperatura y Humedad Screen</Text>
            <Button
                title="Ir a pantalla de Home"
                onPress={() => navigation.navigate('Home')}
            />

            <Button
                title="Ir a pantalla de Temperatura y Humedad...de nuevo"
                onPress={() => navigation.push('Temperatura y Humedad')}
            />

            <Button
                title="Regresar"
                onPress={() => navigation.goBack()}
            />

            <Button
                title="Ir a la primer pantalla"
                onPress={() => navigation.popToTop()}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default TemperatureScreen