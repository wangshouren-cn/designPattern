//表单校验

const strategies = {
  minLength(value, min, errMsg) {
    if (value.length < min) return errMsg
  },
  isNoEmpty(value, errMsg) {
    if (value === '') return errMsg
  },
  isMobile(value, errMsg) {
    if (!/^1\d{10}$/.test(value)) return errMsg
  },
}

function validataFunc() {
  const validator = new Validator()
  //添加规则
  validator.add(registerForm.username, 'minLength:6', '用户名最低6位')
  validator.add(registerForm.password, 'isNoEmpty', '密码不为空')
  validator.add(registerForm.phoneNumber, 'isMobile', '手机号格式不正确')
  //验证规则
  const errMsg = validator.start()
  return errMsg
}
class Validator {
  constructor() {
    this.cache = []
  }
  add(dom, funVal, errMsg) {
    this.cache.push(() => {
      const [strategyFnName, ...args] = funVal.split(':')
      args.unshift(dom.value)
      args.push(errMsg)
      if (strategies[strategyFnName].apply(strategyFnName, args)) return errMsg
    })
  }
  start() {
    for (let i = 0, strategy; (strategy = this.cache[i++]); ) {
      const errMsg = strategy()
      if (errMsg) return errMsg
    }
  }
}

const registerForm = document.getElementById('registerForm')

registerForm.onsubmit = function () {
  const errMsg = validataFunc()
  if (errMsg) {
    return alert(errMsg) && false
  }
}
