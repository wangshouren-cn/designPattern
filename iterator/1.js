/* 
内部迭代器
*/
function each(obj, callback) {
  for (let i = 0; i < obj.length; i++) {
    callback(i, obj[i])
  }
}
