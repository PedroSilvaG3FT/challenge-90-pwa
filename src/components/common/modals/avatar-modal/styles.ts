import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton } from '@/styles/css/ts/components'

export const Footer = styled.section`
    ${tw`flex items-center justify-center pt-2`}
`

export const Button = styled(AppButton)`
    ${tw`w-full`}
    background: ${props => props.theme.colors.green};
`

export const Grid = styled.section`
    ${tw`w-full p-2 grid gap-2 grid-cols-3`}
`

export const Card = styled.article`
    ${tw`p-2 rounded-lg flex items-center justify-center`}
    background: ${props => props.theme.colors.bgSecondary};
    border: 1px solid;
    border-color: transparent;

    &.selected {
        border-color: ${({ theme }) => theme.colors.green};
        box-shadow: ${({ theme }) =>
            theme.boxShadow.center(theme.colors.green)};
    }
`

export const Image = styled.img`
    ${tw`h-16`}
`
