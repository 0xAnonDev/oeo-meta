var fs = require('fs');


for (let i = 0; i < 10; i++) {
    var item = {
        "name": "OEOValentines",
        "description": "OEOneders Valentines Day Collectible",
        "image": "https://gateway.pinata.cloud/ipfs/QmXz7N6AmCVV93Rv67xsKjLFAc2xpELjoK7JgHz1vL74RV/" +i.toString()+".png"
    }
    var json = JSON.stringify(item);
    fs.writeFile('metadata/'+i.toString()+'.json', json, function(err) {
        if (err) throw err;
        console.log("Done");
    });
}