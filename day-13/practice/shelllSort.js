// function shellSort( arr ) {
//     console.log(arr)
//     let n = arr.length;
//     // n == 100 |  n / 2 == 50 | n / 2 == 25 | n / 2 == 12 | n  / 2 == 6 | n / 2 == 3 | n / 2 == 1 
//     for(var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
//         // console.log(gap)

//         for(var i = gap; i < n;i++) {
//             // console.log('I LOOP ', i)
//             var temp = arr[i];
//             //i = 50 | i = 51 | i = 52 | ... | i = 100
//             for(var j = i; j >= gap && arr[j - gap] > temp;j -= gap) {
//                 console.log(j)
//                 arr[j] = arr[j - gap];
//             }
//             console.log(' out side ', j , temp ,arr[j])

//             arr[j] = temp
//         }
//     }
//     console.log(arr)
// }

// var arr = [3 , 2 , 1];
// // for(var i = 1; i <= 3; i++) {
// //     arr.push(i)
// // }
// // console.log(arr.length)
// shellSort(arr)









function shellSort(arr) {
    const n = arr.length;

    for(let gap = Math.floor( n / 2); gap > 0; gap = Math.floor(gap / 2)) {

        for(let i = gap; i < n;i++) {

            let temp = arr[i];
            for(var j = i; j>= gap && arr[j - gap] > temp; j-= gap) {
                arr[j] = arr[j - gap]
            }

            arr[j] = temp
        }
    }
}
var arr = [2,4,3,5,1];
shellSort(arr)
console.log(arr)