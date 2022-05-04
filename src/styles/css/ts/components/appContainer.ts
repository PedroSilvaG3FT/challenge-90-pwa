import tw from 'twin.macro'
import styled from 'styled-components'

export const AppContainer = styled.section`
    ${tw`container mx-auto p-4`}

    @media (min-width: 1200px) {
        max-width: 1440px;
    }
`
