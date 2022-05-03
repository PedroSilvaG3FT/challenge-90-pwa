import { AppButton, AppFormGroup } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Header = styled.article`
    ${tw`mb-4 flex items-center justify-center`}
`

export const Body = styled.article``

export const ImageLogo = styled.img`
    width: 100px;
`

export const Form = styled.form``

export const FormGroup = styled(AppFormGroup)`
    ${tw`w-full`}
`

export const Input = styled.input``

export const Label = styled.label``

export const Span = styled.span``

export const Button = styled(AppButton)`
    ${tw`w-full mt-4`}
`
