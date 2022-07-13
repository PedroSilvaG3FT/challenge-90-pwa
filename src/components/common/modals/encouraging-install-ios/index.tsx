import React from 'react'
import Logo from '@/assets/images/logo.png'
import { IoShareOutline } from 'react-icons/io5'
import AppModal from '@/components/common/app-modal'
import { AppModalInterface } from '@/interfaces/modal.interface'
import { Container, ImageContainer, Image, Title, Text } from './styles'

interface EncouragingInstallIOSProps extends AppModalInterface {}

const EncouragingInstallIOS: React.FC<EncouragingInstallIOSProps> = props => {
    const { isOpen, onBackdropClick, onClose } = props

    return (
        <AppModal
            width="90vw"
            maxWidth={420}
            maxHeight={420}
            isOpen={isOpen}
            onClickClose={onClose}
            onBackdropClick={onBackdropClick}
        >
            <Container>
                <ImageContainer>
                    <Image src={Logo} />
                </ImageContainer>

                <Title>
                    Instale o app em seu celular e tenha uma experiencia ainda
                    melhor
                </Title>

                <Text>
                    Clique em <IoShareOutline /> depois em
                    {` 'Adicionar à Tela de início'`}
                </Text>
            </Container>
        </AppModal>
    )
}

export default EncouragingInstallIOS
