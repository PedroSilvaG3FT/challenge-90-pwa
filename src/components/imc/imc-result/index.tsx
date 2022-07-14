import React from 'react'
import {
    IMC_IMAGES,
    IMC_DESCRIPTION,
    IMC_MOTIVATIONAL_TEXT
} from '@/contants/imc'
import { Container, Title, Text, ImageContainer, Image } from './styles'

interface IMCResultProps {
    imcType: number
}

const IMCResult: React.FC<IMCResultProps> = ({ imcType }) => {
    const description = IMC_DESCRIPTION[imcType]
    const motivational = IMC_MOTIVATIONAL_TEXT[imcType]
    const image = IMC_IMAGES[imcType]

    return (
        <Container>
            <Title>{description}</Title>

            <ImageContainer>
                <Image src={image} alt={description} />
            </ImageContainer>

            <Text>{motivational}</Text>
        </Container>
    )
}

export default IMCResult
