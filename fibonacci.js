function fibonacci(n) {
    if (n < 2) {
        return n
    }
    else {
        return fibonacci(n-1) + fibonacci(n - 2)
    }
}

function fibs(number) {
    let arr = []
    if (number === 1) arr = [0]
    else if (number === 2) arr = [0, 1]
    else {
        arr = [0, 1]
        for (i = 2; i < number; i++) {
            arr.push(arr[i - 1] + arr[i - 2])
        }
    }
    return arr
}

function fibsRec(number) {
    let arr = []
    if (number < 0) return arr
    if (number === 1) arr = [0]
    else if (number === 2) arr = [0, 1]
    else {
        arr = fibsRec(number - 1)
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    }
    return arr
}

//console.log(fibs(4))
//console.log(fibsRec(9))
//console.log(fibonacci(8))