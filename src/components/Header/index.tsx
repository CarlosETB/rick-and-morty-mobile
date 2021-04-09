import React from 'react'

// Assets
import MortyFace from '~/assets/morty-face.png'

// Private
import { Container, Image, Text } from './styles'

const Header = () => {
    return (
        <Container>
            <Image source={MortyFace} />

            <Text>Rick and Morty Characters</Text>
        </Container>
    )
}

export default Header