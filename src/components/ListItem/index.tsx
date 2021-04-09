import React, { useContext } from 'react'

// Native
import { useNavigation } from '@react-navigation/native'

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
import { CharactersContext } from '~/contexts/characters'

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
                <Text><Title>Nome:</Title> {name}</Text>
                <Text><Title>Espécie:</Title> {status}</Text>
                <Text><Title>Status:</Title> {species}</Text>
            </Content>

            <Button onPress={handleGoToDetail}>
                <Details>
                    Detalhes
                </Details>
            </Button>
        </Container>
    )
}

export default ListItem