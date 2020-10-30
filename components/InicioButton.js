import React from 'react'
import { Text } from 'react-native'

import { useTheme } from '@react-navigation/native'

import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman';


const InicioButton = ({
    customBackgroundColor,
    customImage,
    customText,
    handlePress
}) => {

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
            {customImage}
            <Text style={{ color: '#fff', fontWeight: 'bold', paddingLeft: 15 }}>
                {customText}
            </Text>
        </AwesomeButtonCartman>
    )
}

export default InicioButton