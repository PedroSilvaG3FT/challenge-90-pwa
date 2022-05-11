import styled from 'styled-components'
import tw from 'twin.macro'

export const Card = styled.article`
    ${tw`min-h-[5rem] my-4 p-4 rounded-br-lg w-full text-sm`}
    background: ${props => props.theme.colors.bgSecondary};
    box-shadow: ${props =>
        props.theme.boxShadow.center(props.theme.colors.bgSecondary)};

    &:first-of-type {
        ${tw`mt-0`}
    }
    &:last-of-type {
        ${tw`mb-0`}
    }
`

export const CardExercice = styled.article`
    ${tw`p-2 rounded self-stretch flex items-center justify-center flex-col`}
    font-size: 90%;
    background: ${props => props.theme.colors.bgPrimary};
    box-shadow: ${props =>
        props.theme.boxShadow.center(props.theme.colors.bgPrimary)};

    &.video-mode {
        background: ${props => props.theme.colors.primary};
        box-shadow: ${props =>
            props.theme.boxShadow.center(props.theme.colors.primary)};
    }
`

export const VideoContainer = styled.div`
    ${tw`flex items-center justify-center flex-col`}

    > svg {
        ${tw`text-[2rem] mb-2`}
    }
`

export const Article = styled.article`
    ${tw`grid gap-2 grid-cols-2 `}
`

export const Title = styled.p`
    ${tw`text-center mb-2 font-bold`}
`

export const Text = styled.p`
    ${tw`text-center`}
`
