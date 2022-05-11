import React from 'react'
import { Card, Title, SubTitle } from './styles'

interface MenuTitleProps {
    title: string
    subtitle: string
}

const MenuTitle: React.FC<MenuTitleProps> = props => {
    const { title, subtitle } = props
    return (
        <Card>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </Card>
    )
}

export default MenuTitle
