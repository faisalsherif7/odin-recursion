function mergeSort(arr) {
    if (arr.length === 1) return arr
    if (arr.length === 2) {
        const first = arr[0]
        const second = arr[1]
        if (first < second) {
            return [ first, second ]
        } 
        else {
            return [ second, first ]
        }
    }
    if (arr.length > 2) {
        const length = arr.length
        const middleIndex = Math.ceil(length / 2);

        const firstHalf = arr.splice(0, middleIndex);   
        const secondHalf = arr.splice(-middleIndex);

        const sortedFirstHalf = mergeSort(firstHalf)
        const sortedSecondHalf = mergeSort(secondHalf)

        let newArr = []

        while (sortedFirstHalf.length > 0 || sortedSecondHalf.length > 0) {
            if (sortedFirstHalf.length === 0) {
                for (i = sortedSecondHalf.length; i > 0; i--) {
                    newArr.push(sortedSecondHalf[0])
                    sortedSecondHalf.shift()
                }
                break
            } else if (sortedSecondHalf.length === 0) {
                for (i = sortedFirstHalf.length; i > 0; i--) {
                    newArr.push(sortedFirstHalf[0])
                    sortedFirstHalf.shift()
                }
                break
            }
            if (sortedFirstHalf[0] < sortedSecondHalf[0]) {
                newArr.push(sortedFirstHalf[0])
                sortedFirstHalf.shift()
            } else if (sortedSecondHalf[0] < sortedFirstHalf[0]) {
                newArr.push(sortedSecondHalf[0])
                sortedSecondHalf.shift()
            } else if (sortedFirstHalf[0] == sortedSecondHalf[0]) {
                newArr.push(sortedSecondHalf[0])
                sortedSecondHalf.shift()
            }
        }
        return newArr
    }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([105, 79, 100, 110]))