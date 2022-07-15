import React, { useEffect, useRef } from 'react'
import {
    IMC_IMAGES,
    IMC_DESCRIPTION,
    IMC_MOTIVATIONAL_TEXT
} from '@/contants/imc'
import { Container, Title, Text, ImageContainer, Image } from './styles'
import ScrollAnimation from '@/components/ui/scroll-animation'

interface IMCResultProps {
    imcType: number
}

const IMCResult: React.FC<IMCResultProps> = ({ imcType }) => {
    const description = IMC_DESCRIPTION[imcType]
    const motivational = IMC_MOTIVATIONAL_TEXT[imcType]
    const image = IMC_IMAGES[imcType]
    const imageRef = useRef(null)

    useEffect(() => {
        animateImage()
    }, [imcType])

    const animateImage = () => {
        if (!imageRef.current) return

        const classAnimation = `animate__fadeInRight`
        const element = imageRef.current as HTMLElement
        const hasClass = element.classList.contains(classAnimation)

        if (hasClass) element.classList.remove(classAnimation)

        element.classList.add(classAnimation)
        setTimeout(() => element.classList.remove(classAnimation), 800)
    }

    return (
        <ScrollAnimation animation="pulse">
            <Container>
                <Title>{description}</Title>

                <ImageContainer ref={imageRef} className="animate__animated">
                    <Image src={image} alt={description} />
                </ImageContainer>

                <Text>{motivational}</Text>
            </Container>
        </ScrollAnimation>
    )
}

export default IMCResult
