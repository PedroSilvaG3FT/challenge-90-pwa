import styled from 'styled-components'
import tw from 'twin.macro'

const animatefadeInUp = {
    className: 'animate__animated animate__fadeInUp'
}

export const Container = styled.section.attrs(animatefadeInUp)`
    ${tw`my-4 px-2  rounded-lg`}
    background: ${props => props.theme.colors.bgSecondary};
`
export const Content = styled.div`
    ${tw`overflow-x-auto py-4 flex`}

    ::-webkit-scrollbar {
        display: none;
    }
`

export const Article = styled.article`
    ${tw`mx-1 px-3 py-2 flex items-center rounded-lg`}
    background: ${props => props.theme.colors.bgPrimary};

    &:first-of-type {
        ${tw`ml-0`}
    }
    &:last-of-type {
        ${tw`mr-0`}
    }

    &.active {
        background: ${props => props.theme.colors.primary};
        box-shadow: ${({ theme }) =>
            theme.boxShadow.center(theme.colors.primary)};
    }

    &.current {
        background: ${props => props.theme.colors.green};
        box-shadow: ${({ theme }) =>
            theme.boxShadow.center(theme.colors.green)};
    }
`

export const Text = styled.b`
    ${tw`text-sm whitespace-nowrap`}
`
