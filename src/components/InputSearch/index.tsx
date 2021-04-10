import React from 'react'

// Native
import { TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next';
// Private
import { Container, TextInput, Icon } from './styles'

interface LayoutProps {
    value?: any;
    onChangeText?: any;
}

const InputSearch: React.FC<LayoutProps> = (props) => {
    const { value, onChangeText } = props

    const { t } = useTranslation("InputSearch");

    return (
        <Container>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={t('placeholder')}
            />

            <TouchableOpacity onPress={() => onChangeText('')}>
                <Icon />
            </TouchableOpacity>
        </Container>
    )
}

export default InputSearch