import React from 'react'
import { Container, Content, Article, Text } from './styles'
import { MenuDayInterface } from '@/interfaces/menu.interface'

interface SelectionDayInterface {
    days: MenuDayInterface[]
    current: MenuDayInterface
    selected: MenuDayInterface
    onSelect: (data: MenuDayInterface) => void
}

const SelectionDay: React.FC<SelectionDayInterface> = props => {
    const { days, selected, current, onSelect } = props

    const getClassName = (id: number) => {
        if (id === current.dayId) return 'current'
        else if (id === selected.dayId) return 'active'
        else return ''
    }

    return (
        <Container>
            <Content>
                {days &&
                    days.map((item, index) => (
                        <Article
                            key={index}
                            onClick={() => onSelect(item)}
                            className={getClassName(item.dayId)}
                        >
                            <Text>{item.dayName}</Text>
                        </Article>
                    ))}
            </Content>
        </Container>
    )
}

export default SelectionDay
