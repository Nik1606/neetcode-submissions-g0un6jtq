class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let AsciiStore = [];
        let asciiSumStore = [];

        for(let i=0; i<strs.length; i++){
            let temp = new Array(128).fill(0);
            let summation = 0;
            for(let j=0; j<strs[i].length; j++){
                const asciiVal = strs[i].charCodeAt(j);
                temp[asciiVal] = temp[asciiVal] + 1;
                summation+=asciiVal;
            }
            AsciiStore.push(temp);
            asciiSumStore.push(summation);
        }

        let result = [];
        for(let k=0; k<strs.length; k++){
            let addToGroup = [];
            for(let l=k+1; l<strs.length; l++){
                if(strs[l]=="_" || strs[k] =="_") continue;

                if(asciiSumStore[k] != asciiSumStore[l]){
                    continue;
                }

                let isSame = true;
                for(let m=0; m<128; m++){
                    if(AsciiStore[k][m] != AsciiStore[l][m]){
                        isSame = false;
                        break;
                    }
                }
                if(!isSame) continue;
                
                if(strs[l]!="_" ) addToGroup.push(strs[l]);
                strs[l]="_";
            }
            if(strs[k]!="_") addToGroup.push(strs[k]);
            if(addToGroup.length > 0) result.push(addToGroup);
        }
        return result;
    }
}
