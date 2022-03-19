export function complexity(iterateCount, numbersCount = 10, maxPercent = 0.2) {
    const floatNumbersCount = numbersCount * 0.01
    const coefficient = 0.2
    const value = iterateCount * (floatNumbersCount * coefficient)
    return {
        complexityValue: Math.trunc(value),
        getCoefficient: coefficient,
        percent: maxPercent,
    }
}
