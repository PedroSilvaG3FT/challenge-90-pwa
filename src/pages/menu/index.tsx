import { useMapState } from '@/hooks'
import { GetStaticProps } from 'next'
import { Container } from '@/styles/pages/menu'
import CardDay from '@/components/menu/card-day'
import React, { useEffect, useState } from 'react'
import AppHead from '@/components/common/app-head'
import MenuTitle from '@/components/menu/menu-title'
import { MenuService } from '@/services/menu.service'
import SelectionDay from '@/components/menu/selection-day'
import { menuActions } from '@/store/reducers/menu.reducer'
import { MenuDayInterface } from '@/interfaces/menu.interface'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'
import { MenuStateInterface } from '@/store/@interfaces/menuState.interface'
import { ResponseErrorInterface } from '@/interfaces/_response-error.interface'

const Menu: React.FC = () => {
    const menuService = new MenuService()
    const { user } = useMapState('auth') as AuthStateInterface
    const { menu } = useMapState('menu') as MenuStateInterface

    const [initiated, setInitiated] = useState(false)
    const [currentDay, setCurrentDay] = useState<MenuDayInterface>(
        {} as MenuDayInterface
    )
    const [selectedDay, setSelectedDay] = useState<MenuDayInterface>(
        {} as MenuDayInterface
    )

    useEffect(() => {
        getMenuUser()

        return () => {
            setInitiated(false)
        }
    }, [])

    useEffect(() => {
        if (!initiated) initCurrentDay()
    }, [menu])

    const getMenuUser = async () => {
        try {
            const { data } = await menuService.getById(Number(user.id))
            menuActions.setMenu(data)
        } catch (error: ResponseErrorInterface) {
            console.error(error)
        }
    }

    const initCurrentDay = () => {
        if (!menu.menuId) return

        const current = new Date().getDay() + 1
        const [first] = menu.days.filter(
            ({ numberDay }) => numberDay === current
        )

        setInitiated(true)
        setCurrentDay(first)
        setSelectedDay(first)
    }

    return (
        <>
            <AppHead title="Cardápio" showHeader backTo="/home" />

            <Container showHeader>
                {menu.menuId ? (
                    <>
                        <MenuTitle
                            title={menu.menuName}
                            subtitle={`Periodo: ${menu.qtdDays}`}
                        />

                        <SelectionDay
                            days={menu.days}
                            current={currentDay}
                            selected={selectedDay}
                            onSelect={day => setSelectedDay(day)}
                        />

                        <CardDay data={selectedDay} />
                    </>
                ) : (
                    <MenuTitle
                        title={'Sem Cardapio'}
                        subtitle={`Solicite ao administrador`}
                    />
                )}
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = () => {
    const props = { protected: true }
    return { props }
}

export default Menu
