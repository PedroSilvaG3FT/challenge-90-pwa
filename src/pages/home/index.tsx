import React, { useEffect } from 'react'
import { GetStaticProps } from 'next'
import userMixin from '@/mixins/user.mixin'
import AppHead from '@/components/common/app-head'
import HomeGrid from '@/components/home/home-grid'
import UserDetail from '@/components/home/user-detail'

const Home: React.FC = () => {
    useEffect(() => {
        userMixin.updateUserStore()
    }, [])

    return (
        <>
            <AppHead title="Home" />

            <UserDetail />
            <HomeGrid />
        </>
    )
}

export const getStaticProps: GetStaticProps = () => {
    const props = { protected: true }
    return { props }
}

export default Home
