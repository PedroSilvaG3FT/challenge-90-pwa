import tw from 'twin.macro'
import styled from 'styled-components'
import {
    AppFormGroup,
    AppContainer,
    AppButton
} from '@/styles/css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`py-16 h-full flex justify-center items-center`}
`

export const Form = styled.form`
    ${tw`w-full`}
`

export const FormGroup = styled(AppFormGroup)`
    ${tw`w-full`}
`

export const Button = styled(AppButton)`
    ${tw`w-full mt-4`}
`

export const Input = styled.input``

export const Label = styled.label``

export const Span = styled.span``
