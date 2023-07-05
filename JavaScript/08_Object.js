// 객체 생성
let person = {
    name: 'John',
    age: 30,
    sayHello: function () {
        console.log('Hello!');
    }
};

// 객체 프로퍼티
console.log(person.name); // 'John'
console.log(person['age']); // 30

// 객체 메서드
person.sayHello(); // 'Hello!'

//객체 복사
let person2 = person;
person2.age = 35;
console.log(person.age); // 35