# Jstuff
Javascript is missing a lot, so I made this. 

## Use in Node.js
```npm install jstuff```

Then, require the whole package:

```javascript
    const jstuff = require('jstuff')
```

Or pick specific sections:

```javascript
    const jstuff = require('jstuff/math')
```

Or even just use specific methods:

```javascript
    const { log } = require('jstuff/math')
```

## Use in javascript
Source the main script:

```html
<script src='unpkg.com/jstuff/jstuff.js'></script>
```

Or pick specific sections:

```html
<script src='unpkg.com/jstuff/math.js'></script>
```

Docs generated with jsdoc2md. 

# API
## Array functions

<dl>
<dt><a href="#riffle">riffle(...args)</a> ⇒ <code>Array</code></dt>
<dd><p>Riffle shuffle two or more arrays</p>
</dd>
<dt><a href="#max">max(array)</a> ⇒ <code>num</code></dt>
<dd><p>Largest number in array</p>
</dd>
<dt><a href="#min">min(array)</a> ⇒ <code>num</code></dt>
<dd><p>Smallest number in array</p>
</dd>
<dt><a href="#mean">mean(array)</a> ⇒ <code>num</code></dt>
<dd><p>Average of array</p>
</dd>
<dt><a href="#order">order(array)</a> ⇒ <code>Array</code></dt>
<dd><p>Sorts numerical array</p>
</dd>
<dt><a href="#median">median(array)</a> ⇒ <code>num</code></dt>
<dd><p>Median of numerical array</p>
</dd>
<dt><a href="#mode">mode(array)</a> ⇒ <code>string</code> | <code>number</code></dt>
<dd><p>Most common value (string/number) in array</p>
</dd>
<dt><a href="#unique">unique(array)</a> ⇒ <code>Array</code></dt>
<dd><p>Remove duplicate values</p>
</dd>
<dt><a href="#rlencode">rlencode(array)</a> ⇒ <code>string</code></dt>
<dd><p>Run length encodes an array into a string</p>
</dd>
<dt><a href="#range">range(array)</a> ⇒ <code>number</code></dt>
<dd><p>Finds the range of an array</p>
</dd>
</dl>

<a name="riffle"></a>

## riffle(...args) ⇒ <code>Array</code>
Riffle shuffle two or more arrays

**Kind**: global function  
**Returns**: <code>Array</code> - Shuffled array  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>Array</code> | Arrays to be shuffled |

<a name="max"></a>

## max(array) ⇒ <code>num</code>
Largest number in array

**Kind**: global function  
**Returns**: <code>num</code> - Max of array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array to find max of |

<a name="min"></a>

## min(array) ⇒ <code>num</code>
Smallest number in array

**Kind**: global function  
**Returns**: <code>num</code> - Min of array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array to find min of |

<a name="mean"></a>

## mean(array) ⇒ <code>num</code>
Average of array

**Kind**: global function  
**Returns**: <code>num</code> - Mean of array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array to find mean of |

<a name="order"></a>

## order(array) ⇒ <code>Array</code>
Sorts numerical array

**Kind**: global function  
**Returns**: <code>Array</code> - sorted array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array to sort |

<a name="median"></a>

## median(array) ⇒ <code>num</code>
Median of numerical array

**Kind**: global function  
**Returns**: <code>num</code> - Median of array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array to find median of |

<a name="mode"></a>

## mode(array) ⇒ <code>string</code> \| <code>number</code>
Most common value (string/number) in array

**Kind**: global function  
**Returns**: <code>string</code> \| <code>number</code> - Most common value  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array to find mode of |

<a name="unique"></a>

## unique(array) ⇒ <code>Array</code>
Remove duplicate values

**Kind**: global function  
**Returns**: <code>Array</code> - Array with no duplicates  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Input array |

<a name="rlencode"></a>

## rlencode(array) ⇒ <code>string</code>
Run length encodes an array into a string

**Kind**: global function  
**Returns**: <code>string</code> - Run length encoded string  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | Array to encode (string only) |

<a name="range"></a>

## range(array) ⇒ <code>number</code>
Finds the range of an array

**Kind**: global function  

| Param | Type |
| --- | --- |
| array | <code>Array</code> | 

## String functions

<dl>
<dt><a href="#log">log(num, base)</a> ⇒ <code>number</code></dt>
<dd><p>Take the logarithm, with a certain base, of a certain number</p>
</dd>
<dt><a href="#parseBigInt">parseBigInt(str, radix)</a> ⇒ <code>BigInt</code></dt>
<dd><p>Parse a string into a bigint</p>
</dd>
<dt><a href="#factorial">factorial(num)</a> ⇒ <code>number</code> | <code>BigInt</code></dt>
<dd><p>Takes the factorial of a number or bigint. Returns bigint if bigint is inputted, otherwise number</p>
</dd>
<dt><a href="#random">random(min, max, step)</a> ⇒ <code>number</code></dt>
<dd><p>Generate a random number between two numbers.</p>
</dd>
</dl>

<a name="log"></a>

## log(num, base) ⇒ <code>number</code>
Take the logarithm, with a certain base, of a certain number

**Kind**: global function  
**Returns**: <code>number</code> - Logarithm of num, base `base`.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | Number to take log of |
| base | <code>number</code> | Base of log |

<a name="parseBigInt"></a>

## parseBigInt(str, radix) ⇒ <code>BigInt</code>
Parse a string into a bigint

