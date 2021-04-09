import React from 'react'

// Native
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'

// Private
import { Container, TextInput, Icon } from './styles'

interface LayoutProps {
    value?: any;
    onChangeText?: any;
}

const InputSearch: React.FC<LayoutProps> = (props) => {
    const { value, onChangeText } = props

    return (
        <Container>
            <TextInput
                value={value}
                placeholder='Pesquisar...'
                onChangeText={onChangeText}
            />

            <TouchableOpacity onPress={() => onChangeText('')}>
                <Icon />
            </TouchableOpacity>
        </Container>
    )
}

export default InputSearch