const colors = {
    white: '#FFF',
    red: '#E94560',
    green: '#5EC278',
    yellow: '#FFD410',
    primary: '#E94560',
    secondary: '#0F3460'
}

const background = {
    bgPrimary: '#1A1A2E',
    bgSecondary: '#16213E'
}

const spacing = {
    headerHeight: '5rem'
}

const boxShadow = {
    center: (color: string = background.bgSecondary) => `0px 0px 12px ${color}`,
    bottom: (color: string = background.bgSecondary) => `0px 4px 12px ${color}`
}

export default {
    spacing,
    boxShadow,
    colors: {
        text: '#FFF',
        ...colors,
        ...background
    }
}
