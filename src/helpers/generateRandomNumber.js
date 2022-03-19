export function generateRandomNumber(min = 0, max = 10) {
    return Math.trunc(Math.random() * (max - min) + min)
}
