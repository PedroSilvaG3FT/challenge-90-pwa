import React from 'react'
import { Container } from './styles'
import Theme from '@/styles/css/ts/theme'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

interface ProgressCircleProps {
    size?: number | string
    percent: number
    color?: string
    text?: string
}

const ProgressCircle: React.FC<ProgressCircleProps> = props => {
    const { percent, size, color, text } = props

    const containerStyle = {
        width: size || '100%',
        height: size || '100%'
    }

    const progresStyle = buildStyles({
        textColor: color || Theme.colors.primary,
        pathColor: color || Theme.colors.primary
    })

    return (
        <Container style={containerStyle}>
            <CircularProgressbar
                text={text}
                value={percent}
                styles={progresStyle}
                strokeWidth={3}
            />
        </Container>
    )
}

export default ProgressCircle
