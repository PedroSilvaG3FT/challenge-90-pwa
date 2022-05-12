import styled from 'styled-components'
import tw from 'twin.macro'

export const Body = styled.section``

export const Item = styled.article`
    ${tw`py-3 px-3 my-2 text-sm rounded flex items-center`}
    background: ${props => props.theme.colors.bgSecondary};

    &:first-of-type {
        ${tw`mt-0`}
    }
    &:last-of-type {
        ${tw`mb-0`}
    }
`

export const Icon = styled.i`
    ${tw`mr-3 text-lg`}
`

export const Text = styled.p``
