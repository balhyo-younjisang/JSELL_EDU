// 배열 생성
let fruits = ['사과', '바나나', '오렌지'];

// 배열 요소 접근하기
console.log(fruits[0]); // 출력값: '사과'
console.log(fruits[1]); // 출력값: '바나나'
console.log(fruits[2]); // 출력값: '오렌지'

// 배열 길이 구하기
console.log(fruits.length); // 출력값: 3

// 배열 요소 추가하기
fruits.push('포도');
console.log(fruits); // 출력값: ['사과', '바나나', '오렌지', '포도']

// 배열 요소 제거하기
fruits.pop();
console.log(fruits); // 출력값: ['사과', '바나나', '오렌지'], 포도 제거

// 배열 요소 순환하기
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
  // 출력값:
  // '사과'
  // '바나나'
  // '오렌지'
