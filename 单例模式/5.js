//惰性单例
let createLoginLayer = (function () {
  let div = null
  return function () {
    if (!div) {
      div = document.createElement('div')
      div.innerHTML = '我是登录浮窗'
      div.style.display = 'none'
      document.body.appendChild('div')
    }
    return div
  }
})()
document.getElementById('loginBtn').onclick = function () {
  let loginLayer = createLoginLayer()
  loginLayer.style.display = 'block'
}
