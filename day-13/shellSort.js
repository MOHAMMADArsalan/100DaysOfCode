function shellSort(arr) {

    const n = arr.length;

    for(let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {

        for(let i = gap; i < n; i++) {
            let temp = arr[i];

            let j = i;
            for(j; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap]
            }

            arr[j] = temp;
        }
    }
    return arr;
}


var arr = [2,5,6,9,1,10,3,8,7,4];

shellSort(arr);
console.log(arr)