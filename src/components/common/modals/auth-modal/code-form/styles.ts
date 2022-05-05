import { AppButton, AppFormGroup } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Form = styled.form`
    ${tw`flex flex-col items-center`}
`

export const FormGroup = styled(AppFormGroup)`
    ${tw`w-full`}
`

export const Input = styled.input``

export const Label = styled.label``

export const Span = styled.span``

export const Button = styled(AppButton)`
    ${tw`w-full mt-4`}
`
