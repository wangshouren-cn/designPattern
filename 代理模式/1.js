/* 
虚拟代理实现图片预加载
*/
const myImage = (function () {
  const image = document.createElement('img')

  document.body.appendChild(image)
  return {
    setSrc(src) {
      image.src = src
    },
  }
})()
const proxyImage = (function () {
  const image = new Image()
  image.onload = function () {
    myImage.setSrc(this.src)
  }
  return {
    setSrc(src) {
      myImage.setSrc('./loading.gif')
      image.src = src
    },
  }
})()
proxyImage.setSrc(
  'http://redmine.haoyong.me/attachments/download/6877/%E7%99%BB%E5%BD%95%E7%95%8C%E9%9D%A2_1.png'
)
