import React from 'react'
import { useMapState } from '@/hooks'
import themes from '@/styles/css/ts/themes'
import GlobalStyle from '@/styles/css/ts/global'
import { ThemeProvider } from 'styled-components'
import AppToast from '@/components/common/app-toast'
import AppLoading from '@/components/common/app-loading'
import AppFloatShortcut from '@/components/ui/app-float-shortcut'
import { UiStateInterface } from '@/store/@interfaces/uiState.interface'
import { AuthStateInterface } from '@/store/@interfaces/authState.interface'
interface LayoutInterface {
    children: React.ReactNode
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
    const { theme } = useMapState('ui') as UiStateInterface
    const { token } = useMapState('auth') as AuthStateInterface

    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            <AppToast />
            <AppLoading />

            {children}

            {token && <AppFloatShortcut />}
        </ThemeProvider>
    )
}

export default Layout
