import { useMapState } from '@/hooks'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { BiLogOut } from 'react-icons/bi'
import { FaBalanceScale } from 'react-icons/fa'
import { authActions } from '@/store/reducers/auth.reducer'
import { menuActions } from '@/store/reducers/menu.reducer'
import AppFloatButton from '@/components/common/app-float-button'
import { exerciseActions } from '@/store/reducers/exercise.reducer'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'
import UpdateWeightModal from '@/components/common/modals/update-weight-modal'
import { AppFloatButtonItem } from '@/interfaces/_appFloatButtonItem.interface'

const AppFloatShortcut: React.FC = () => {
    const router = useRouter()
    const hideScreens = ['/', '/group']
    const [isModalOpen, setIsModalOpen] = useState(false)
    const hideButton = hideScreens.includes(router.pathname)
    const { user } = useMapState('auth') as AuthStateInterface

    const items: AppFloatButtonItem[] = [
        {
            name: 'Atualizar Peso',
            icon: <FaBalanceScale />,
            action: () => setIsModalOpen(true)
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

    const onUpdateWeight = (currentWeight: number) => {
        authActions.setUser({ ...user, currentWeight })
        setIsModalOpen(false)
    }

    if (hideButton) return <></>

    return (
        <>
            <AppFloatButton items={items} onSelectItem={handleSelectItem} />

            <UpdateWeightModal
                isOpen={isModalOpen}
                onUpdate={onUpdateWeight}
                onClose={() => setIsModalOpen(false)}
                onBackdropClick={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default AppFloatShortcut
