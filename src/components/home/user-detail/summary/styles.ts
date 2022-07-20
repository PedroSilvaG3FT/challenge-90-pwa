import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section`
    ${tw`w-full rounded-lg px-4 py-3 flex justify-between`}
    background: ${props => props.theme.colors.bgPrimary};
`

export const Article = styled.article`
    ${tw`mx-2 flex flex-col justify-between items-center`}

    &:first-of-type {
        ${tw`ml-0`}
    }
    &:last-of-type {
        ${tw`mr-0`}
    }
`

export const Title = styled.b`
    ${tw`w-full text-sm text-center mt-4`}
`
