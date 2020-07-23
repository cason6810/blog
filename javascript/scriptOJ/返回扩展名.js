/**
 * 完成 extname 函数，它会接受一个文件名作为参数，你需要返回它的扩展名。
 * 例如，输入 emoji.png，返回 .png。
 */

// 代码并不复杂，主要是异常情况的处理需要考虑多一些

const extname = (filename) => {
    /* TODO */
    let regx=new RegExp(/(\..*)$/);
    if (regx.test(filename)) {
        let _ext = filename.replace(/(.*)(\..*)$/,'$2');
        if (filename.indexOf(_ext) === 0) {
            return '';
        }else {
            return _ext;
        }
    }else {
        return filename;
    }
}

console.log(extname('hello.jpg'));
console.log(extname('.jpg'));
console.log(extname('jpg'));
