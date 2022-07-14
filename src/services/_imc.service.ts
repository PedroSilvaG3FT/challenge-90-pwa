import { IMC_TYPES } from '@/contants/imc'

export class IMCService {
    private calc(weight: number, height: number) {
        height = height / 100
        return weight / (height * height)
    }
    private getType(imc: number) {
        if (imc < 18.49) return IMC_TYPES.underweight
        else if (imc >= 18.5 && imc <= 24.99) return IMC_TYPES.normal
        else return IMC_TYPES.overweight
    }
    convertToCm(value: number | string) {
        const initial = typeof value === 'number' ? String(value) : value
        return initial.replace('.', '')
    }
    getResult(weight: number, height: number) {
        const imc = this.calc(weight, height)
        const imcType = this.getType(imc)

        console.log('IMC :', imc)
        return imcType
    }
}
