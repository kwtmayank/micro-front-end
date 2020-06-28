var faker = require('faker');
var fs = require('fs');

function generateUsers(){
    var users = [];
    for(var i=0; i <= 50; i++){
        users.push({
            id: i+1,
            firstName : faker.name.firstName(),
            lastName : faker.name.lastName(),
            email : faker.internet.email(),
            jobTitle : faker.name.jobTitle(),
            phone : faker.phone.phoneNumberFormat(),
            image : faker.image.avatar()
        })
    }

    return users;
}


var fakeData = JSON.stringify({users:generateUsers()});

try{
    fs.writeFileSync('db.json', fakeData);
}catch(e){
    console.error(e);
}