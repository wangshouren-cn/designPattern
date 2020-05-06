/* 
用高阶函数动态创建代理
*/
function multy() {
  return Array.prototype.reduce.call(arguments, (a, b) => a * b)
}
function sum() {
  return Array.prototype.reduce.call(arguments, (a, b) => a + b)
}

const createProxyFactory = function (fn) {
  const cache = {}
  return function () {
    const string = Array.prototype.join.call(arguments, ',')
    if (cache[string]) {
      console.log('cache')
      return cache[string]
    }
    return (cache[string] = fn.apply(null, arguments))
  }
}
const proxyMulty = createProxyFactory(multy)
const proxySum = createProxyFactory(sum)

console.log(proxyMulty(4, 5, 6))
console.log(proxyMulty(4, 5, 6))
console.log(proxySum(4, 5, 6))
console.log(proxySum(4, 5, 6))
