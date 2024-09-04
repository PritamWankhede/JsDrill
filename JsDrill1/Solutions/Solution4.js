

function solution4(arrayOfObjects,index){
    if(index >= 0 && index < arrayOfObjects.length){
     if(index === 3){
        console.log(`Name of is ${arrayOfObjects[index].name} and City is ${ageAndhobby[index].city}` )
     }
     else{
       console.log("Index is not 3");
    }
  }
}
module.exports = {solution4};