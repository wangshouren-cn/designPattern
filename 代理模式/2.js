/* 
虚拟代理合并http请求
*/
const checkboxes = document.querySelectorAll('input[type=checkbox]')
console.log(checkboxes)
for (let i = 0, checkbox; (checkbox = checkboxes[i]); i++) {
  checkbox.onclick = function () {
    if (this.checked) {
      proxy(i)
    }
  }
}
const proxy = (function () {
  const cache = []
  let timer
  return function (id) {
    cache.push(id)
    if (timer) return
    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      ajax(cache.join(','))
      cache.length = 0
    }, 2000)
  }
})()
function ajax(ids) {
  console.log('开始发送已选择的：' + ids)
}
