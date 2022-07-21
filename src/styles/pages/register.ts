import tw from 'twin.macro'
import styled from 'styled-components'
import {
    AppFormGroup,
    AppContainer,
    AppButton
} from '@/styles/css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`py-16 h-full flex flex-col items-center`}
`

export const Separator = styled.hr`
    ${tw`w-full my-10 rounded`}
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.theme.colors.bgSecondary};
`

export const Form = styled.form`
    ${tw`w-full mb-4`}
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
