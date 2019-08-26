// 将OMS请求回的数据，匹配配置文件修改列宽
const fs = require('fs');
const path = require('path');
const jsBeautify = require('js-beautify').js;

let omsFile = path.join(__dirname, '/oms.txt');
let configFile = path.join(__dirname, '/configFile.txt');
let outFile = path.join(__dirname, '/result.txt');;

const main = {
    params: {
        configFile: {}
    },
    // 通过 promise 控制顺序（fs.readFile 是个异步操作，不用Promise包住还是控制不了顺序）
    async init() {
        await main.readConfigFile();
        await main.readOmsFile();
    },
    // 读入 oms 模板内容
    readOmsFile() {
        return new Promise((resolve, reject) => {
            fs.readFile(omsFile, function (err, data) {
                if (err) {
                    return console.error(err);
                }
                let _omsData = JSON.parse(data.toString('UTF8'));
                main.matchName(_omsData);
                resolve();
            })
        })
    },
    // 读入列宽配置文件
    readConfigFile() {
        return new Promise((resolve, reject) => {
            fs.readFile(configFile, function (err, data) {
                if (err) {
                    return console.error(err);
                }
                let _tempArr = data.toString('UTF8').split('\r\n');
                let _obj = {};
                _tempArr.map(val => {
                    if (val) {
                        val = val.split('\t');
                        _obj[val[0]] = val[1];
                        main.params.configFile[val[0]] = val[1];
                    }
                })
                resolve();
            })
        })
    },
    // 双循环匹配 title
    matchName(_data) {
        for (let key in _data.typeData) {
            for (let val in main.params.configFile) {
                if (_data.typeData[key].title === val) {
                    if (Number(_data.typeData[key].width) !== Number(main.params.configFile[val])) {
                        console.log('源: ' + _data.typeData[key].title + '-' + _data.typeData[key].width + '<=====>' + '目标: ' + main.params.configFile[val])
                    } else {
                        console.log('源: ' + _data.typeData[key].title + '-' + _data.typeData[key].width + '****************' + '目标: ' + main.params.configFile[val])
                    }
                    _data.typeData[key].width = Number(main.params.configFile[val]);
                }
            }
        }

        main.writeText(_data);
    },
    // 写入文件
    writeText(_array) {
        // 格式化一下
        let _temp = jsBeautify(JSON.stringify(_array), {
            indent_size: 2,
            space_in_empty_paren: true
        });
        fs.writeFile(outFile, _temp, {
            encoding: 'utf8'
        }, function (err) {
            if (err) throw err;
            console.log(outFile + ' 生成成功！');
        })
    }
}

main.init();