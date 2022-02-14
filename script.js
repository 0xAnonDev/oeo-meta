var fs = require('fs');


for (let i = 0; i < 113; i++) {
    var item = {
        "name": "OEO Valentines",
        "description": "Oneder Valentine's Day Collectible",
        "image": "https://gateway.pinata.cloud/ipfs/QmQTmVLDrAT2CbCov7swcvzrSo1Q7TdV9JAxo4t7fY6eA5/" +i.toString()+".jpg"
    }
    var json = JSON.stringify(item);
    fs.writeFile('valentines/'+i.toString()+'.json', json, function(err) {
        if (err) throw err;
        console.log("Done");
    });
}