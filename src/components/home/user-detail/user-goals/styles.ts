import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`w-full`}
`

export const Content = styled.section`
    ${tw`flex justify-between`}
`

export const Article = styled.article`
    ${tw`m-4 rounded text-sm text-center`}
    background: ${props => props.theme.colors.bgSecondary};

    &:first-of-type {
        ${tw`ml-0`}

        > b {
            color: ${props => props.theme.colors.text};
        }
    }

    &:last-of-type > b {
        color: ${props => props.theme.colors.primary};
    }

    > b {
        color: ${props => props.theme.colors.yellow};
    }
`

export const Title = styled.b``

export const Text = styled.p`
    ${tw`mt-2`}
`
