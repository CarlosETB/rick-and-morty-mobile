// Native
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';

// Shared
import { colors } from '~/shared/colors'
import { sizes } from '~/shared/sizes'

export const Container = styled.View`
    width: 90%;
    height: 40px;
    display: flex;
    padding: 0px 10px;
    margin: 10px auto;
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    border-color: ${colors.gray};
    border-width: ${sizes.hairline}px;
    background-color: ${colors.white};
`

export const TextInput = styled.TextInput`
    flex: 1;
`

export const Icon = styled(Feather).attrs({
    size: 40,
    name: "trash",
    color: colors.gray
})``