var util = require("./util");
var log = util.l;

var m = 6
var n = 4
let magazine = "give me one grand today night".split(' ');
let ransom = "give one grand today".split(' ');

let magazineHash = {}
for(let ind in magazine) {
    if(!magazineHash[magazine[ind]]) {
        magazineHash[magazine[ind]] = 1;
    }
    else {
        magazineHash[magazine[ind]]++;
    }
}

let canBeUsed = true;
for(let ind in ransom){
    if(!magazineHash[ransom[ind]]) {
        canBeUsed = false;
        break;
    }
}

if(canBeUsed)
    console.log("Yes")
else
    console.log("No")
