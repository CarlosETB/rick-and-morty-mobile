import React, { createContext, ReactNode, useState } from "react";

import { ActivityIndicator, View } from 'react-native'

// Services
import api from "~/services/api";

interface CharactersContextProps {
    setCharacterID?: any;
    loading?: boolean;
    characters: CharacterProps[];
    character: CharacterProps;
    handleGetAll: () => void;
    handleGetCharacter: () => void;
    handleGoNext: () => void;
    handleGoPrev: () => void;
}

interface CharactersProviderProps {
    children?: ReactNode;
}

interface CharacterProps {
    id?: number;
    name?: string;
    status?: string;
    species?: string;
    image?: string;
    gender?: string;
    type?: string;
    origin?: {
        name?: string;
    }
}

const CharactersContext = createContext({} as CharactersContextProps);


const CharactersProvider: React.FC<CharactersProviderProps> = (props) => {
    const { children } = props;

    const [characters, setCharacters] = useState<CharacterProps[]>([]);
    const [character, setCharacter] = useState<CharacterProps>({});;
    const [characterID, setCharacterID] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleGetAll = () => {
        setLoading(true)
        api.get('').then((response) => {
            setCharacters(response.data.results);
            setLoading(false);
        })
    }

    const handleGetCharacter = () => {
        setLoading(true)
        api.get(`/${characterID}`).then(response => {
            setCharacter(response.data);
            setLoading(false);
        })
    }

    const handleGoNext = () => {
        setLoading(true)
        setCharacterID(characterID + 1);
        handleGetCharacter()
        setLoading(false)
    }

    const handleGoPrev = () => {
        setLoading(true)
        setCharacterID(characterID - 1);
        handleGetCharacter()
        setLoading(false)
    }


    return (
        <CharactersContext.Provider
            value={{
                loading,
                characters,
                character,
                handleGetAll,
                setCharacterID,
                handleGoNext,
                handleGoPrev,
                handleGetCharacter,
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
};

export { CharactersContext, CharactersProvider };