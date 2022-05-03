import React from 'react'
import AppHead from '@/components/common/app-head'
import HomeGrid from '@/components/home/home-grid'
import UserDetail from '@/components/home/user-detail'

const Home: React.FC = () => {
    return (
        <>
            <AppHead title="Home" />

            <UserDetail />
            <HomeGrid />
        </>
    )
}

export default Home
