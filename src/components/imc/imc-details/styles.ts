import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`w-full mt-6 p-6 flex flex-col items-center rounded-lg`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Text = styled.p``

export const Title = styled.p`
    ${tw`text-lg mt-2`}
`

export const Small = styled.small`
    ${tw`text-sm`}
`

export const Sup = styled.sup``

export const Grid = styled.section`
    ${tw`mt-3 py-3 grid gap-4 grid-cols-3 border-t`}
    border-top: 2px solid ${({ theme }) => theme.colors.bgPrimary};
`
interface CardProps {
    isActive: boolean
    color: 'green' | 'yellow' | 'red'
}

export const Card = styled.div<CardProps>`
    ${tw`text-center p-2 text-sm rounded-md`}

    color: ${({ theme, color, isActive }) =>
        isActive ? theme.colors[color] : ''};

    border: 1px solid
        ${({ theme, color, isActive }) =>
            isActive ? theme.colors[color] : theme.colors.bgSecondary};

    > article {
        background: ${({ theme, color }) => theme.colors[color]};
    }
`

export const Badge = styled.article`
    ${tw`rounded-md border text-[95%] p-2 mb-2`}
    color: ${({ theme }) => theme.colors.text}
`
