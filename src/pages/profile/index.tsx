import React from 'react'
import { GetStaticProps } from 'next'
import AppHead from '@/components/common/app-head'
import { Container } from '@/styles/pages/profile'
import UserData from '@/components/profile/user-data'
import ProfileForm from '@/components/profile/profile-form'

const Profile: React.FC = () => {
    return (
        <>
            <AppHead title="Perfil" showHeader backTo="/home" />

            <Container showHeader>
                <UserData />
                <ProfileForm />
            </Container>
        </>
    )
}

export const getStaticProps: GetStaticProps = () => {
    const props = { protected: true }
    return { props }
}

export default Profile
