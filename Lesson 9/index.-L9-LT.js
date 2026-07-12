// Khoi tao 1 Object //
const person = {
    name: "Ethan Hunt",
    age: 20,
    job: "Tester"
}
console.log("🚀 ~ person:", person)

// Lam viec voi Object

// Cach 1
// const job =  person.job

// Cach 2
console.log("person[name]",person['name']);

// Cach 3 Destructuring
const {name, age, job} = person;
console.log("🚀 ~ job:", job)
console.log("🚀 ~ age:", age)
console.log("🚀 ~ name:", name)

// Gan gia tri
person.age = 30
person.name = "Jone"
console.log("🚀 ~ person:", person)


// Xoa Key / Property:
// delete person.job
// delete person.name
console.log("🚀 ~ person:", person)

// Duyet Object
for (let key in person) {
    console.log("key", key);
    // Lay value
    const value = person[key]
    console.log("🚀 ~ value:", value)
}

// Quan ly san pham
// 1. Danh sach san pham
// 2. Thong tin 1 san pham
