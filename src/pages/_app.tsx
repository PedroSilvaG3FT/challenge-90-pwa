import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import Layout from '@/components/ui/layout'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
                />
            </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
