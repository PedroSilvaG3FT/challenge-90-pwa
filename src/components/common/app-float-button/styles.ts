import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Button = styled(AppButton)`
    ${tw`
        fixed
        z-40
        w-14
        h-14
        flex
        right-4
        bottom-4
        text-[4rem]
        items-center
        rounded-full
        justify-center
    `}
`
