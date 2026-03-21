// ./quiz/member-stu.js
const member = {
    mname: 'Kim',
    age: 25,
    address: '부산'
}

// 비구조화할당
// const name = (member.mname);
// const age = (member.age);

// 구조분해할당
let {mname, age} = member;

// console.log(name);
console.log(mname);
console.log(age);