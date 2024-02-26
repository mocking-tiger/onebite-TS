// 템플릿 리터럴 타입

type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

type ColoredAnimal = `${Color}-${Animal}`;

// Color에 오는 타입과 Animal에 오는 모든 타입이 조합됨

// const coloredAnimal:ColoredAnimal = '';
