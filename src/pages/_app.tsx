import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
