// JavaScript中的单例模式

// 1)使用命名空间
let MyApp = {}
MyApp.namespace = function (name) {
  let parts = name.split('.'),
    current = this
  for (let part of parts) {
    if (!current[part]) {
      current[part] = {}
    }
    current = current[part]
  }
}
MyApp.namespace('event')
MyApp.namespace('dom.style')
console.log(MyApp) //{ namespace: [Function], event: {}, dom: { style: {} } }

// 2)使用闭包封装私有变量
let user = (function () {
  let name = 'jane',
    age = '29'
  return {
    getUserInfo() {
      return name + '-' + age
    },
  }
})()
console.log(user.getUserInfo())
