import React from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'


const ReportScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Reporte Screen</Text>
            <Button
                title="Ir a pantalla de Home"
                onPress={() => navigation.navigate('Home')}
            />

            <Button
                title="Ir a pantalla de Reporte...de nuevo"
                onPress={() => navigation.push('Reporte')}
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

export default ReportScreen