import ImgNormal from '@/assets/images/imc/normal.png'
import ImgOverweight from '@/assets/images/imc/overweight.png'
import ImgUnderweight from '@/assets/images/imc/underweight.png'

export const IMC_TYPES = {
    normal: 1,
    overweight: 2,
    underweight: 3
}

export const IMC_DESCRIPTION = {
    [IMC_TYPES.underweight]: 'A baixo do peso',
    [IMC_TYPES.normal]: 'Peso ideal',
    [IMC_TYPES.overweight]: 'Acima do peso'
}

export const IMC_IMAGES = {
    [IMC_TYPES.normal]: ImgNormal,
    [IMC_TYPES.overweight]: ImgOverweight,
    [IMC_TYPES.underweight]: ImgUnderweight
}

export const IMC_MOTIVATIONAL_TEXT = {
    [IMC_TYPES.normal]: 'Muito bem, continue assim e conte conosco!',
    [IMC_TYPES.overweight]: 'Calma, não é o fim! Vamos chegar lá juntos',
    [IMC_TYPES.underweight]:
        'Ah não, acreditamos que você consegue ir mais longe!'
}

export const IMC_ITEMS = Object.entries(IMC_DESCRIPTION).map(([id, label]) => ({
    id,
    label
}))
