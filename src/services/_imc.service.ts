import { IMC_TYPES } from '@/contants/imc'
import { IMCResultInterface } from '@/interfaces/imc.interface'

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
    getResult(weight: number, height: number): IMCResultInterface {
        const value = this.calc(weight, height)
        const type = this.getType(value)

        return { type, value }
    }
}
