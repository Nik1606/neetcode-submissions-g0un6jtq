class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();
        for(let num of nums){
            if(set.has(num)) break;
            set.add(num);
        }

        return nums.length != set.size;
    }
}
