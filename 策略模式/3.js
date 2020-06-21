//给某个文本输入框添加多种校验规则
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
  validator.add(registerForm.username, [
    {
      strategy: 'isNoEmpty',
      errMsg: '用户名不为空',
    },
    {
      strategy: 'minLength:6',
      errMsg: '用户名最低6位',
    },
  ])
  validator.add(registerForm.password, [
    {
      strategy: 'isNoEmpty',
      errMsg: '密码不为空',
    },
    {
      strategy: 'minLength:9',
      errMsg: '密码最低9位',
    },
  ])
  validator.add(registerForm.phoneNumber, [
    {
      strategy: 'isMobile',
      errMsg: '手机号格式不正确',
    },
  ])
  //验证规则
  const errMsg = validator.start()
  return errMsg
}
class Validator {
  constructor() {
    this.cache = []
  }
  add(dom, rules = []) {
    this.cache.push(() => {
      for (let i = 0, rule; (rule = rules[i++]); ) {
        const { strategy, errMsg } = rule
        let [strategyFnName, ...args] = strategy.split(':')
        args.unshift(dom.value)
        args.push(errMsg)
        if (strategies[strategyFnName].apply(strategies, args)) return errMsg
      }
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
