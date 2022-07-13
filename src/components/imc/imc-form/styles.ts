import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Form = styled.form`
    ${tw`w-full grid gap-4 grid-cols-2`}
`

export const Card = styled.article`
    ${tw`rounded-lg px-4 py-8 flex flex-col justify-center items-center`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Text = styled.p`
    ${tw`w-full mb-4 text-lg text-center font-bold`}
`

export const Input = styled.input`
    color: ${({ theme }) => theme.colors.text};
    ${tw`w-full py-2 text-lg text-center border-0 border-b bg-transparent`}

    &:focus {
        ${tw`outline-none`}
        border-color: ${({ theme }) => theme.colors.primary};
    }
`

export const Button = styled(AppButton)`
    ${tw`w-full mt-4`}
`
