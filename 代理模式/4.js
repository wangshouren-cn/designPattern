/* 
缓存代理的例子：计算乘积
*/
function multy() {
  return Array.prototype.reduce.call(arguments, (a, b) => a * b)
}

const proxy = (function () {
  const cache = {}
  return function () {
    const string = Array.prototype.join.call(arguments, ',')
    if (cache[string]) {
      console.log('cache')
      return cache[string]
    }
    return (cache[string] = multy.apply(null, arguments))
  }
})()
console.log(proxy(4, 5, 6))
console.log(proxy(4, 5, 6))
