import tw from 'twin.macro'
import { rgba } from 'polished'
import styled from 'styled-components'
import bgFood from '@/assets/images/bg-food.png'
import { AppContainer } from '@/styles/css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`min-h-full`}
    background: ${props => {
        const bgColor = rgba(props.theme.colors.bgPrimary, 0.96)
        return `linear-gradient(0deg, ${bgColor}, ${bgColor}), url(${bgFood})`
    }};
`

export const Section = styled.section`
    ${tw`my-4`}
`
