let values = {
    m: 100,
    cm: 1,
    in: 2.54,
    ft: 30.48
};

function add() {
    let fs = require('fs');

    let file = fs.readFileSync('add.json', 'utf8');
    
    let json = JSON.parse(file);
    
    for (let i = 0; i < json.length; i++) {
        values[json[i].name] = json[i].value;
    }
};

function conversion(obj) {
    let json = JSON.parse(obj);

    let unit = json.distance.unit;
    let convert = json.convert_to;

    let transf = values[unit] * json.distance.value / values[convert];
    let result = {unit: convert, value: transf.toFixed(2)};

    console.log(result);
};

add();

conversion('{"distance": {"unit": "mm", "value": 9.5}, "convert_to": "ft"}');