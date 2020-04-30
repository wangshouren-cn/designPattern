//实现单例模式
//单例模式定义：确保只有一个实例，并提供全局访问点
class Singleton {
  constructor(name) {
    this.name = name
  }
  static getInstance(name) {
    return this.instance || (this.instance = new Singleton(name))
  }
}
let a = Singleton.getInstance('a')
let b = Singleton.getInstance('b')
console.log(a === b)
