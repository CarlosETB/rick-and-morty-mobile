import React from 'react'

// Native
import { StackHeaderProps } from '@react-navigation/stack'

// Assets
import MortyFace from '~/assets/morty-face.png'

// Private
import { Container, Image, Text } from './styles'

const Header: React.FC<StackHeaderProps> = () => {
    return (
        <Container>
            <Image source={MortyFace} />

            <Text>Rick and Morty</Text>
        </Container>
    )
}

export default Header