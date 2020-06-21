//用代理实现单例模式
function createDiv(html) {
  this.html = html
  this.init()
}
createDiv.prototype.init = function () {
  let div = document.createElement('div')
  div.innerHTML = this.html
  document.body.appendChild(div)
}
ProxySingletonCreateDiv = (function () {
  let instance = null
  return function (html) {
    return instance || (instance = new createDiv(html))
  }
})()
