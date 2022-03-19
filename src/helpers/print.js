export function printStructure(obj) {
    Object.keys(obj).forEach((key) => {
        console.log(`Key: ${key} -> ${obj[key]}`)
    })
    console.log('\n')
}
