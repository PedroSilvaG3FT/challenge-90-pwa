import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { FaBalanceScale } from 'react-icons/fa'
import AppFloatButton from '@/components/common/app-float-button'
import { AppFloatButtonItem } from '@/interfaces/_appFloatButtonItem.interface'
import { useRouter } from 'next/router'
import { authActions } from '@/store/reducers/auth.reducer'
import { exerciseActions } from '@/store/reducers/exercise.reducer'
import { menuActions } from '@/store/reducers/menu.reducer'

const AppFloatShortcut: React.FC = () => {
    const router = useRouter()
    const hideScreens = ['/']
    const hideButton = hideScreens.includes(router.pathname)

    const items: AppFloatButtonItem[] = [
        {
            name: 'Atualizar Peso',
            icon: <FaBalanceScale />,
            action: () => console.log('CALL 1')
        },
        {
            name: 'Sair',
            icon: <BiLogOut />,
            action: () => handleLogout()
        }
    ]

    const handleLogout = () => {
        router.push('/')
        authActions.clearState()
        menuActions.clearState()
        exerciseActions.clearState()
    }

    const handleSelectItem = (item: AppFloatButtonItem) => item.action()

    if (hideButton) return <></>
    return <AppFloatButton items={items} onSelectItem={handleSelectItem} />
}

export default AppFloatShortcut
