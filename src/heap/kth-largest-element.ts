import {Heap} from 'heap-js';

export const getKthLargestNumber = (data: number[], k : number) : number | undefined => {

    // instantiate a MinHeap
    const minheap : Heap<number> = new Heap<number>(Heap.minComparator);

    // loop thru the data elements and when it reaches k size, pop the top element (least ekement)
    for(const item of data) {
        minheap.push(item);
        if(minheap.size() > k) {
            minheap.pop();
        }
    }

    return minheap.pop();

}

export const main = () => {
    const data = [1,2,33,98,76,54,123];
    const kthLargestNumber = getKthLargestNumber(data, 4);
    console.assert(kthLargestNumber == 54, "Failed to extract kthLargestNumber");
}

main();