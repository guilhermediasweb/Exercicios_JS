const s1=Symbol()
const s2=Symbol()
const s3=Symbol.for("AAAA")
const s4=Symbol.for("AAAA")

console.log(s1)

console.log(s3==s4)
console.log(typeof s1)

console.log(Symbol.keyFor(s3))
