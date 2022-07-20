import { AppButton, AppFormGroup } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const animationFadeInLeft = {
    className: 'animate__animated animate__fadeInLeft'
}

export const Form = styled.form.attrs(animationFadeInLeft)`
    ${tw`w-full p-4 rounded-md shadow-md`}
    background: ${({ theme }) => theme.colors.bgSecondary};
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
