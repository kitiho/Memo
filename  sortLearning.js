const arr = [2, 3, 5, 1, 7, 4, 8];
// function bubbleSort(arr) {
//     for (let j = arr.length; j > 1; j--) {
//         for (let i = 0; i < j - 2; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//             }
//         }
//     }
//     return arr
// }
// console.log(bubbleSort(arr));

// function selectSort(arr) {
//     for (let j = 0; j < arr.length - 2; j++) {
//         const newArr = arr.slice(j)
//         min = findMinIndex(newArr) + j
//         let temp = arr[min]
//         arr[min] = arr[j]
//         arr[j] = temp
//     }
//     return arr;
// }
// function findMinIndex(arr) {
//     let min = arr[0]
//     let minIndex = 0
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] < min) {
//             min = arr[index]
//             minIndex = index
//         }
//     }
//     return minIndex
// }
// console.log(selectSort(arr));

// function insertSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let temp = arr[i]
//         let j = i
//         while (temp < arr[j - 1] && j > 0) {
//             arr[j] = arr[j - 1]
//             j--
//         }
//         arr[j] = temp
//     }
//     return arr;
// }
// console.log(insertSort(arr));

// function shellSort(arr = []) {
//     let gap = Math.floor(arr.length / 2)
//     while (gap >= 1) {
//         for (let i = gap; i < arr.length; i++) {
//             let temp = arr[i]
//             let j = i
//             while (j > gap - 1 && arr[j - gap] > temp ) {
//                 arr[j] = arr[j - gap]
//                 j -= gap
//             }
//             arr[j] = temp
//         }
//         gap = Math.floor(gap / 2)
//     }
//     console.log(arr);

// }
// shellSort(arr)


// function quick(left, right, arr) {
//     if (left >= right) return;
//     let pivot = findPivot(left, right, arr)
//     let i = left;
//     let j = right - 1;
//     while (true) {
//         while (arr[++i] < pivot) { }
//         while (arr[--j] > pivot) { }
//         if (i < j) {
//             let temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         } else {
//             break;
//         }
//     }
//     let temp = arr[right - 1]
//     arr[right - 1] = arr[i]
//     arr[i] = temp

//     quick(left, i - 1, arr)
//     quick(i + 1, right, arr)
// }
// function quickSort(arr) {
//     quick(0, arr.length - 1, arr)
//     return arr;
// }
// function findPivot(left, right, arr) {
//     let center = Math.floor((left + right) / 2)
//     if(arr[left] > arr[center]) [arr[left],arr[center]] = [arr[center],arr[left]]
//     if(arr[center] > arr[right]) [arr[center],arr[right]] = [arr[right],arr[center]]
//     if(arr[left] > arr[center]) [arr[left],arr[center]] = [arr[center],arr[left]]
//     let temp = arr[right - 1]
//     arr[right - 1] = arr[center]
//     arr[center] = temp
//     return arr[right - 1];
// }

// console.log(quickSort(arr));

function quick(arr, left, right) {
    if (left < right) {
        let pivotIndex = findPivotIndex(arr, left, right)
        quick(arr, left, pivotIndex - 1)
        quick(arr, pivotIndex + 1, right)
    }
    return arr;
}
function findPivotIndex(arr, left, right) {
    let pivot = arr[left]
    while (left < right) {
        while (arr[right] > pivot && left < right) { right-- }
        arr[left] = arr[right]
        while (arr[left] < pivot && left < right) { left++ }
        arr[right] = arr[left]
    }
    arr[left] = pivot
    return left
}

console.log(quick(arr, 0, 6));