
function solution5(arrayOfObjects){
    let age = [];
    for(let index=0; index<arrayOfObjects.length ;index++)
     {
        age.push(arrayOfObjects[index].age);
     }
   return age;
 }

 module.exports = {solution5}; 
