/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
        let val = []
    let result = [] 
    // console.log(len)
    for(let i = 0; i < arr.length; i++){
        val.push(arr[i])
        if(val.length === size){
            result.push(val)
            val = []
        }


    }
            if(val.length > 0){
            result.push(val)
            val = []
        }
    return result
};
