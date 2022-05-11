import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.section``

export const Row = styled.div`
    ${tw`flex  my-6`}

    &:nth-child(2n + 1) {
        ${tw`flex-row`}
    }
`

export const Title = styled.b`
    ${tw`w-1/6 mr-3 flex items-center justify-center text-center text-sm`}
`
