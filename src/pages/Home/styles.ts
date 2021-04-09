import styled from 'styled-components/native'

// Shared
import { colors } from '~/shared/colors'
import { sizes } from '~/shared/sizes'

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    width: ${sizes.width}px;
    height: ${sizes.height}px;
    background-color: ${colors.lightGray};
`

export const FlatList = styled.FlatList`
    padding: 0 5%;
`

export const Text = styled.Text`
    width: 100%;
    font-size: 15px;
    text-align: center;
    color: ${colors.darkGray};
`