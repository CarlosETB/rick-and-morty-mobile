import React, { useContext, useEffect, useState } from 'react'

// Native
import { useNavigation } from '@react-navigation/native'

// Contexts
import { CharactersContext } from '~/contexts/characters'

// Private
import {
    Container,
    Image,
    Line,
    Content,
    Title,
    Text,
    Footer,
    TouchableOpacity
} from './styles'

const CharacterDetail = () => {
    const navigation = useNavigation()

    const {
        character,
        characters,
        handleGetCharacter,
        handleGetAll,
        handleGoNext,
        handleGoPrev
    } = useContext(CharactersContext);

    const handleGoToMenu = () => {
        navigation.navigate('Home')
    }

    useEffect(() => {
        handleGetCharacter()
        handleGetAll()
    }, [])

    return (
        <Container>
            <Image source={{ uri: character?.image }} />

            <Line />

            <Content>
                <Text><Title>• ID:</Title> {character?.id}</Text>
                <Text><Title>• Nome:</Title> {character?.name}</Text>
                <Text><Title>• Espécie:</Title> {character?.species}</Text>
                <Text><Title>• Status:</Title> {character?.status}</Text>
            </Content>

            <Footer>
                <TouchableOpacity
                    disabled={character?.id === 1}
                    onPress={handleGoPrev}
                    style={{ opacity: character?.id === 1 ? 0 : 1 }}
                >
                    <Text>Anterior</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleGoToMenu}>
                    <Text>Menu</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleGoNext}
                    disabled={character?.id === characters.length}
                    style={{ opacity: character?.id === characters.length ? 0 : 1 }}
                >
                    <Text>Próximo</Text>
                </TouchableOpacity>
            </Footer>
        </Container>
    )
}

export default CharacterDetail