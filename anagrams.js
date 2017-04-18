
var util = require("./util");

var log = util.l;

log(`Alice is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

This challenge is also available in the following translations:

Chinese
Russian
Input Format

The first line contains a single string, . 
The second line contains a single string, .

Constraints

It is guaranteed that  and  consist of lowercase English alphabetic letters (i.e.,  through ).
Output Format

Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

Sample Input

cde
abc
Sample Output: 4\n`);

var a = "cde";
var b = "abc";

let aAry = a.split("");
let bAry = b.split("");
let deletions = 0;

for(let i=0; i < aAry.length; i++) {
    let ind = bAry.findIndex((w) => w === aAry[i]);
    
    if(ind >= 0) {
        bAry.splice(ind, 1);
    }
    else 
        deletions++;
}

console.log(deletions + bAry.length);