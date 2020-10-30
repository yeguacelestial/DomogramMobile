import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import { useTheme } from '@react-navigation/native'
import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';

// SVG Components
import HomeOff from '../../../resources/no_meeting_room-24px.svg'


const HomeScreen = ({ navigation }) => {

    const { colors } = useTheme()

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { color: colors.text }]}>Bienvenido a Domogram</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>La plataforma para gestionar tu hogar desde cualquier parte del mundo</Text>

            {/* Home Icon */}
            <HomeOff
                width={200}
                height={200}
                style={{ color: colors.text, paddingTop: 250 }}
            />

            <Text style={[styles.homeStateText, { color: colors.text }]}>La casa está cerrada.</Text>
            <Text style={[styles.text, { color: colors.text, paddingBottom: 10 }]}>Abrir el portón principal para una mejor experiencia con Domogram.</Text>

            <AwesomeButtonCartman
                textColor="white"
                backgroundColor="#009387"
                width={250}
                type="primary"
                progress
                onPress={next => {
                    /* Do something */
                    alert("Abriendo la casa...")
                    next()
                }}
            >
                Pulsa aquí para abrir la casa
            </AwesomeButtonCartman>
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
        fontWeight: "bold",
        paddingTop: 20,
    },

    homeStateText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: -30
    }
})


export default HomeScreen