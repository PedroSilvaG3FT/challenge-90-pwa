import React from 'react'
import Head from 'next/head'
import AppHeader from '@/components/ui/app-header'
import { AppHeaderInterface } from '@/interfaces/_appHeader.interface'

interface AppHeadInterface extends AppHeaderInterface {
    showHeader?: boolean
}

const AppHead: React.FC<AppHeadInterface> = props => {
    const { title, backTo, backToText, rightSlot, showHeader } = props

    return (
        <>
            <Head>
                <title>{title} - Desafio 90</title>
            </Head>

            {showHeader && (
                <AppHeader
                    title={title}
                    backTo={backTo}
                    rightSlot={rightSlot}
                    backToText={backToText}
                />
            )}
        </>
    )
}

export default AppHead
