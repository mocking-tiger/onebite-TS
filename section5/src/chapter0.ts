// 인터페이스

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: '이정환',
  sayHi: function () {
    console.log('hi');
  },
};

// person.name = '홍길동';
