import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`px-4 pb-6 pt-14 rounded-b-[2rem] flex flex-col items-center`}
    background: ${props => props.theme.colors.bgSecondary};
    box-shadow: ${props => `0px 4px 16px ${props.theme.colors.bgSecondary}`};
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
