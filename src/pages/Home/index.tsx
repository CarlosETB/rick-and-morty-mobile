import React, { useContext, useEffect, useState } from 'react'

// Native
import { FlatList } from 'react-native'

// Components
import ListItem from '~/components/ListItem'
import InputSearch from '~/components/InputSearch'

// Contexts
import { CharactersContext } from "~/contexts/characters";

// Services
import api from '~/services/api'

// Private
import { Container, Text } from './styles'

interface CharactersProps {
    name?: string;
    status?: string;
    species?: string;
    image?: string;
}

const Home = () => {
    const [searchField, setSearchField] = useState('')

    const { characters, handleGetAll } = useContext(CharactersContext);

    const filteredCharacter = characters.filter(character => {
        return character.name && character.name.toLowerCase().includes(searchField?.toLowerCase());
    })


    useEffect(() => {
        handleGetAll()
    }, [])

    const ListEmptyComponent = () => {
        return <Text>Nenhum personagem correspondente...</Text>
    }

    const renderItem = ({ item }) => {
        return <ListItem character={item} />
    }

    return (
        <Container>
            <InputSearch
                value={searchField}
                onChangeText={setSearchField}
            />

            <FlatList
                data={filteredCharacter}
                style={{ paddingHorizontal: "5%" }}
                ListEmptyComponent={ListEmptyComponent}
                renderItem={renderItem}
                showsVerticalScrollIndicator
            />
        </Container>
    )
}

export default Home