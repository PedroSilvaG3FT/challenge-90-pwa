import React from 'react'
import { useMapState } from '@/hooks'
import theme from '@/styles/css/ts/theme'
import GlobalStyle from '@/styles/css/ts/global'
import { ThemeProvider } from 'styled-components'
import AppToast from '@/components/common/app-toast'
import AppFloatShortcut from '@/components/ui/app-float-shortcut'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'
interface LayoutInterface {
    children: React.ReactNode
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
    const { token } = useMapState('auth') as AuthStateInterface

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppToast />
            {children}

            {token && <AppFloatShortcut />}
        </ThemeProvider>
    )
}

export default Layout
