class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let store = new Map();

        for(let i=0; i<nums.length; i++){
            store.set(nums[i], i);
        }

        for(let j=0; j<nums.length; j++){
            let mole = target - nums[j];
            if(store.has(mole) && store.get(mole) != j){
                return [j, store.get(mole)]
            }
        }
        return [0,1];
    }
}
