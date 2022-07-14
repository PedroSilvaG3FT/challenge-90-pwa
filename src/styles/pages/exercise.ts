import tw from 'twin.macro'
import { rgba } from 'polished'
import styled from 'styled-components'
import bgSport from '@/assets/images/bg-sport.png'
import { AppContainer } from '@/styles/css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`min-h-full flex flex-col`}
    background-size: 90% !important;

    background: ${props => {
        const bgColor = rgba(props.theme.colors.bgPrimary, 0.96)
        return `linear-gradient(0deg, ${bgColor}, ${bgColor}), url(${bgSport})`
    }};
`

export const ImageContainer = styled.figure`
    ${tw`w-full flex py-4 flex-col items-center rounded-lg`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Image = styled.img`
    ${tw`w-8/12`}
`

export const Text = styled.p``
