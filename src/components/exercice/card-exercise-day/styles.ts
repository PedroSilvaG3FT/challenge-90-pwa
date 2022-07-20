import styled from 'styled-components'
import tw from 'twin.macro'

const animationFadeInLeft = {
    className: 'animate__animated animate__fadeInLeft'
}

export const Container = styled.div.attrs(animationFadeInLeft)`
    ${tw`w-full min-h-[5rem] my-4 p-4 text-sm rounded-br-lg`}
    background: ${props => props.theme.colors.bgSecondary};

    &:first-of-type {
        ${tw`mt-0`}
    }
    &:last-of-type {
        ${tw`mb-0`}
    }
`

export const Title = styled.p`
    ${tw`text-center mb-2 font-bold`}
`
