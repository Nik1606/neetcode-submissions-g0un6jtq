class Solution {
    public int[] productExceptSelf(int[] nums) {
        boolean containsZero=false;
        int zeroCounter=0;

        int product = 1;
        int[] res=new int[nums.length];
        
        for(int i=0; i<nums.length; i++){
            if(nums[i]!=0){
                product = product*nums[i];
            }else{
                containsZero = true;
                zeroCounter++;
            }
        }

        for(int i=0; i<nums.length; i++){
            if(nums[i]==0 && zeroCounter<=1) res[i]=product;
            else if(!containsZero){
                res[i]= product/nums[i];
            }else{
                res[i]=0;
            }
        }
        return res;
    }
}  
