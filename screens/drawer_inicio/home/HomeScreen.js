import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    // StatusBar
} from 'react-native'

import { useTheme } from '@react-navigation/native'

// Components
import InicioButton from '../../../components/InicioButton'

// SVG Components
import HomeOff from '../../../resources/no_meeting_room-24px.svg'
import HomeOn from '../../../resources/meeting_room-24px.svg'


const HomeScreen = ({ navigation }) => {

    const { colors } = useTheme()

    // const theme = useTheme()

    return (
        <View style={styles.container}>
            {/* <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} /> */}
            <Text style={[styles.title, { color: colors.text }]}>Domogram</Text>

            <Text style={[styles.subtitle, { color: colors.text }]}>Gestiona tu hogar, desde cualquier lugar del mundo.</Text>

            {/* Home Icon */}
            <HomeOff
                width={200}
                height={200}
                style={{ color: '#009387', paddingTop: 240 }}
            />

            <Text style={[styles.homeStateText, { color: '#009387' }]}>La casa está cerrada.</Text>
            <Text style={[styles.text, { color: colors.text, paddingBottom: 10 }]}>Abre el portón principal para una mejor experiencia con Domogram.</Text>

            <InicioButton
                customBackgroundColor="#009387"
                customText={"Abrir porton principal"}
                customImage={<HomeOn
                    width={40}
                    height={40}
                    style={{ color: 'white' }}
                />}

                handlePress={next => {
                    // alert("Abriendo casa...")
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