// Ioana Alex Mititean
// 10/11/22
// Unit 8.2.8: find, findIndex Exercise

/*
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of
username, and a string. The function should return the first object with the key of username that
matches the string passed to the function. If the object is not found, return undefined.

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

function findUserByUsername(usersArray, username) {

    return usersArray.find(function(object, index, array) {
        return object["username"] === username;
    })
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of
username, and a string. The function should remove the object from the array. If the object is not
found, return undefined.

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {

    let objIndex = usersArray.findIndex(function(object, index, array) {
        return object["username"] === username;
    })

    return (objIndex === -1 ? undefined : usersArray.splice(objIndex, 1)[0]);
}