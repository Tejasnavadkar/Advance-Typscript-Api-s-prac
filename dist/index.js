"use strict";
function sumOfTwoNumbers(user1, user2) {
    return user1.age + user2.age;
}
const result = sumOfTwoNumbers({ name: "tejas", age: 20 }, { name: "aditya", age: 30 });
console.log(result);
