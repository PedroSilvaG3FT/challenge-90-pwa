import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.article`
    ${tw`p-2 mb-2 rounded self-stretch flex items-center justify-center flex-col text-[90%]`}
    background: ${props => props.theme.colors.bgPrimary};

    &:last-of-type {
        ${tw`my-0`}
    }
`

export const Text = styled.p`
    ${tw`mb-0.5`}

    &:last-of-type {
        ${tw`my-0`}
    }
`
