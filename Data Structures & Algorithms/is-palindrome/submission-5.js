class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length -1;

        while(left < right){
            if(!this.isAlphaNum(s[left])) left++;
            if(!this.isAlphaNum(s[right])) right--;
            if(this.isAlphaNum(s[left]) && this.isAlphaNum(s[right])){
                console.log(s[left], "----", s[right]);
                if(s[left].toLowerCase() != s[right].toLowerCase()) return false;
                left++;
                right--;
            }
        }
        return true;
    }


    /**
     * @param {char} char
     * @return { boolean }
     */
    isAlphaNum(char){
        return(
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')
        );
    }
}
