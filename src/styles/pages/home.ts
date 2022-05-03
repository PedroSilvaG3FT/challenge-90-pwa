import styled from 'styled-components'
import tw from 'twin.macro'
import { AppButton } from '@/styles/css/ts/components'

export const Container = styled.section`
    ${tw`h-full flex justify-center items-center py-12 px-6`}
`

export const Content = styled.article`
    ${tw`flex flex-col justify-end rounded-lg h-4/5 w-full`}
`

export const Image = styled.img`
    width: 70vw;
    height: 70vw;
    ${tw`self-center m-auto`}
`

export const Button = styled(AppButton)`
    &:first-of-type {
        ${tw`mb-4`}
    }

    &:last-of-type {
        background: transparent;
    }
`
