//               01234567
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString[4]);
console.log(umaString.charAt(4));
console.log(umaString.concat(' ','em',' ','um',' ', 'lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[x]/g));
console.log(umaString.replace(/r/g,'#'));
console.log(umaString.slice(2,6));
console.log(umaString.slice(-5, -1));
console.log(umaString.split(' ', 2));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());