**Kind**: global function  
**Returns**: <code>BigInt</code> - Resulting bigint  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String to parse |
| radix | <code>number</code> | Radix to parse by |

<a name="factorial"></a>

## factorial(num) ⇒ <code>number</code> \| <code>BigInt</code>
Takes the factorial of a number or bigint. Returns bigint if bigint is inputted, otherwise number

**Kind**: global function  
**Returns**: <code>number</code> \| <code>BigInt</code> - Factorial of number  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> \| <code>BigInt</code> | Number to take factorial of |

<a name="random"></a>

## random(min, max, step) ⇒ <code>number</code>
Generate a random number between two numbers.

**Kind**: global function  
**Returns**: <code>number</code> - Random number  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Lower bound of number. Inclusive. |
| max | <code>number</code> | Upper bound of number. Exclusive. |
| step | <code>number</code> | Difference between possible numbers. |

## Functions

<dl>
<dt><a href="#log">log(num, base)</a> ⇒ <code>number</code></dt>
<dd><p>Take the logarithm, with a certain base, of a certain number</p>
</dd>
<dt><a href="#parseBigInt">parseBigInt(str, radix)</a> ⇒ <code>BigInt</code></dt>
<dd><p>Parse a string into a bigint</p>
</dd>
<dt><a href="#factorial">factorial(num)</a> ⇒ <code>number</code> | <code>BigInt</code></dt>
<dd><p>Takes the factorial of a number or bigint. Returns bigint if bigint is inputted, otherwise number</p>
</dd>
<dt><a href="#random">random(min, max, step)</a> ⇒ <code>number</code></dt>
<dd><p>Generate a random number between two numbers.</p>
</dd>
</dl>

<a name="log"></a>

## log(num, base) ⇒ <code>number</code>
Take the logarithm, with a certain base, of a certain number

**Kind**: global function  
**Returns**: <code>number</code> - Logarithm of num, base `base`.  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | Number to take log of |
| base | <code>number</code> | Base of log |

<a name="parseBigInt"></a>

## parseBigInt(str, radix) ⇒ <code>BigInt</code>
Parse a string into a bigint

**Kind**: global function  
**Returns**: <code>BigInt</code> - Resulting bigint  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String to parse |
| radix | <code>number</code> | Radix to parse by |

<a name="factorial"></a>

## factorial(num) ⇒ <code>number</code> \| <code>BigInt</code>
Takes the factorial of a number or bigint. Returns bigint if bigint is inputted, otherwise number

**Kind**: global function  
**Returns**: <code>number</code> \| <code>BigInt</code> - Factorial of number  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> \| <code>BigInt</code> | Number to take factorial of |

<a name="random"></a>

## random(min, max, step) ⇒ <code>number</code>
Generate a random number between two numbers.

**Kind**: global function  
**Returns**: <code>number</code> - Random number  

| Param | Type | Description |
| --- | --- | --- |
| min | <code>number</code> | Lower bound of number. Inclusive. |
| max | <code>number</code> | Upper bound of number. Exclusive. |
| step | <code>number</code> | Difference between possible numbers. |

bkeith@Bs-MacBook-Air useful % jsdoc2md string.js
## String functions

<dl>
<dt><a href="#reverse">reverse(str)</a> ⇒ <code>string</code></dt>
<dd><p>Reverses a string</p>
</dd>
<dt><a href="#chunk">chunk(str, num)</a> ⇒ <code>Array</code></dt>
<dd><p>Split a string into chunks</p>
</dd>
<dt><a href="#rot">rot(str, num)</a> ⇒</dt>
<dd><p>Rotate a string&#39;s alphabet characters.</p>
</dd>
<dt><a href="#rldecode">rldecode(str)</a> ⇒ <code>Array</code></dt>
<dd><p>Run length decodes a string</p>
</dd>
<dt><a href="#changeCase">changeCase(string, to)</a> ⇒</dt>
<dd><p>Convert a string from one case to another. Options: camelCase, PascalCase, kebab-case, SCREAMING-KEBAB-CASE, snake_case, SCREAMING_SNAKE_CASE</p>
</dd>
</dl>

<a name="reverse"></a>

## reverse(str) ⇒ <code>string</code>
Reverses a string

**Kind**: global function  
**Returns**: <code>string</code> - Reversed string  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String to reverse |

<a name="chunk"></a>

## chunk(str, num) ⇒ <code>Array</code>
Split a string into chunks

**Kind**: global function  
**Returns**: <code>Array</code> - Array of chunks  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String to split |
| num | <code>number</code> | Length of each chunk |

<a name="rot"></a>

## rot(str, num) ⇒
Rotate a string's alphabet characters.

**Kind**: global function  
**Returns**: String with alphabet characters rotated by given number  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String to rotate |
| num | <code>number</code> | Num to rotate by, default is 13 |

<a name="rldecode"></a>

## rldecode(str) ⇒ <code>Array</code>
Run length decodes a string

**Kind**: global function  
**Returns**: <code>Array</code> - Array of values  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String to decode |

<a name="changeCase"></a>

## changeCase(string, to) ⇒
Convert a string from one case to another. Options: camelCase, PascalCase, kebab-case, SCREAMING-KEBAB-CASE, snake_case, SCREAMING_SNAKE_CASE

**Kind**: global function  
**Returns**: String changed to different case  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | String to change case |
| to | <code>string</code> | Case to change. options: 'camel', 'pascal', 'kebab', 'screamkebab', 'snake', 'screamsnake' |