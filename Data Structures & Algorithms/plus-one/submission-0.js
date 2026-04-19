class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let num = 0;
        for(let i=0; i<digits.length; i++){
            num = num*10 + digits[i];
        }
        
        num += 1;
        let res = [];
        while(num >= 1){
            let digit = Math.floor(num%10);
            res.push(digit);
            num = num/10;
        }

        let left = 0;
        let right = res.length-1;
        while(left < right){
            let temp = res[left];
            res[left] =res[right];
            res[right]=temp;
            left++;
            right--;
        }
        return res;
    }
}
