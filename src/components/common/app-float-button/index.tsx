import { Button } from './styles'
import FloatItems from './float-items'
import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { AppFloatButtonItem } from '@/interfaces/_appFloatButtonItem.interface'

interface AppFloatButtonProps {
    items: AppFloatButtonItem[]
    onSelectItem?: (data: AppFloatButtonItem) => void
}

const AppFloatButton: React.FC<AppFloatButtonProps> = props => {
    const { items, onSelectItem } = props
    const [isOpen, setIsOpen] = useState(false)

    const handleSelect = (item: AppFloatButtonItem) => {
        if (onSelectItem) onSelectItem(item)
        if (!item.preventCloseOnSelect) setIsOpen(false)
    }

    return (
        <>
            <Button onClick={() => setIsOpen(!isOpen)}>
                <BsPlus />
            </Button>

            <FloatItems
                items={items}
                isOpen={isOpen}
                onSelectItem={data => handleSelect(data)}
                onBackdropClick={() => setIsOpen(false)}
            />
        </>
    )
}

export default AppFloatButton
