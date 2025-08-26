import {Heap} from 'heap-js';

class FrequencyObject {
    public num: number;
    public frequency: number;

    constructor(num: number, frequency: number) {
        this.num = num;
        this.frequency = frequency;
    }
};

const frequencyComparator = (a: FrequencyObject, b: FrequencyObject) => a.frequency - b.frequency;

// get top k frequent elements in the list, where the list contains sorted elements with 
export const getTopKFrequentElements = (numbers: number[], kfactor: number) : number[] => {

    const frequencyMap : Map<number, number> = getNumberFrequencyMap(numbers);

    const minHeap = new Heap(frequencyComparator);

    // iterate through map entries and push them as json object on to the heap
    // define a compartor for Heap to compare FrequencyObjects
    for( const [num, frequency ] of frequencyMap.entries()) {

        minHeap.push(new FrequencyObject(num, frequency));

        if(minHeap.size() > kfactor) {
            minHeap.pop();
        }
    }

    // heap contains only k elements
    // pop in iteration and return as a list of numbers
    const kFrequentNumbers : number[] = [];

    while(!minHeap.isEmpty()) {
        kFrequentNumbers.push(minHeap.pop()?.num as number);
    }

    return kFrequentNumbers;
}

export const getTopKFrequentElementsByMap = (data: number[], kfactor: number) : number[] => {

        const frequencyMap : Map<number, number> = getNumberFrequencyMap(numbers);

        const entries = Array.from(frequencyMap.entries());

        const sorted_entries = entries.sort((a,b) => b[1] - a[1]);

        return sorted_entries.slice(0, kfactor).map(entry => entry[0]);
}

export const getNumberFrequencyMap = (numbers: number[]) : Map<number, number> => {

    const frequencyMap = new Map<number, number>();

    for(const item of numbers) {
        frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
    }

    return frequencyMap;
}

const numbers = [1,1,2,100,23,23,45,56,56,989,1,2,100, 100];
const kfactor = 3;
let mostFrequentELements = getTopKFrequentElements(numbers, kfactor);
console.log(`mostFrequentELements found are: ${mostFrequentELements} `);
console.assert(JSON.stringify(mostFrequentELements) == JSON.stringify([56,100,1]), "Failed to extract topK Frequent elements");
mostFrequentELements = getTopKFrequentElementsByMap(numbers, kfactor);
console.log(`mostFrequentELements found are: ${mostFrequentELements} `);
console.assert(JSON.stringify(mostFrequentELements) == JSON.stringify([56,100,1]), "Failed to extract topK Frequent elements");