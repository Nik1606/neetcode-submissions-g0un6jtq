class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();

        for(let i =0; i<nums.length; i++){
            freqMap.set(nums[i], (freqMap.get(nums[i]) || 0) + 1);
        }

        let freqStore = new Array(nums.length).fill(0).map(() => []);

        for(let [key, value] of freqMap){
            freqStore[value-1].push(key);
        }

        let res = [];
        for (let i = freqStore.length - 1; i >= 0 && k > 0; i--) {
            for (let num of freqStore[i]) {
                res.push(num);
                k--;
                if (k === 0) break;
            }
        }
        //console.log("freqStore", freqStore);
        return res;
    }
}
