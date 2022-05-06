import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '../css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`h-full flex flex-col justify-center`}
`

export const Paragraph = styled.p`
    ${tw`text-justify`}
`

export const TextHighlight = styled.b`
    color: ${props => props.theme.colors.primary};
`

export const Button = styled(AppButton)`
    ${tw`w-full mt-8`}
`
