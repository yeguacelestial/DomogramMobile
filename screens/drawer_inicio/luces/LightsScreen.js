import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

import * as Animatable from 'react-native-animatable'


const LightsScreen = ({ navigation }) => {
    return (
        <Animatable.View style={styles.container} animation="fadeInUpBig">
            <Text>Luces Screen</Text>
            <Button
                title="Ir a pantalla de Home"
                onPress={() => navigation.navigate('Home')}
            />

            <Button
                title="Ir a pantalla de Luces...de nuevo"
                onPress={() => navigation.push('Luces')}
            />

            <Button
                title="Regresar"
                onPress={() => navigation.goBack()}
            />

            <Button
                title="Ir a la primer pantalla"
                onPress={() => navigation.popToTop()}
            />

        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default LightsScreen