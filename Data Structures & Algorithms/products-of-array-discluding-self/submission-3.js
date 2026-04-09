class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixSum = 1;
        let suffixSum = 1;
        const prefixSumStore = new Array(nums.length).fill(0);
        const suffixSumStore = new Array(nums.length).fill(0);
        const result = new Array(nums.length).fill(0);
 
        for(let i=0; i<nums.length; i++){
            prefixSumStore[i] = prefixSum;
            prefixSum = prefixSum * nums[i];
        }

        for(let j=nums.length-1; j>=0; j--){
            suffixSumStore[j] = suffixSum;
            suffixSum = suffixSum * nums[j];
        }

        for(let k=0; k<nums.length; k++){
            result[k] = prefixSumStore[k] * suffixSumStore[k];
        }

        return result;
    }
}
