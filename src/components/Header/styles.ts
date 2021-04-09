import styled from 'styled-components/native'

// Shared
import { colors } from '~/shared/colors'
import { sizes } from '~/shared/sizes'

export const Container = styled.View`
    width: ${sizes.width}px;
    padding-top: ${sizes.statusBar}px;
    background-color: ${colors.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 5%;
    padding-left: 5%;
    height: ${sizes.height * 0.1 + sizes.statusBar}px;
`

export const Image = styled.Image.attrs({
    resizeMode: 'center'
})`
    width: 60px;
    height: 60px;
    margin-right: 10px;
`

export const Text = styled.Text`
    font-size: 20px;
    color: ${colors.darkGray};
`