

function session8(arrayOfObjects){
    let city = [];
    let country = [];
    for(let index=0;index<arrayOfObjects.length;index++)
    {
         city.push(arrayOfObjects[index].city);
        country.push(arrayOfObjects[index].country);
    }
    return `City of Person ${city} and Contry of Person ${country}`;
}