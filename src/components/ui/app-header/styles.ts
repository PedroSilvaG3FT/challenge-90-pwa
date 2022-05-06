import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '@/styles/css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`rounded-b-[1.2rem] flex justify-center fixed`}
    height: ${props => props.theme.spacing.headerHeight};
    background: ${props => props.theme.colors.bgSecondary};
    box-shadow: ${props => `0px 4px 18px ${props.theme.colors.bgPrimary}`};
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
`

export const Title = styled.b`
    ${tw`text-lg flex items-center justify-center`}
`
