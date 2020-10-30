import React from 'react'

import { useTheme } from '@react-navigation/native'

import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';


const InicioButton = ({ customBackgroundColor, customText, handlePress }) => {
    const { colors } = useTheme()

    return (
        <AwesomeButtonCartman
            textColor="white"
            backgroundDarker={colors.buttonBackgroundDarker}
            borderColor={colors.buttonBackgroundDarker}
            backgroundColor={customBackgroundColor}
            width={250}
            progress
            onPress={handlePress}
        >
            { customText}
        </AwesomeButtonCartman >
    )
}

export default InicioButton