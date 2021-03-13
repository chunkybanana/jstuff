var jstuff = jstuff || {};
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
if(typeof module !== 'undefined' && module.exports){
    module.exports = jstuff;
}