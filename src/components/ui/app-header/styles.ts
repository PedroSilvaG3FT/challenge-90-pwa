import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '@/styles/css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`p-0 fixed w-full max-w-full z-20`}
`

export const Content = styled(AppContainer)`
    ${tw`rounded-b-[1.2rem] flex justify-center `}
    height: ${props => props.theme.spacing.headerHeight};
    background: ${props => props.theme.colors.bgSecondary};
    box-shadow: ${({ theme }) =>
        theme.boxShadow.bottom(theme.colors.bgPrimary)};
`

export const Nav = styled.nav`
    ${tw`w-full grid`}
    grid-template-columns: 15% 70% 15%;
`

export const Slot = styled.div`
    ${tw`text-sm flex items-center justify-center`}
`

export const Button = styled(AppButton)`
    ${tw`mr-auto`}
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
`

export const Title = styled.b`
    ${tw`text-lg flex items-center justify-center`}
`
