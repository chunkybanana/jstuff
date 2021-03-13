var jstuff = jstuff || {};
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