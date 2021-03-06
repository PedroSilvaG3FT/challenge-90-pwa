import React, { useEffect, useState } from 'react'
import store from '@/store'
import Head from 'next/head'
import NoAccess from './no-access'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import Layout from '@/components/ui/layout'
import { persistStore } from 'redux-persist'
import { SessionStorage } from '@/store/session'
import { AuthContext } from '@/context/auth.context'
import { PersistGate } from 'redux-persist/integration/react'
import { SHOW_REQUEST_INSTALL } from '@/contants/session-keys'
import { loadingActions } from '@/store/reducers/loading.reducer'
import EncouragingInstallIOS from '@/components/common/modals/encouraging-install-ios'

const persistor = persistStore(store)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()
    const state = store.getState()
    const { user, token } = state.auth
    const sessionStorage = new SessionStorage()
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        if (token && !user.acceptTerm) router.push('term')
        else if (token && !user.active) router.push('waiting-approval')

        loadingActions.setMessage('')
        loadingActions.setLoading(false)
        controlRequestInstall()
    }, [])

    const controlRequestInstall = () => {
        const isIOS = ['iPhone', 'iPad', 'iPod'].includes(navigator.platform)
        const isPWA = window.matchMedia('(display-mode: standalone)').matches

        if (isPWA || !isIOS) return

        const wasOpened =
            sessionStorage.getItem(SHOW_REQUEST_INSTALL) === 'false'

        if (wasOpened) return

        sessionStorage.setItem(SHOW_REQUEST_INSTALL, 'true')
        setTimeout(() => setIsModalOpen(true), 1500)
    }

    const onCloseRequestInstall = () => {
        sessionStorage.setItem(SHOW_REQUEST_INSTALL, 'false')
        setIsModalOpen(false)
    }

    const routeControl = () => {
        if (pageProps.protected && !user.id) return <NoAccess />

        return (
            <>
                <Component {...pageProps} />
                <EncouragingInstallIOS
                    isOpen={isModalOpen}
                    onClose={onCloseRequestInstall}
                />
            </>
        )
    }

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=0"
                />
            </Head>

            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AuthContext.Provider value={user}>
                        <Layout>{routeControl()}</Layout>
                    </AuthContext.Provider>
                </PersistGate>
            </Provider>
        </>
    )
}

export default MyApp
