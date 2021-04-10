import React, { useContext, useEffect, useState } from 'react'

// Native
import { useTranslation } from 'react-i18next';

// Components
import ListItem from '~/components/ListItem'
import InputSearch from '~/components/InputSearch'

// Contexts
import { CharactersContext } from "~/contexts/CharactersContext";

// Private
import { Container, FlatList, Text } from './styles'

const Home = () => {
    const { t } = useTranslation("Home");

    const [searchField, setSearchField] = useState('')

    const { characters, handleGetAll } = useContext(CharactersContext);

    const filteredCharacter = characters.filter(character => {
        return character.name && character.name.toLowerCase().includes(searchField?.toLowerCase());
    })


    useEffect(() => {
        handleGetAll()
    }, [])

    const ListEmptyComponent = () => {
        return <Text>{t('empty')}</Text>
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
                renderItem={renderItem}
                data={filteredCharacter}
                showsVerticalScrollIndicator
                ListEmptyComponent={ListEmptyComponent}
            />
        </Container>
    )
}

export default Home