import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`pb-8 pt-14 px-4`}
`

export const Grid = styled.div`
    ${tw`grid grid-cols-2 gap-4`}
`

export const Card = styled.article`
    ${tw` rounded px-8 py-6 flex flex-col justify-center items-center`}
    background: ${props => props.theme.colors.bgSecondary};
    box-shadow: ${props => `0px 4px 16px ${props.theme.colors.bgSecondary}`};

    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.colors.bgSecondary};

    &:nth-child(1):hover {
        background: ${props => props.theme.colors.primary};
    }
    &:nth-child(2):hover {
        background: ${props => props.theme.colors.green};
    }
    &:nth-child(3):hover {
        background: ${props => props.theme.colors.yellow};
    }
    &:nth-child(4):hover {
        background: ${props => props.theme.colors.bgPrimary};
    }
`

export const Title = styled.b``

export const Icon = styled.i`
    ${tw`mt-4 text-xl`}
`
