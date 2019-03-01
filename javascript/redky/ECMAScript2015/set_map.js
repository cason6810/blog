// Map/Set
// WeakMap/WeakSet

;(function() {
  'use strict';

  // Set 集合 - 数据结构
  /*
    .size
    .has
    .add
    .delete
    .clear
    .forEach/.keys/.values/.entries
  */
  let set = new Set;

  // add
  for (let i = 0, v; i < 10; ++i) {
    v = i * Math.random() * 10;
    set.add(parseInt(v, 10));
  }

  // size
  console.log('size:', set.size, set.size === 10);

  // log
  // 支持 for..of 迭代
  for (var value of set) {
    console.log(value);
  }

  // forEach
  set.forEach(t => console.log(t));

  // keys/values same result.
  for (let k of set.keys()) {
    console.log('set_key:', k);
  }

  for (let v of set.values()) {
    console.log('set_value:', v);
  }
  // entries -> key/value
  let r = set.entries();
  // for (let [k, v] of r) {
  //     console.log(k, v);
  // }

  set.clear();
  console.assert(set.size === 0, 'empty set.');

  set.add(1);
  set.add(2);
  console.assert(set.size === 2, 'set.size === 2');

  set.delete(1);
  console.assert(set.size === 1, 'set.size === 1');

  console.assert(set.has(2), 'set has 2!');

  // WeakSet
  // .has/.add/.delete
  // WeakSet没有size属性，没有办法遍历它的成员

  // 当不再使用时, 会释放内存占用 - 垃圾回收机制不考虑 WeakSet 中的引用
  // 成员不可以是基本类型数据 - 包括 Symbol


  // Map
  // 初始化
  let m = new Map([
    [1, 2],
    [[], []],
    [false, false]
  ]);
  // 支持初始化多个值, 使用多维数组表示.
  // 第一个值做 key, 第二个值做 value.

  /*
    Map 数据结构完善 Object 中只能使用字符串当作 Key 情况.
    Map 认为 NaN 与 NaN 相等.
    .size
    .hash
    .set
    .get
    .delete
    .clear
  */

  // 遍历
  for (let value of m.values()) {
    console.log('value:', value);
  }

  for (let key of m.keys()) {
    console.log('key:', key);
  }

  for (let item of m) {
    console.log(item[0], item[1]);
  }

  m.clear();
  console.assert(m.size === 0, 'empty map!');
  m.set('key', 'value');
  m.set([], 'array');
  console.assert(m.size === 2, 'map.size === 2');
  console.assert(m.get('key') === 'value', 'map.get("key") === "value"');
  console.assert(m.has('key') === true, 'map.has("key")');

  // chrome do not support.
  /*
      for (let [key, value] of m) {
          console.log(key, value);
      }
  */

  // WeakMap
  // .has/.set/.get/.delete
  // 同 WeakSet

})();

// https://github.com/zhanhongtao/blog/issues/173
