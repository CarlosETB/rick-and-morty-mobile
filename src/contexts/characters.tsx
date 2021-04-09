import React, { createContext, ReactNode, useState } from "react";

// Native
import Cookies from "universal-cookie";

// Services
import api from "~/services/api";

interface CharactersContextProps {
    setCharacterID?: any;
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
}

const CharactersContext = createContext({} as CharactersContextProps);


const CharactersProvider: React.FC<CharactersProviderProps> = (props) => {
    const { children } = props;

    const cookies = new Cookies();

    const [characters, setCharacters] = useState<CharacterProps[]>([]);
    const [character, setCharacter] = useState<CharacterProps>({});;
    const [characterID, setCharacterID] = useState(0);

    const handleGetAll = () => {
        api.get('').then((response) => setCharacters(response.data.results))
    }

    const handleGoNext = () => {
        setCharacterID(characterID + 1);
        handleGetCharacter()
    }

    const handleGoPrev = () => {
        setCharacterID(characterID - 1);
        handleGetCharacter()
    }


    const handleGetCharacter = () => {
        api.get(`/${characterID}`).then(response => {
            setCharacter(response.data)
        })
    }

    return (
        <CharactersContext.Provider
            value={{
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