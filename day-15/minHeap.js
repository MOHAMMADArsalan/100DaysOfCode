function swap(arr, iIndex, jIndex) {
    let temp = arr[iIndex];
    arr[iIndex] = arr[jIndex];
    arr[jIndex] = temp
}

class minHeap {
    constructor() {
        this.heap = [];
    }
    left(i) {
        return 2 * i + 1
    }

    right(i) {
        return 2 * i + 2
    }

    parent(i) {
        return Math.floor(i / 2);
    }

    getMin() {
        return this.heap[0];
    }

    insert(node) {
        // insert new node at last
        this.heap.push(node);

        // find a right path for new node
        if (this.heap.length > 1) {

            let current = this.heap.length - 1;
            while (current != 0 && this.heap[this.parent(current)] > this.heap[current]) {
                let parentNode = this.parent(current);
                swap(this.heap, current, parentNode);
                current = parentNode;
            }

        }

    }

    remove() {
        if(this.heap.length <= 1){
            return this.heap.shift();
        }

        let root = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heapify(0)
        this.heap.pop();
        return root;
    }

    heapify(i) {
        const l = this.left(i);
        const r = this.right(i)
        let smallest = i;
        // check l index and also if left node is less than to root node.
        if (l < this.heap.length && this.heap[l] < this.heap[i]) {
            smallest = l
        }

        if(r < this.heap.length && this.heap[r] < this.heap[smallest]) {
            smallest = r;
        }

        if(smallest != i) {
            swap(this.heap, smallest, i);
            this.heapify(smallest)
        }
    }
}

const heap = new minHeap()
heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(15);
console.log(heap.remove())

console.log(heap.heap)