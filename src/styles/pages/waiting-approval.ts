import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '@/styles/css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`h-full flex flex-col justify-center items-center`}
`

export const Image = styled.img`
    ${tw`w-3/4 mb-12`}
`

export const Paragraph = styled.p`
    ${tw`text-center`}
`

export const TextHighlight = styled.b`
    color: ${props => props.theme.colors.primary};
`

export const Button = styled(AppButton)`
    ${tw`w-full mt-8`}
    background: ${props => props.theme.colors.green};

    &:last-of-type {
        ${tw`w-2/5`}
        background: ${props => props.theme.colors.primary};
    }
`
