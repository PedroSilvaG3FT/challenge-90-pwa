import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.article`
    ${tw`px-6 py-3 flex items-center justify-center rounded`}

    background: ${props => props.theme.colors.bgSecondary};
    box-shadow: ${({ theme }) =>
        theme.boxShadow.bottom(theme.colors.bgSecondary)};
`

export const Image = styled.img`
    ${tw`w-3/12 mr-4`}
`

export const Title = styled.h4`
    ${tw`text-base`}
`
