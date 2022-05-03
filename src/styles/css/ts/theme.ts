const colors = {
    white: '#FFF',
    primary: '#E94560',
    secondary: '#0F3460'
}

const background = {
    bgPrimary: '#1A1A2E',
    bgSecondary: '#16213E'
}

export default {
    colors: {
        text: '#FFF',
        ...colors,
        ...background
    }
}
