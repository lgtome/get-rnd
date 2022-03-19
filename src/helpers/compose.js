export function compose(...fns) {
    fns.reduceRight((prevFn, currentFn) => {
        if (currentFn.length > 0) {
            currentFn(prevFn())
        }
        return currentFn
    })
}
