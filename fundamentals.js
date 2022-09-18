 const aCar = {
        owner : "Joe Bloggs",
        type :{
            make:'Toyota',
            model: 'Corolla',
            CC: ' 1.8' 
        },
        registration : '201WD1058' };

        
//Add new property
aCar.mileage = '1000';
aCar.colour = {
    exterior:'red',
    interior:{
        texture: 'leather',
        shade: 'cream' 
    }
}

console.log('it is a ' + aCar.colour.exterior + ' car, ' + aCar.mileage + ' mileage, with ' + aCar.colour.interior.texture + ' interior')
console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make)