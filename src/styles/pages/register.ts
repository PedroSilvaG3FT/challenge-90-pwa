import styled from 'styled-components'
import { AppContainer, AppButton } from '@/styles/css/ts/components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`flex h-full flex-col justify-center items-center`}
`

export const Button = styled(AppButton)`
    ${tw`my-2 w-full`}
`
