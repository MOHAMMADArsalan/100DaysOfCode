const MinHeap = require('./minHeap');
const MaxHeap = require('./maxHeap');

function get_median(minHeap, maxHeap) {
    if(minHeap.heap.length > maxHeap.heap.length) {
        return minHeap.getMin();
    }

    if(minHeap.heap.length < maxHeap.heap.length) {
        return maxHeap.getMax();
    }

    return (minHeap.getMin() + maxHeap.getMax()) / 2
}

function re_balance(minHeap, maxHeap) {
    if(minHeap.heap.length > maxHeap.heap.length + 1) {
        let min = minHeap.remove();
        maxHeap.insert(min);
    } else if(maxHeap.heap.length > minHeap.heap.length + 1) {
        let max =  maxHeap.remove();
        minHeap.insert(max);
    }
}

function add(minHeap, maxHeap, value) {
    if(minHeap.heap.length + maxHeap.heap.length <= 1) {
        return maxHeap.insert(value)
    }

    const min = get_median(minHeap, maxHeap)

    if(value > min) {
        minHeap.insert(value)
    } else {
        maxHeap.insert(value)
    }
}

function find_median(array) {
    let minHeap = new MinHeap();
    let maxHeap = new MaxHeap();

    for(let i = 0; i < array.length;i++) {
        add(minHeap, maxHeap, array[i]);
        re_balance(minHeap, maxHeap);
        console.log(get_median(minHeap,maxHeap))
    }
}

find_median([2,1,5,7,2,0,5])