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
/**
 * Reverses a string
 * @param {string} str String to reverse
 * @returns {string} Reversed string
 */
jstuff.reverse = function(str){
    return str.split``.reverse.join``;
};
/**
 * Split a string into chunks
 * @param {string} str String to split
 * @param {number} num Length of each chunk
 * @returns {Array} Array of chunks
 */
jstuff.chunk = function(str,num){
    var h = [];
    for(var a = 0; a < str.length; a += num){
        h.push(str.slice(a,a + num))
    }
    return h;
}
/**
 * Rotate a string's alphabet characters. 
 * @param {string} str String to rotate
 * @param {number} num Num to rotate by, default is 13
 * @returns String with alphabet characters rotated by given number
 */
jstuff.rot = function(str,num=13){
    var out = '';
    for(var chr of str){
        if(chr.charCodeAt() > 64 && chr.charCodeAt() < 91){
            out += String.fromCharCode(((chr.charCodeAt() - 64 + num) % 26) + 64)
        } else if(chr.charCodeAt() > 96 && chr.charCodeAt() < 123){
            out += String.fromCharCode(((chr.charCodeAt() - 96 + num) % 26) + 96)
        } else {
            out += chr;
        }
    }
    return out;
}
/**
 * Run length decodes a string
 * @param {string} str String to decode
 * @returns {Array} Array of values
 */
jstuff.rldecode = function(str){
	var alpha = 'abcdefghijklmnopqrstuvwxyz', cn = '', cnm, c = 'str', res = [];
	for(var q = 0; q < str.length; q++){
    	if(alpha.includes(str.charAt(q))){
        	if(c == 'str'){
            	cn += str.charAt(q); 
            } else {
            	c = 'str';
                for(var x = 0; x < cnm; x++){
                	res.push(cn);
                }
                cn = str.charAt(q);
                cnm = 0;
            }
        } else {
        	if(c == 'num'){
            	cnm = (cnm * 10) + parseInt(str.charAt(q)); 
            } else {
            	c = 'num';
                cnm = str.charAt(q);
            }
        }
    }
    for(var x = 0; x < cnm; x++){
        res.push(cn);
    }
    return res;
}
/**
 * Convert a string from one case to another. Options: camelCase, PascalCase, kebab-case, SCREAMING-KEBAB-CASE, snake_case, SCREAMING_SNAKE_CASE
 * @param {string} string String to change case
 * @param {string} to Case to change. options: 'camel', 'pascal', 'kebab', 'screamkebab', 'snake', 'screamsnake'
 * @returns String changed to different case
 */
jstuff.changeCase =  function (string, to) {
    var d = string.replace(/(_|-)/,' ').replace(/([a-z])([A-Z])/,'$1 $2').toLowerCase();
    switch(to){
      case 'camel':
        d = d.replace(/([a-z]) ([a-z])/,(x,y,z)=>y+z.toUpperCase());
        break;
      case 'pascal':
        d = d.slice(0,1).toUpperCase() + d.slice(1).replace(/([a-z]) ([a-z])/,(x,y,z)=>y+z.toUpperCase());
        break;
      case 'snake':
        d = d.replace(/ /g,'_');
        break; 
      case 'screamsnake':
        d = d.replace(/ /g,'_').toUpperCase();
        break; 
      case 'kebab':
        d = d.replace(/ /g,'-');
        break; 
      case 'screamkebab':
        d = d.replace(/ /g,'-').toUpperCase();
        break; 
      default:
        break;
    }
    return d;
}
/**
 * Take the logarithm, with a certain base, of a certain number
 * @param {number} num Number to take log of
 * @param {number} base Base of log
 * @returns {number} Logarithm of num, base `base`.
 */
jstuff.log = function(num,base){
    if(base <= 0 || base === 1){
        console.error('Jstuff/math/log: Base must be greater than 0 and not 1');
    } else if(num <= 0){
        console.error('Jstuff/math/log: Cannot take logarithm of negative number or 0');
    } else {
        return Math.log(num) / Math.log(base);
    }
}
/**
 * Parse a string into a bigint
 * @param {string} str String to parse
 * @param {number} radix Radix to parse by
 * @returns {BigInt} Resulting bigint
 */
jstuff.parseBigInt = function(str,radix){
    var acc = BigInt(0);
    for(var x = str.length - 1; x >= 0; x--){
        acc += BigInt(parseInt(str[x],radix)) * (BigInt(radix)**BigInt(str.length - 1 - x));
    }
    return acc;
}
/**
 * Takes the factorial of a number or bigint. Returns bigint if bigint is inputted, otherwise number
 * @param {number|BigInt} num Number to take factorial of
 * @returns {number|BigInt} Factorial of number
 */
jstuff.factorial = function(num){
    if(typeof num == 'bigint'){
        var acc = Bigint(1);
        for(var x = num; x > BigInt(0); x--){
            acc *= x;
        }
        return acc;
    } else {
        var acc = 1;
        for(var x = num; x > 0; x--){
            acc *= x;
        }
        return acc;
    }
}
/**
 * Generate a random number between two numbers.
 * @param {number} min Lower bound of number. Inclusive.
 * @param {number} max Upper bound of number. Exclusive. 
 * @param {number} step Difference between possible numbers.
 * @returns {number} Random number
 */
jstuff.random = function(min,max,step=1){
    return Math.floor(Math.random() * (max - min) / step) * step + min;
}
if(typeof module !== 'undefined' && module.exports){
    module.exports = jstuff;
}