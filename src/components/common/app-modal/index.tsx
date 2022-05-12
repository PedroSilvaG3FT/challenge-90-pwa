import { MdClose } from 'react-icons/md'
import { fadeScale } from '@/styles/animation'
import React, { useEffect, useRef } from 'react'
import { AppModalInterface } from '@/interfaces/modal.interface'
import {
    Button,
    Backdrop,
    ModalBody,
    ModalHeader,
    ModalFooter,
    ModalContainer
} from './styles'

const AppModal: React.FC<AppModalInterface> = props => {
    const backdropEl = useRef(null)
    const {
        width,
        isOpen,
        height,
        header,
        footer,
        maxWidth,
        children,
        maxHeight,
        onClickClose,
        onBackdropClick,
        containerStyle
    } = props

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    }, [isOpen])

    const handleBackdropClick = (element: EventTarget) => {
        const isBackdrop = element === backdropEl.current
        if (!isBackdrop || !onBackdropClick) return

        onBackdropClick()
    }

    return (
        <>
            {isOpen && (
                <Backdrop
                    ref={backdropEl}
                    onClick={({ target }) => handleBackdropClick(target)}
                >
                    <ModalContainer
                        animate={fadeScale.animate}
                        initial={fadeScale.initial}
                        variants={fadeScale.variants}
                        style={{
                            maxWidth,
                            maxHeight,
                            ...containerStyle,
                            width: width || 490,
                            height: height || 'fit-content'
                        }}
                    >
                        {header && <ModalHeader>{header}</ModalHeader>}
                        <ModalBody>{children}</ModalBody>
                        {footer && <ModalFooter>{footer}</ModalFooter>}
                    </ModalContainer>

                    {onClickClose && (
                        <Button
                            animate={fadeScale.animate}
                            initial={fadeScale.initial}
                            variants={fadeScale.variants}
                            onClick={() => onClickClose()}
                        >
                            <MdClose />
                        </Button>
                    )}
                </Backdrop>
            )}
        </>
    )
}

export default AppModal
