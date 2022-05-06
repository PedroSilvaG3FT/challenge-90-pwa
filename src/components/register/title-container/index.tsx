import React from 'react'
import { Container, Image, Title } from './styles'

interface TitleContainerProps {
    image: any
    title: string
}

const TitleContainer: React.FC<TitleContainerProps> = props => {
    const { image, title } = props

    return (
        <Container>
            <Image src={image} />
            <Title>{title}</Title>
        </Container>
    )
}

export default TitleContainer
