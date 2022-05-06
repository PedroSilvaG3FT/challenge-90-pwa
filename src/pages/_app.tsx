import React, { useEffect } from 'react'
import store from '@/store'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import Layout from '@/components/ui/layout'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const persistor = persistStore(store)

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()
    const state = store.getState()
    const { user, token } = state.auth

    useEffect(() => {
        if (token && !user.acceptTerm) router.push('term')
        else if (token && !user.active) router.push('waiting-approval')
    }, [])

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
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </PersistGate>
            </Provider>
        </>
    )
}

export default MyApp
