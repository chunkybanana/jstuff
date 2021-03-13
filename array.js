var jstuff = jstuff || {};
/**
 * Riffle shuffle two or more arrays
 * @param  {...Array} args Arrays to be shuffled
 * @returns {Array} Shuffled array
 */
jstuff.riffle= function (...args) {
    var k = [...args];
    var t = [];
    for (var x = 0; x < Math.max.apply(null,k.map((l) => l.length));x++) {
        for (var m of k) {
            if (x < m.length) {
                t.push(m[x]);
            }
        }
    }
   return t;
};
/**
* Largest number in array
* @param {Array} array Array to find max of
* @returns {num} Max of array
*/
jstuff.max = function (array){
    return Math.max.apply(null,array)
}
/**
* Smallest number in array
* @param {Array} array Array to find min of
* @returns {num} Min of array
*/
jstuff.min = function(array){
    return Math.min.apply(null, array);
}
/**
* Average of array
* @param {Array} array Array to find mean of
* @returns {num} Mean of array
*/
jstuff.mean = function(array) {
    return jstuff.reduce((a, b) => a + b) / this.length;
}
/**
* Sorts numerical array
* @param {Array} array Array to sort
* @returns {Array} sorted array
*/
jstuff.order = function(array){
    return jstuff.sort((a, b) => a - b);
};
/**
* Median of numerical array
* @param {Array} array Array to find median of
* @returns {num} Median of array
*/
jstuff.median = function(){
    if(this.length % 2 === 0){
        return (this.order()[Math.floor(this.length / 2)]+ this.order()[Math.floor(this.length / 2) - 1]) / 2
    } else {
        return this.order()[Math.floor(this.length / 2)]
    }
}
/**
* Most common value (string/number) in array
* @param {Array} array Array to find mode of
* @returns {string|number} Most common value
*/
jstuff.mode = function (array) {
    var k = {};
    for (var x of array) {
        if (k[x]) {
            k[x]++;
        } else {
            k[x] = 1;
        }
    }
    var bm = -Infinity, c = "";
    for (var y in k) {
        if (k[y] > bm) {
            bm = k[y];
            c = y;
        }
    }
    return parseInt(c) === NaN ? c : parseInt(c);
}

/**
 * Remove duplicate values
 * @param {Array} array Input array
 * @returns {Array} Array with no duplicates
 */
jstuff.unique = function (array) {
    var k = {}, p = [];
    for (var x of array) {
        if (k[x]) {
            k[x]++;
        } else {
            k[x] = 1;
        }
    }
    for (var y in k) {
        p.push(y)
    }
    return p;
}
/**
 * Run length encodes an array into a string
 * @param {Array} array Array to encode (string only)
 * @returns {string} Run length encoded string
 */
jstuff.rlencode = function(array){
	var res = '', ci = array[0], cnm = 0;
	for(var x of array){
    	if(x != ci){
            res += ci + cnm;    
        	ci = x;
            cnm = 1; 
        } else {
        	cnm++;
        }
    }
    res += ci + cnm;    
    return res;
}
/**
 * Finds the range of an array
 * @param {Array} array 
 * @returns {number} 
 */
jstuff.range = function(array){
    return Math.max.apply(null,array) - Math.min.apply(null,array);
}
if(typeof module !== 'undefined' && module.exports){
    module.exports = jstuff;
}