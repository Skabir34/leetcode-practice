/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = strs[0];

    for(let i = 1; i < strs.length; i++){
        while(!strs[i].startsWith(result)){
            result = result.slice(0,-1);
            if(result === " ") return "";

        }
    }

    return result;
};