import styled from 'styled-components/native'

import { colors } from '~/shared/colors'
import { sizes } from '~/shared/sizes'

export const Container = styled.View`
    width: 100%;
    height: 80px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    align-items: center;
    background-color: white;
    border: solid ${colors.gray};
    border-width: ${sizes.hairline}px
`

export const Image = styled.Image`
    height: 85px;
    width: 85px;
    border-radius: 10px;
`

export const Content = styled.View`
    flex: 1.5;
    display: flex;
    padding: 10px;
    flex-direction: column;
`

export const Title = styled.Text`
    font-weight: bold;
`

export const Text = styled.Text.attrs({
    numberOfLines: 1
})`    
`

export const Button = styled.TouchableOpacity`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const Details = styled.Text`
    font-size: 18px;
    font-weight: 800;
    color: ${colors.link};
`