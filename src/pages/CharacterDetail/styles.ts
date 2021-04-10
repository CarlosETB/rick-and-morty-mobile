import styled from 'styled-components/native'

// Shared
import { colors } from '~/shared/colors'
import { sizes } from '~/shared/sizes'

export const Container = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10% 0px;
    width: ${sizes.width}px;
    height: ${sizes.height}px;
    background-color: ${colors.lightGray};
`

export const Image = styled.Image`
    width: 160px;
    height: 160px;
    border-radius: 10px;
    border-color: ${colors.gray};
    border-width: ${sizes.hairline}px;
`

export const Content = styled.View`
    width: 70%;
`

export const Title = styled.Text`
    font-weight: bold;
`

export const Text = styled.Text`
    font-size: 18px;
`

export const Line = styled.View`
    width: 80%;
    margin: 50px 0;
    height: ${sizes.hairline}px;
    background-color: ${colors.gray};
`

export const Footer = styled.View`
    width: 100%;
    bottom: 0;
    height: 60px;
    position: absolute;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const TouchableOpacity = styled.TouchableOpacity`
    flex: 1;
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ActivityIndicator = styled.ActivityIndicator.attrs({
    size: "large",
    color: colors.gray
})`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center; 
`