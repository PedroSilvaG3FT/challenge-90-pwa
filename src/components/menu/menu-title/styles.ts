import tw from 'twin.macro'
import { rgba } from 'polished'
import styled from 'styled-components'
import bgFood from '@/assets/images/bg-food.png'

export const Card = styled.article`
    ${tw`p-6 h-36 rounded-lg flex flex-col justify-center items-center`}

    background-size: 90% !important;
    background: ${props => {
        const bgColor = rgba(props.theme.colors.bgSecondary, 0.8)
        return `linear-gradient(0deg, ${bgColor}, ${bgColor}), url(${bgFood})`
    }};
    box-shadow: ${({ theme }) =>
        theme.boxShadow.center(theme.colors.bgPrimary)};
`

export const Title = styled.h3`
    ${tw`mb-2`}
`

export const SubTitle = styled.h5``
