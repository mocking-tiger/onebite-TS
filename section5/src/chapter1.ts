// 인터페이스의 확장(상속)

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: '',
  age: 3,
  isBark: true,
  isScratch: true,
};
