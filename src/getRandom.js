import { complexity, generateRandomNumber } from './helpers'

export function getRnd(count = 10000, difficult = 3) {
    const numbers = {}
    const { getCoefficient, complexityValue, percent } = complexity(count)
    for (let i = 0; i <= count; i++) {
        const number = generateRandomNumber()
        if (numbers[number] >= 0) {
            const value = parseInt(numbers[number]) + 1
            let isValueDominate = value * percent >= complexityValue
            if (isValueDominate && numbers[number]) {
                let newNumber = generateRandomNumber()
                for (let j = 0; j < difficult; j++) {
                    const generatedValue = generateRandomNumber()
                    const compareValue = parseInt(numbers[generatedValue]) + 1
                    isValueDominate = compareValue * percent >= complexityValue
                    if (!isValueDominate) {
                        newNumber = generatedValue
                        break
                    }
                }
                numbers[newNumber] = parseInt(numbers[newNumber]) + 1
            } else numbers[number] = value
        } else numbers[number] = 1
    }
    console.log('works rnd')
    return numbers
}
export function getRndDefault(count = 10000) {
    const numbers = {}
    for (let i = 0; i <= count; i++) {
        const number = generateRandomNumber()
        if (numbers[number] >= 0) {
            const value = parseInt(numbers[number]) + 1
            numbers[number] = value
        } else numbers[number] = 1
    }
    console.log('works default rnd')
    return numbers
}
