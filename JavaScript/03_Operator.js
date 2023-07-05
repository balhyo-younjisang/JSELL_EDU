// 산술 연산자
let x = 10, y = 5;

const add = x + y; // 덧셈
const subtract = x - y; // 뺄셈
const multipli = x * y; // 곱셈
const divison = x / y; // 나눗셈
const remain = x % y; // 나머지
const square = x ** y; // 제곱

// 할당 연산자
let z;

z = 10; // 대입
z += 5; // 더하고 대입
z -= 5; // 빼고 대입
z *= 5; // 곱하고 대입
z /= 5; // 나누고 대입
z %= 5; // 나머지를 구하고 대입

// 비교 연산자
let a = 3, b = 3;

a == b; // 같음 ( 값만 )
a != b; // 같지 않음
a === b; // 일치함 (타입과 값 모두)
a !== b; // 일치하지 않음
a > b; // 크다
a >= b; // 크거나 같다
a < b; // 작다
a <= b; // 작거나 같다

// 논리 연산자

let c = 15, d = 13;

c && d; // 논리 곱 ( 모두 true여야 true)
c || d; // 논리 합 ( 한쪽만 true여도 true)
!c; // 논리 부정 ( true -> false, false -> true)

// 삼항 연산자
let e = 10;

e === 10 ? console.log("true") : console.log("false"); // e가 10이라면 true를 출력, 아니라면 false를 출력