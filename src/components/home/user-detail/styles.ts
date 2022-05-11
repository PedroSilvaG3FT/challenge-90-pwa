import { AppButton, AppContainer } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`pb-6 pt-14 rounded-b-[2rem]`}
    background: ${props => props.theme.colors.bgSecondary};
    box-shadow: ${({ theme }) =>
        theme.boxShadow.bottom(theme.colors.bgSecondary)};
`

export const Content = styled.section`
    ${tw`flex flex-col items-center`}
`

export const Article = styled.article`
    ${tw`flex items-center`}
`

export const Image = styled.img`
    ${tw`w-28 mr-8`}
`

export const Separator = styled.hr`
    ${tw`my-6 w-full`}
`

export const Button = styled(AppButton)`
    ${tw`w-2/5 top-12 relative uppercase text-sm`}
    letter-spacing: 4px;
`
