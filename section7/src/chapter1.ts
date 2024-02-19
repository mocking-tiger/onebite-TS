// 첫번째 사례

import { get } from 'http';

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap('1', 2);

// 두번째 사례
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  // 첫번째 요소는T고, 나머지는 모르겠다
  // rest파라미터 처럼 사용
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, 'hello', 'mynameis']);
// "hello"

// 세번째 사례
function getLength<T extends { length: number }>(data: T) {
  // length가 number인 T
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength('12345'); // 5

let var3 = getLength({ length: 10 }); // 10

//let var4 = getLength(10);
