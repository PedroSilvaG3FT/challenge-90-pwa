import styled from 'styled-components'
import tw from 'twin.macro'

const animationBounceIn = {
    className: 'animate__animated animate__bounceIn'
}

const animationFadeInUp = {
    className: 'animate__animated animate__fadeInUp'
}

export const Container = styled.section`
    ${tw`h-screen flex flex-col items-center justify-center`}
`

export const Text = styled.p.attrs(animationFadeInUp)`
    ${tw`font-bold text-lg mb-4`}
`

export const Image = styled.img.attrs(animationBounceIn)`
    ${tw`w-full`}
`
