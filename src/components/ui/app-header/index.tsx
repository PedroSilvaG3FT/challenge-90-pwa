import React from 'react'
import { useRouter } from 'next/router'
import { Container, Nav, Button, Title, Slot } from './styles'
import { AppHeaderInterface } from '@/interfaces/_appHeader.interface'

const AppHeader: React.FC<AppHeaderInterface> = props => {
    const { title, backTo, backToText, rightSlot } = props
    const router = useRouter()

    return (
        <Container>
            <Nav>
                <Slot>
                    {backTo && (
                        <Button onClick={() => router.push(backTo)}>
                            {backToText || 'Voltar'}
                        </Button>
                    )}
                </Slot>

                <Title>{title}</Title>

                <Slot>{rightSlot}</Slot>
            </Nav>
        </Container>
    )
}

export default AppHeader
