import { useMapState } from '@/hooks'
import { Container } from '@/styles/pages/menu'
import CardDay from '@/components/menu/card-day'
import React, { useEffect, useState } from 'react'
import AppHead from '@/components/common/app-head'
import MenuTitle from '@/components/menu/menu-title'
import { MenuService } from '@/services/menu.service'
import { AlertService } from '@/services/_alert.service'
import SelectionDay from '@/components/menu/selection-day'
import { menuActions } from '@/store/reducers/menu.reducer'
import { MenuDayInterface } from '@/interfaces/menu.interface'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'
import { MenuStateInterface } from '@/store/@interfaces/menuState.interface'
import { ResponseErrorInterface } from '@/interfaces/_response-error.interface'

const Menu: React.FC = () => {
    const menuService = new MenuService()
    const alertService = new AlertService()
    const { user } = useMapState('auth') as AuthStateInterface
    const { menu } = useMapState('menu') as MenuStateInterface
    const [currentDay, setCurrentDay] = useState<MenuDayInterface>(
        {} as MenuDayInterface
    )
    const [selectedDay, setSelectedDay] = useState<MenuDayInterface>(
        {} as MenuDayInterface
    )
    useEffect(() => {
        getMenuUser()
    }, [])

    const getMenuUser = async () => {
        try {
            const { data } = await menuService.getById(Number(user.id))

            menuActions.setMenu(data)
            initCurrentDay()
        } catch (error: ResponseErrorInterface) {
            alertService.error(error.response.data.message)
        }
    }

    const initCurrentDay = () => {
        if (!menu.days) return
        const current = new Date().getDay() + 1
        console.log('|||||||||||', menu)
        const [first] = menu.days.filter(
            ({ numberDay }) => numberDay === current
        )

        setCurrentDay(first)
        setSelectedDay(first)
    }

    const onSelectDay = (day: MenuDayInterface) => {
        setSelectedDay(day)
    }

    return (
        <>
            <AppHead title="Cardápio" showHeader backTo="/home" />

            <Container showHeader>
                <MenuTitle
                    title={menu.menuName}
                    subtitle={`Periodo: ${menu.qtdDays}`}
                />

                <SelectionDay
                    days={menu.days}
                    current={currentDay}
                    selected={selectedDay}
                    onSelect={onSelectDay}
                />

                <CardDay data={selectedDay} />
            </Container>
        </>
    )
}

export default Menu