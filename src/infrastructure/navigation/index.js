import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { AppNavigator } from './app.navigator'
import { AuthenticationContext } from '../../services/authentication/authentication.context'

export const Navigation = () => {
    const { isAuthenticated } = useContext(AuthenticationContext)
    return isAuthenticated ? (
    <AppNavigator /> 
    ) : (
        <View>
            <Text>Not Authenticated</Text>
        </View>
    )
}