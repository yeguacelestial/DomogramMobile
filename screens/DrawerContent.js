import React from 'react'
import {
    View,
    StyleSheet,
    Alert
} from 'react-native'

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper'

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { AuthContext } from '../components/context'


const DrawerContent = (props) => {

    // Dark mode state
    const [isDarkTheme, setIsDarkTheme] = React.useState(false)

    // Authorization context object
    const { signOut } = React.useContext(AuthContext)

    const toggleTheme = () => {
        // Activate/deactivate dark theme
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View styles={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://pbs.twimg.com/media/CN_Q_8dWcAQKABR.jpg'
                                }}
                                size={50}
                            />

                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Carlos Nava</Title>
                                <Caption style={styles.caption}>carlosnava@hola.com</Caption>
                            </View>

                        </View>

                        <View style={styles.row}>

                            {/* Following section */}
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>

                            {/* Followers section */}
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>123</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>

                        </View>
                    </View>

                    {/* Drawer items */}
                    <Drawer.Section>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Inicio"
                            onPress={() => {
                                props.navigation.navigate('Home') /* 'Home' screen on MainTabScreen */
                            }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Perfil"
                            onPress={() => {
                                // props.navigation.navigate('Movimiento') 
                                Alert.alert("En progreso...", "El usuario podrá ver información sobre su perfil desde aquí.")
                            }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="settings-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Ajustes"
                            onPress={() => {
                                // props.navigation.navigate('Luces')
                                Alert.alert("En progreso...", "La opción de Ajustes será útil para configurar información de la cuenta del usuario, así como también algunos parámetros relativos a la automatización del hogar.")
                            }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Soporte"
                            onPress={() => {
                                // props.navigation.navigate('Temperatura y humedad')
                                Alert.alert("En progreso...", "La vista de soporte servirá para poder contactar al desarrollador en caso de que el usuario tenga alguna duda.")
                            }}
                        />
                    </Drawer.Section>

                    {/* Preferencias */}
                    <Drawer.Section title="Preferencias">

                        {/* Opcion 'Modo oscuro' */}
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Modo oscuro</Text>

                                {/* Switch modo oscuro */}
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>

                            </View>
                        </TouchableRipple>

                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>

                {/* Sign Out button */}
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Cerrar sesión"
                    onPress={() => { signOut() }}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },

    userInfoSection: {
        paddingLeft: 20,
    },

    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },

    caption: {
        fontSize: 14,
        lineHeight: 14
    },

    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },

    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },

    drawerSection: {
        marginTop: 15,
    },

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },

    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },

})

export default DrawerContent