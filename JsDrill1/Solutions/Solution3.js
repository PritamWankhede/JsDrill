 
  
 function solution3(arrayOfObjects){
    let name = [];
    for(let index=0; index<arrayOfObjects.length ;index++)
     {
      if(arrayOfObjects[index].country === 'Australia'){
           name.push(arrayOfObjects[index].name);
        }
     }
   return name;
 }

 module.exports = {solution3}; 
 