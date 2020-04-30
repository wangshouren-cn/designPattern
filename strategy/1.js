// JavaScript版本策略模式
let strateges = {
  S(salary) {
    return salary * 4
  },
  A(salary) {
    return salary * 3
  },
  B(salary) {
    return salary * 2
  },
}
function caculate(level,salary){
  return strateges[level](salary)
}
console.log(caculate('S',2000))