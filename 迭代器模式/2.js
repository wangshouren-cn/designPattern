/* 
外部迭代器
*/
function Iterator(obj) {
  let current = 0
  function next() {
    current += 1
  }
  function isDone() {
    return current >= obj.length-1
  }
  function getCurrentItem() {
    return obj[current]
  }
  return {
    next,
    isDone,
    getCurrentItem,
  }
}

const it = Iterator([1, 2, 3, 4, 5])

console.log(it.getCurrentItem())
console.log(it.isDone())
it.next()
console.log(it.getCurrentItem())
console.log(it.isDone())
it.next()
console.log(it.getCurrentItem())
console.log(it.isDone())
it.next()
console.log(it.getCurrentItem())
console.log(it.isDone())
it.next()
console.log(it.getCurrentItem())
console.log(it.isDone())

