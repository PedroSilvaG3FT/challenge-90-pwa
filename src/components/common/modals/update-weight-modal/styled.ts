import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppFormGroup } from '@/styles/css/ts/components'

export const Form = styled.form`
    ${tw`w-full`}
`

export const FormGroup = styled(AppFormGroup)`
    ${tw`w-full`}

    &:first-child {
        ${tw`pr-3`}
    }
`

export const Button = styled(AppButton)`
    ${tw`w-full mt-4`}
`

export const Input = styled.input``

export const Label = styled.label``

export const Span = styled.span``
