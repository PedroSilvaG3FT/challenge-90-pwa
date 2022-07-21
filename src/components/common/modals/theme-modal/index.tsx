import React from 'react'
import { Container, Card, Icon } from './styles'
import AppModal from '@/components/common/app-modal'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { THEME_ITEMS, THEME_TYPE } from '@/contants/theme-type'
import { AppModalInterface } from '@/interfaces/modal.interface'

interface ThemeModalProps extends AppModalInterface {
    onSelect: (theme: number) => void
}

const ThemeModal: React.FC<ThemeModalProps> = props => {
    const { isOpen, onBackdropClick, onClose, onSelect } = props
    const themeIcons = {
        [THEME_TYPE.dark]: <MdDarkMode />,
        [THEME_TYPE.light]: <MdLightMode />
    }

    const themes = THEME_ITEMS.map(item => ({
        ...item,
        icon: themeIcons[item.id]
    }))

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
                {themes.map((item, index) => (
                    <Card key={index} onClick={() => onSelect(item.id)}>
                        <Icon>{item.icon}</Icon>
                        {item.label}
                    </Card>
                ))}
            </Container>
        </AppModal>
    )
}

export default ThemeModal
