export const IMC_TYPES = {
    veryUnderweight: 1,
    underweight: 2,
    normal: 3,
    overweight: 4,
    obesityOne: 5,
    obesityTwo: 6
}

export const IMC_DESCRIPTION = {
    [IMC_TYPES.veryUnderweight]: 'Muito a baixo do peso',
    [IMC_TYPES.underweight]: 'A baixo do peso',
    [IMC_TYPES.normal]: 'Peso ideal',
    [IMC_TYPES.overweight]: 'Acima do peso',
    [IMC_TYPES.obesityOne]: 'Obesidade I',
    [IMC_TYPES.obesityTwo]: 'Obesidade II'
}

export const IMC_ITEMS = Object.entries(IMC_DESCRIPTION).map(([id, label]) => ({
    id,
    label
}))
