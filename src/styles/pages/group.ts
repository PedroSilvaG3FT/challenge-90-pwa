import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '@/styles/css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`flex flex-col items-center pb-24`}
`

export const Grid = styled.div`
    ${tw`grid grid-cols-2 gap-4`}
`

export const Card = styled.article`
    ${tw`p-5 flex flex-col items-center rounded-lg`}
    border: 1px solid transparent;
    background: ${props => props.theme.colors.bgSecondary};
    box-shadow: ${props => `0px 4px 16px ${props.theme.colors.bgSecondary}`};

    &:hover {
        border-color: ${props => props.theme.colors.primary};
        box-shadow: ${props => `0px 4px 16px ${props.theme.colors.primary}`};
    }
`

export const Image = styled.img`
    ${tw`w-20 mb-4`}
`

export const Article = styled.article`
    ${tw`w-full mb-2 flex justify-between`}
`

export const Title = styled.b`
    ${tw`text-center`}
`

export const Separator = styled.hr`
    ${tw`w-full mt-2 mb-4 flex`}
`

export const Strong = styled.b``

export const Text = styled.p``

export const Button = styled(AppButton)`
    ${tw`mt-6 px-10 fixed bottom-[2%] flex items-center`}
    background: ${props => props.theme.colors.green};
    box-shadow: ${props => `0px 0px 16px ${props.theme.colors.green}`};

    > svg {
        ${tw`ml-2 text-lg`}
    }
`
