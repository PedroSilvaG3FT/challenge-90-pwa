import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.article`
    ${tw`flex flex-col mt-4`}
`

export const Card = styled(motion.div)`
    ${tw`flex my-2 px-2 py-4 h-24 w-full rounded-lg`}
    background: ${props => props.theme.colors.bgSecondary};
    box-shadow: ${({ theme }) =>
        theme.boxShadow.center(theme.colors.bgSecondary)};

    &:hover {
        box-shadow: ${({ theme }) =>
            theme.boxShadow.center(theme.colors.yellow)};
    }

    &:first-of-type {
        > b {
            color: ${props => props.theme.colors.primary};
        }

        &:hover {
            box-shadow: ${({ theme }) =>
                theme.boxShadow.center(theme.colors.primary)};
        }
    }

    &:last-of-type {
        > b {
            color: ${props => props.theme.colors.green};
        }

        &:hover {
            box-shadow: ${({ theme }) =>
                theme.boxShadow.center(theme.colors.green)};
        }
    }
`

export const Title = styled.b`
    ${tw`h-full w-1/5 flex pr-2 items-center text-sm text-center justify-center`}
    border-right: ${props => `1px solid ${props.theme.colors.text}`};
    color: ${props => props.theme.colors.yellow};
`

export const Text = styled.p`
    ${tw`flex items-center pl-2 text-sm`}
`
