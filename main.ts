let c = "cui-a cui-b"
let criteria = "cui-"
let m = c.split(' ').filter(t => t.match(criteria))
console.log(m)

console.log(criteria);
