import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.article`
    ${tw`p-2 mb-2 rounded self-stretch flex items-center justify-center flex-col`}
    background: ${props => props.theme.colors.primary};

    > svg {
        ${tw`text-[2rem] mb-2`}
    }

    &:last-of-type {
        ${tw`my-0`}
    }
`

export const Text = styled.p`
    ${tw`text-center text-[90%]`}
`
