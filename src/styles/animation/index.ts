export const fadeScale = {
    animate: 'show',
    initial: 'hidden',
    variants: {
        hidden: {
            scale: 0.5,
            opacity: 0
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: { delayChildren: 1.2 }
        }
    }
}
