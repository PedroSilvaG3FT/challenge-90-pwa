import { useMapState } from '@/hooks'
import React, { useEffect, useState } from 'react'
import AppModal from '@/components/common/app-modal'
import { AlertService } from '@/services/_alert.service'
import { AvatarService } from '@/services/avatar.service'
import { avatarActions } from '@/store/reducers/avatar.reducer'
import { AppModalInterface } from '@/interfaces/modal.interface'
import { Footer, Button, Grid, Card, Image } from './styles'
import { ResponseErrorInterface } from '@/interfaces/_response-error.interface'
import { AvatarStateInterface } from '@/store/@interfaces/avatarState.interface'
import { AvatarInterface } from '@/interfaces/avatar.interface'

interface AvatarModalProps extends AppModalInterface {
    onSave: (data: AvatarInterface) => void
}

const AvatarModal: React.FC<AvatarModalProps> = props => {
    const { isOpen, onBackdropClick, onClose, onSave } = props
    const [selected, setSelected] = useState<AvatarInterface>(
        {} as AvatarInterface
    )
    const avatarService = new AvatarService()
    const alertService = new AlertService()

    const { avatarList } = useMapState('avatar') as AvatarStateInterface

    useEffect(() => {
        getAvatarList()
    }, [])

    const getAvatarList = async () => {
        try {
            const { data } = await avatarService.getAll()
            avatarActions.setAvatarList(data)
        } catch (error: ResponseErrorInterface) {
            alertService.error(error.response.data.message)
        }
    }

    return (
        <AppModal
            width="90vw"
            maxWidth={420}
            maxHeight="70vh"
            isOpen={isOpen}
            onClickClose={onClose}
            onBackdropClick={onBackdropClick}
            footer={
                <Footer>
                    <Button onClick={() => onSave(selected)}>Salvar</Button>
                </Footer>
            }
        >
            <Grid>
                {avatarList.map((item, index) => (
                    <Card
                        key={index}
                        onClick={() => setSelected(item)}
                        className={
                            item.imageUrl === selected.imageUrl
                                ? 'selected'
                                : ''
                        }
                    >
                        <Image src={item.imageUrl} />
                    </Card>
                ))}
            </Grid>
        </AppModal>
    )
}

export default AvatarModal
