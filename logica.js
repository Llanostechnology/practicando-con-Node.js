//   let username = "Juan"
//    let age = 29

//    console.log(username)
//    console.log(age)

/* const age = 20

if (age >= 18 ){
    console.log("You are an adult")
}else {
    console.log("You are a child")
}
 */

// const names = ['juan', 'pablo', 'pedro']

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
//

// function showUserInfo(userName, userAge){
//      return `The username is ${userName}, the user is ${userAge} years old`
// }

// console.log(showUserInfo('joe', 30))
// console.log(showUserInfo('maria', 27))

// funcuiones flecha:

const showUserInfo = (userName, userAge) => `The username is ${userName}, the user is ${userAge} years old`;

console.log(showUserInfo("joe", 30));
console.log(showUserInfo("maria", 27));
