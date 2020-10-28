import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'

import * as Animatable from 'react-native-animatable'


const HomeScreen = ({ navigation }) => {
    return (
        <Animatable.View style={styles.container} animation="fadeInUpBig">
            <Text>Home Screen</Text>
            <Button
                title="Ir a pantalla de Movimiento"
                onPress={() => navigation.navigate('Movimiento')}
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


export default HomeScreen