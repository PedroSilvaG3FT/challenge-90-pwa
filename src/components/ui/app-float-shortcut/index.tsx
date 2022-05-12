import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { FaBalanceScale } from 'react-icons/fa'
import AppFloatButton from '@/components/common/app-float-button'
import { AppFloatButtonItem } from '@/interfaces/_appFloatButtonItem.interface'

const AppFloatShortcut: React.FC = () => {
    const items: AppFloatButtonItem[] = [
        {
            name: 'Atualizar Peso',
            icon: <FaBalanceScale />,
            action: () => console.log('CALL 1')
        },
        {
            name: 'Sair',
            icon: <BiLogOut />,
            action: () => console.log('CALL 2')
        }
    ]

    const handleSelectItem = (item: AppFloatButtonItem) => item.action()
    return <AppFloatButton items={items} onSelectItem={handleSelectItem} />
}

export default AppFloatShortcut
