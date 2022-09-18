 const aCar = {
        owner : "Joe Bloggs",
        address : '3 Walkers Lane',
        previous_owners: [
            { name: "Pat Smith", address: "1 Main Street" },
            { name: "Sheila Dwyer", address: "2 High Street" }
          ],
        type :{
            make:'Toyota',
            model: 'Corolla',
            CC: ' 1.8' 
        },
        features : [
            'Parking assist',
            'Alarm',
            'Tow-bar'],
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

console.log('First Owner: ' + aCar.previous_owners[0].name + ' ' + aCar.previous_owners[0].address)
console.log('it is a ' + aCar.colour.exterior + ' car, ' + aCar.mileage + ' mileage, with ' + aCar.colour.interior.texture + ' interior')
console.log(aCar.owner);
console.log(aCar.owner + ' drives a ' + aCar.type.make)

for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
}

for (let i = 0; i< aCar.previous_owners.length; i += 1){
    console.log('Previous owner: ' + aCar.previous_owners[i].name)
}