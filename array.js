/**
 * Riffle shuffle two or more arrays
 * @param  {...Array} args Arrays to be shuffled
 * @returns {Array} Shuffled array
 */
exports.riffle= function (...args) {
    var k = [...args];
    console.log(Math.max.call([1, 2]));
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
exports.max = function (array){
    return Math.max.apply(null,array)
}
/**
* Smallest number in array
* @param {Array} array Array to find min of
* @returns {num} Min of array
*/
exports.min = function(array){
    return Math.min.apply(null, array);
}
/**
* Average of array
* @param {Array} array Array to find mean of
* @returns {num} Mean of array
*/
exports.mean = function(array) {
    return exports.reduce((a, b) => a + b) / this.length;
}
/**
* Sorts numerical array
* @param {Array} array Array to sort
* @returns {Array} sorted array
*/
exports.order = function(array){
    return exports.sort((a, b) => a - b);
};
/**
* Median of numerical array
* @param {Array} array Array to find median of
* @returns {num} Median of array
*/
exports.median = function(){
    if(this.length % 2 === 0){
        return (this.order()[Math.floor(this.length / 2)]+ this.order()[Math.floor(this.length / 2) - 1]) / 2
    } else {
        return this.order()[Math.floor(this.length / 2)]
    }
}
/**
* Most common value (string/number) in array
* @param {Array} array Array to find mode of
* @returns {string|number}
*/
Array.prototype.mode = function () {
    var k = {};
    for (var x of this) {
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
};