//通用惰性单例
let getSingle = function (fn) {
  let instance = null
  return function () {
    return instance || (instance = fn.apply(this, arguments))
  }
}
let createSingleIframe = getSingle(function () {
  let iframe = document.createElement('iframe')
  document.body.appendChild(iframe)
  return iframe
})
document.getElementById('btn').onclick = function () {
  createSingleIframe().src = 'www.baidu.com'
}
