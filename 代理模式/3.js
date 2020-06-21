/* 
虚拟代理在惰性加载中的应用
*/
let util = (function () {
  const cache = []
  const handler = (e) => {
    if (e.keyCode === 113) {
      //F2
      const script = document.createElement('script')
      script.src = './util.js'
      script.onload = function () {
        for (let i = 0, fn; (fn = cache[i++]); ) {
          fn()
        }
      }
      document.body.appendChild(script)
      window.removeEventListener('keydown', handler)
    }
  }
  window.addEventListener('keydown', handler)
  return {
    log(...args) {
      cache.push(util.log.bind(util, ...args))
    },
  }
})()
util.log('x')
util.log('y')
util.log('z')
