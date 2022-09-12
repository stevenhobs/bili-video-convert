import { createInterface } from 'readline'

function input(tip = '') {
    const instance = createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise((resolve) => {
        instance.question(tip, resolve)
        instance.close()
    })
}

export { input }
