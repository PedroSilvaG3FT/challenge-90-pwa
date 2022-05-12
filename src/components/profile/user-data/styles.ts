import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`relative flex items-center p-4 rounded-lg`}
    background: ${props => props.theme.colors.bgSecondary};
    box-shadow: ${({ theme }) =>
        theme.boxShadow.center(theme.colors.bgSecondary)};

    &.danger {
        box-shadow: ${({ theme }) =>
            theme.boxShadow.center(theme.colors.primary)};
    }
`

export const ImageContainer = styled.div`
    ${tw`text-center mr-4`}
`

export const Image = styled.img`
    ${tw`w-24`}
`

export const Section = styled.section`
    ${tw`w-full`}
`

export const Separator = styled.hr`
    ${tw`my-2`}
`

export const Span = styled.span`
    ${tw`absolute rounded text-sm right-0 px-2 py-1`}
    bottom: -10px;
    background: ${props => props.theme.colors.primary};
    box-shadow: ${({ theme }) => theme.boxShadow.center(theme.colors.primary)};
`

export const Article = styled.article`
    ${tw`flex text-sm`}
`
export const Text = styled.p``

export const Title = styled.b`
    ${tw`mr-2`}
`

export const Label = styled.label`
    ${tw`text-sm`}
`
