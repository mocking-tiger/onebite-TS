// keyof 연산자

// keyof = 객체의 key를 추출
// typeof = 객체의 type을 추출

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: '이정환',
  age: 27,
};

getPropertyKey(person, 'name');
