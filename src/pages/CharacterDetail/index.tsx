import React, { useContext, useEffect } from 'react'

// Native
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from "react-i18next"

// Contexts
import { CharactersContext } from '~/contexts/CharactersContext'

// Private
import {
    Container,
    Image,
    Line,
    Content,
    Title,
    Text,
    Footer,
    TouchableOpacity,
    ActivityIndicator
} from './styles'

const CharacterDetail = () => {
    const navigation = useNavigation()

    const { t } = useTranslation(["Character", "CharacterDetail"]);

    const {
        loading,
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

    if (loading) {
        return <ActivityIndicator />
    }

    return (
        <Container>
            <Image source={{ uri: character?.image }} />

            <Line />
            <Content>
                <Text><Title>• {t('name')}:</Title> {character?.name}</Text>
                <Text><Title>• {t('status')}:</Title> {character?.status}</Text>
                <Text><Title>• {t('species')}:</Title> {character?.species}</Text>
                <Text><Title>• {t('gender')}:</Title> {character?.gender}</Text>
                <Text><Title>• {t('origin')}:</Title> {character?.origin?.name}</Text>
            </Content>

            <Footer>
                <TouchableOpacity
                    disabled={character?.id === 1}
                    onPress={handleGoPrev}
                    style={{ opacity: character?.id === 1 ? 0 : 1 }}
                >
                    <Text>{t('CharacterDetail:prev')}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleGoToMenu}>
                    <Text>{t('CharacterDetail:menu')}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleGoNext}
                    disabled={character?.id === characters.length}
                    style={{ opacity: character?.id === characters.length ? 0 : 1 }}
                >
                    <Text>{t('CharacterDetail:next')}</Text>
                </TouchableOpacity>
            </Footer>
        </Container>
    )
}

export default CharacterDetail