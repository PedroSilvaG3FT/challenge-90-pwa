import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`text-sm flex flex-col items-center justify-center`}
`

export const Card = styled.article`
    ${tw`w-full mb-2 p-4 rounded-md font-bold flex items-center`}

    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Icon = styled.i`
    ${tw`text-lg mr-2`}
`
