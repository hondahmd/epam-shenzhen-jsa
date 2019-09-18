'use strict';

let telephoneBook = new Map([
    ["William A. Lathan", "405-709-1865"],
    ["John K. Miller", "402-247-8568"],
    ["Hortensia E. Foster", "606-481-6467"],
    ["Amanda D. Newland", "319-243-5613"],
    ["Brooke P. Askew", "307-687-2982"],
]);

let checkNumber = "John K. Miller";
let checkOwner = "307-687-2982";
let checkExist = "Chris E. Myers";

console.log(telephoneBook.get(checkNumber));

telephoneBook.forEach((value, key) => {
    if (value === checkOwner) {
        console.log(key);
    }
});

console.log(telephoneBook.has(checkExist) && (telephoneBook.get(checkExist) !== undefined) ? "We have that number" : "We don't have that number");