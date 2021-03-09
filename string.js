/**
 * Reverses a string
 * @param {string} str String to reverse
 * @returns {string} Reversed string
 */
exports.reverse = function(str){
    return str.split``.reverse.join``;
};
/**
 * Split a string into chunks
 * @param {string} str String to split
 * @param {number} num Length of each chunk
 * @returns {Array} Array of chunks
 */
exports.chunk = function(str,num){
    var h = [];
    for(var a = 0; a < str.length; a += num){
        h.push(str.slice(a,a + num))
    }
    return h;
}