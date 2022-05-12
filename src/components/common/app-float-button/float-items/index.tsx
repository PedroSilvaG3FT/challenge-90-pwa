import React from 'react'
import AppModal from '@/components/common/app-modal'
import { AppModalInterface } from '@/interfaces/modal.interface'
import { AppFloatButtonItem } from '@/interfaces/_appFloatButtonItem.interface'
import { Body, Item, Icon, Text } from './styles'

interface FloatItemsProps extends AppModalInterface {
    items: AppFloatButtonItem[]
    onSelectItem?: (data: AppFloatButtonItem) => void
}

const FloatItems: React.FC<FloatItemsProps> = props => {
    const { isOpen, onBackdropClick, onClose, items, onSelectItem } = props

    const containerStyle = {
        position: 'fixed',
        bottom: '5rem',
        right: '0',
        padding: 16
    }

    const handleSelectItem = (item: AppFloatButtonItem) => {
        if (onSelectItem) onSelectItem(item)
    }

    return (
        <AppModal
            width="50vw"
            maxWidth={420}
            maxHeight={420}
            isOpen={isOpen}
            onClickClose={onClose}
            containerStyle={containerStyle}
            onBackdropClick={onBackdropClick}
        >
            <Body>
                {items.map((item, index) => (
                    <Item key={index} onClick={() => handleSelectItem(item)}>
                        {item.icon && <Icon>{item.icon}</Icon>}
                        <Text>{item.name}</Text>
                    </Item>
                ))}
            </Body>
        </AppModal>
    )
}

export default FloatItems
