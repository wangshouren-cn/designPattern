//透明的单例模式

let createDiv = (function () {
  let instance = null

  let createDiv = function (html) {
    if (instance) return instance
    this.html = html
    this.init()
    return (instance = this)
  }
  createDiv.prototype.init = function () {
    let div = document.createElement('div')
    div.innerHTML = this.html
    document.body.appendChild(div)
  }
  return createDiv
})()

