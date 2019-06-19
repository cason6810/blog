let fs = require("fs");

let fileName = 'result.txt';


let _arr2 = [];
fs.readFile('area_201904.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    let _arr = data.toString('UTF8').split('\r\n');

    let _str = '';
    _arr.map(val => {
        let _tempObj = {};
        val = val.split('\t');

        if (val[1].indexOf('市') > 0 && val[1].length-val[1].indexOf('市') === 1) {
            _str = val[0];
        }

        if (_str === val[0]) {
            _tempObj = val[0] + ',' + val[1] + ',' + val[0].substr(0, 2) + '0000';
        }else {
            _tempObj = val[0] + ',' + val[1] + ',' + _str;
        }

        _arr2.push(_tempObj);
    })
    console.log("异步读取: " + _arr[0]);

    writeText(_arr2);
});

function writeText(_array) {
    fs.writeFile(fileName, _array.join('\r\n'), {
        encoding: 'utf8'
    }, function(err) {
        if (err) throw err;
        console.log(fileName + '生成成功！');
    });
}
