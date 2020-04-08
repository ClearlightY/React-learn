function Person(name, age) {
    this.name = name
    this.age = age
}

// info 属性, 直接挂载给了构造函数, 所以它是静态属性
Person.info = 'aaaa'

const p1 = new Person("Jack", 18)
console.log(p1)
// 通过 new 出来的实例, 访问到的属性, 叫做 [实例属性]
console.log(p1.name, p1.age)
// [静态属性]: 通过 构造函数, 直接访问到的属性, 叫做静态属性

console.log('-----------------------')

// 创建了一个动物类
class Animal {
    // 这是类中的 构造器
    // 每一个类中, 都有一个构造器, 如果我们程序员没有手动指定构造器, 那么, 可以认为类内部有个默认的 空构造器, 类似于constructor() {}
    // 构造器的作用, 就是 每当 new 这个类的时候, 必然会优先执行 构造器中的代码
    constructor(name, age) {
        // 实例属性
        this.name = name
        this.age = age
    }

    // 在 class 内部, 通过 static 修饰的属性, 就是静态属性
    static info = 'eee'
}
const cat = new Animal('LuLa', 18)
// 静态属性
console.log(cat)
console.log(cat.name, cat.age)
// 实例属性
console.log(Animal.info)