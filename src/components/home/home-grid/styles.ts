import { AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`pb-8 pt-14`}
`

export const Grid = styled.div`
    ${tw`grid grid-cols-2 gap-4`}
`

export const Card = styled.article`
    ${tw`rounded-md px-8 py-6 flex flex-col justify-center items-center border border-solid`}
    border-color: ${props => props.theme.colors.bgSecondary};
    background: ${props => props.theme.colors.bgSecondary};

    &:hover {
        background: ${props => props.theme.colors.bgPrimary};
    }
`

export const Title = styled.b``

export const Icon = styled.i`
    ${tw`mt-4 text-xl`}
`
