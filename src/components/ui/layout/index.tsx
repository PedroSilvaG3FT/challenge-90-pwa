import React from 'react'
import theme from '@/styles/css/ts/theme'
import GlobalStyle from '@/styles/css/ts/global'
import { ThemeProvider } from 'styled-components'

interface LayoutInterface {
    children: React.ReactNode
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}

export default Layout