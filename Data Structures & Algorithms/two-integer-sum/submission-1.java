class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] ans = new int[2];

        for(int i=0; i<nums.length; i++){
            for(int j=0; j<nums.length; j++){ 
                if(i==j) continue;
                if(nums[i]+nums[j] == target){
                    System.out.print(i+"-"+j);
                    int small;
                    int large;

                    if(i > j){
                        small = j;
                        large = i;
                    }else{
                        small = i;
                        large = j;
                    }
                    ans[0] = small;
                    ans[1] = large;
                    return ans;
                }
            }
        }
        return ans;
    }
}
