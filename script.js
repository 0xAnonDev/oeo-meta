var fs = require('fs');


for (let i = 0; i < 113; i++) {
    var item = {
        "name": "OEO Valentines",
        "description": "Oneder Valentine's Day Collectible",
        "image": "https://gateway.pinata.cloud/ipfs/QmdjBRkZCFqKLuKnK9AspDtRmZsWC6wsyykYme7XxDA3Xm/" +i.toString()+".jpg"
    }
    var json = JSON.stringify(item);
    fs.writeFile('valentines/'+i.toString()+'.json', json, function(err) {
        if (err) throw err;
        console.log("Done");
    });
}


// const export_csv = (arrayHeader, arrayData, delimiter, fileName) => {
//     let header = arrayHeader.join(delimiter) + '\n';
//     let csv = header;
//     arrayData.forEach( array => {
//         csv += array.join(delimiter)+"\n";
//     });

//     let csvData = new Blob([csv], { type: 'text/csv' });  
//     let csvUrl = URL.createObjectURL(csvData);

//     let hiddenElement = document.createElement('a');
//     hiddenElement.href = csvUrl;
//     hiddenElement.target = '_blank';
//     hiddenElement.download = fileName + '.csv';
//     hiddenElement.click();
// }

// let csvContent = "data:text/csv;charset=utf-8,";



// let tokenUris = []
// for (let i = 0; i < 113; i++) {
//     uri = "http://api.oneders.xyz/valentines/" +i.toString()+".json"
//     tokenUris.push(uri)
// }

// tokenUris.forEach(function(itemArray) {
//     csvContent += "\"" + itemArray + "\",";
// });

// const buffer = Buffer.from(tokenUris);

// fs.writeFile("uris", buffer, (err) => {
//     if (err) throw err;
// })

// console.log(csvContent);
// var encodedUri = encodeURI(csvContent);
// window.open(encodedUri);

// var lineArray = [];
// data.forEach(function (tokenUris, index) {
//     var line = tokenUris.join(",");
//     lineArray.push(index == 0 ? "data:text/csv;charset=utf-8," + line : line);
// });
// var csvContent = lineArray.join("\n");

// export_csv([""], tokenUris, "\n", "tokenUris.csv")