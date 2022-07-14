import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`w-full mt-6 p-6 flex flex-col items-center rounded-lg`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Title = styled.h4`
    ${tw`text-lg mb-6`}
`

export const Text = styled.p`
    ${tw`text-center`}
`

export const ImageContainer = styled.figure`
    ${tw`h-48 mb-6`}
`

export const Image = styled.img`
    ${tw`w-full h-full`}
`
