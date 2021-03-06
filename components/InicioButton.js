import React from 'react'
import { Text } from 'react-native'

import { useTheme } from '@react-navigation/native'

import AwesomeButtonCartman from 'react-native-really-awesome-button/src/themes/cartman'


const InicioButton = ({
    customBackgroundColor,
    customImage,
    customText,
    handlePress,
    isLoading
}) => {

    const { colors } = useTheme()

    return (
        <AwesomeButtonCartman
            textColor="white"
            backgroundDarker={colors.buttonBackgroundDarker}
            borderColor={colors.buttonBackgroundDarker}
            backgroundColor={customBackgroundColor}
            width={250}
            progress={isLoading}
            onPress={handlePress}
            disabled={isLoading ? true : false}
            raiseLevel={isLoading ? 1 : 10}
        >
            {customImage}
            <Text style={{ color: '#fff', fontWeight: 'bold', paddingLeft: 15 }}>
                {customText}
            </Text>
        </AwesomeButtonCartman>
    )
}

export default InicioButton