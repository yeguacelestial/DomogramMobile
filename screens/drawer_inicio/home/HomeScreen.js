import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native'

import { useTheme } from '@react-navigation/native'
import Image from 'react-native-remote-svg'


const HomeScreen = ({ navigation }) => {

    const { colors } = useTheme()

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: colors.text }]}>Bienvenido a Domogram</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>La plataforma para gestionar tu hogar desde cualquier parte del mundo</Text>

            <Image
                source={require('../../../resources/no_meeting_room-24px.svg')}
                style={{ width: 200, height: 200, color: colors.text }}
            />

            <Text style={[styles.text, { color: colors.text }]}>Abrir el portón principal para una mejor experiencia con Domogram.</Text>

            {/* <Button
                title="Ir a pantalla de Movimiento"
                onPress={() => navigation.navigate('Movimiento')}
            /> */}
            <Button
                title="Abrir casa"
            // onPress={() => navigation.navigate('Movimiento')}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
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


export default HomeScreen