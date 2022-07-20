import React, { useEffect } from 'react'
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

export default Home
