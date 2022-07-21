import tw from 'twin.macro'
import styled from 'styled-components'

export const AppFormGroup = styled.div`
    ${tw`w-auto mb-6`}

    > label {
        ${tw`block mb-2`}
    }

    > input,
    > select,
    > textarea {
        ${tw`w-full h-11 block rounded py-1 px-3 border border-solid`}
        text-rendering: optimizeLegibility !important;
        /* border-color: ${props => props.theme.colors.text}; */

        &:focus {
            ${tw`outline-none border border-solid`}
            border-color: ${props => props.theme.colors.primary};
        }
    }

    > span {
        ${tw`text-sm absolute mt-1`}
        color: ${props => props.theme.colors.primary};
    }
`
