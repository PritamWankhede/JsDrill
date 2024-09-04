

  function ageAndhobby(arrayOfObjects){
    
     for(let index=0; index < arrayOfObjects.length ;index++)
     {
       console.log(`Person age is ${arrayOfObjects[index].age} and hobbies are ${arrayOfObjects[index].hobbies}`);
     }
    
  }
  module.exports = {ageAndhobby};