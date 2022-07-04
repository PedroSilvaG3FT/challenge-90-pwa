import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`text-sm flex flex-col items-center justify-center`}
`

export const ImageContainer = styled.figure`
    ${tw`w-20 p-2 mb-6 rounded-lg`}
    background: ${props => props.theme.colors.bgSecondary};
    box-shadow: ${({ theme }) =>
        theme.boxShadow.center(theme.colors.bgSecondary)};
`

export const Image = styled.img`
    ${tw`w-full`}
`

export const Title = styled.p`
    ${tw`text-center mb-6`}
`

export const Text = styled.p`
    ${tw`text-center flex items-end `}

    > svg {
        ${tw`text-lg mx-1`}
    }
`
