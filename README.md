# Jstuff
Javascript's builtins are missing a lot, so I made this. 
# API

## String functions

<dl>
<dt><a href="#reverse">reverse(str)</a> ⇒ <code>string</code></dt>
<dd><p>Reverses a string</p>
</dd>
<dt><a href="#chunk">chunk(str, num)</a> ⇒ <code>Array</code></dt>
<dd><p>Split a string into chunks</p>
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



