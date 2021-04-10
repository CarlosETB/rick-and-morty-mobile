import React, { useContext } from 'react'

// Native
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from "react-i18next"

// Private
import {
    Container,
    Image,
    Content,
    Title,
    Text,
    Button,
    Details
} from './styles'
import { CharactersContext } from '~/contexts/CharactersContext'

interface LayoutProps {
    character: {
        id?: number;
        name?: string;
        status?: string;
        species?: string;
        image?: string;
    }
}

const ListItem: React.FC<LayoutProps> = (props) => {
    const { character: { id, name, status, species, image } } = props

    const navigation = useNavigation()
    const { t } = useTranslation(["Character", "ListItem"]);

    const {
        setCharacterID
    } = useContext(CharactersContext);

    const handleGoToDetail = () => {
        setCharacterID(id)
        navigation.navigate('CharacterDetail')
    }

    return (
        <Container>
            <Image source={{
                uri: image,
            }} />

            <Content>
                <Text><Title>{t('name')}:</Title> {name}</Text>
                <Text><Title>{t('status')}:</Title> {status}</Text>
                <Text><Title>{t('species')}:</Title> {species}</Text>
            </Content>

            <Button onPress={handleGoToDetail}>
                <Details>
                    {t('ListItem:details')}
                </Details>
            </Button>
        </Container>
    )
}

export default ListItem