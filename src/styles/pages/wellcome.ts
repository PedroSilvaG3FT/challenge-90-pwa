import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '@/styles/css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`h-full flex justify-center items-center`}
`

export const Content = styled.article`
    ${tw`flex flex-col justify-end rounded-lg h-4/5 sm:w-full w-2/4`}
`

export const Image = styled.img`
    ${tw`self-center m-auto w-72`}
`

export const Button = styled(AppButton)`
    &:first-of-type {
        ${tw`mb-4`}
    }

    &:last-of-type {
        background: transparent;
    }
`
