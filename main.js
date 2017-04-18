var util = require("./util");

var log = util.l;
var arr = [1,2,3,4,5,6,7,8,9,10] 

log(`Array operators`)
log(`======================`)
log(`\n => join`); 
log(`// converts arr to string seperated by a delimitor provided in the method (optional) "," by default`);
log(arr.join());
// 1,2,3,4,5,6,7,8,9,10

log(`// delimited by space`);
log(arr.join(" "))
// 1 2 3 4 5 6 7 8 9 10

log(`\n => splice`)
log(`// used alias for copying an array, does shallow copy. `)



