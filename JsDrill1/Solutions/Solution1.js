// const {arrayOfObjects} = require('./Person.js')


//write a function that accesses and returns the email addresses of all individuals.
function personsEmail(arrayOfObjects){
    let emailArray = [];
    for(let i=0;i<arrayOfObjects.length;i++)
    {
         emailArray.push(arrayOfObjects[i].email);
    }
    return emailArray;
}
// personsEmail(arrayOfObjects);

//Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
  
module.exports = {personsEmail};