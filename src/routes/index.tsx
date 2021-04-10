import React from 'react'

// Native
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Components
import Header from '~/components/Header'

// Pages
import Home from '~/pages/Home'
import CharacterDetail from '~/pages/CharacterDetail'

const { Navigator, Screen } = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen
                    name="Home"
                    component={Home}
                    options={{ header: Header }}
                />
                <Screen name="CharacterDetail" options={{ title: "" }} component={CharacterDetail} />
            </Navigator>
        </NavigationContainer>
    )
}