export interface MenuInterface {
    menuId: number
    qtdDays: number
    menuName: string
    menuMemberId: number
    days: MenuDayInterface[]
}

export interface MenuDayInterface {
    dayId: number
    dayName: string
    numberDay: number
    meals: MenuMealInterface[]
}

export interface MenuMealInterface {
    rating: number
    feedback: string
    menuItemId: number
    typeMealId: number
    descripition: string
    typeMealName: string
}
