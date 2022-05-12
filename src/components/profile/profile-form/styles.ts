import tw from 'twin.macro'
import styled from 'styled-components'
import { AppFormGroup, AppButton } from '@/styles/css/ts/components'

export const Container = styled.section`
    ${tw`p-4 mt-8 rounded-lg flex items-center`}

    background: ${props => props.theme.colors.bgSecondary};
    box-shadow: ${({ theme }) =>
        theme.boxShadow.center(theme.colors.bgSecondary)};
`

export const Form = styled.form`
    ${tw`w-full`}
`

export const Row = styled.div`
    ${tw`grid`}
    grid-template-columns: 70% 30%;
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
