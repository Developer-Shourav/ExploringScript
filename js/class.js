"use strict";
const lalbaba = "Limpa luma tatu.";
function sum(num1, num2) {
    return num1 + num2;
}
/* Different types in TypeScript

//Catagory One
1.String
2.Number
3.Array
4. null
5.undefined
6.bollean
7.never
8.unknown

//Catagory Two
any



*/
const substract = (number1, number2) => {
    return number1 - number2;
};
substract(20, 10);
console.log(substract);
const arr = ['Sap', 'kola', 'tal', 'tomal', 'kulu'];
const auu = [451, 554657, 4667];
const pupil = {
    name: "Shourav",
    age: 12,
    passed: true,
    home: "Nawabgonj",
    phone: 561422
};
const tudent = {
    name: "tuli",
    hobby: "Bilai khela",
    fathersName: "Jane Mairafalam",
    bangladeshi: true,
    promoCode: 35454
};
//Enums
/*
Deleted
----------------
const PI = 3.1416 ;
const admin = "tamim" ;
 */
/* Similar data tyep const jodi akta const er under a ana hoy tokhon seta Enums..Aktu subidha  */
// Example of Enums
var Colors;
(function (Colors) {
    Colors["color1"] = "#ededed";
    Colors["color2"] = "#ededff";
    Colors["color3"] = "#ededee";
})(Colors || (Colors = {}));
console.log(Colors.color1);
