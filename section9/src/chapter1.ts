// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>; // string이 됨
let b: StringNumberSwitch<string>; // number가 됨

let c: StringNumberSwitch<number | string>;
// union타입을 할당하게 되면 한번은 number, 한번은 string이 전달됨
// StringNumberSwitch<number>
// StringNumberSwitch<string>

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean>
// StringNumberSwitch<number>
// StringNumberSwitch<string>

// 2단계
// number
// string
// number

// 결과
// number | string

// 실용적인 예제

type Exclude<T, U> = T extends U ? never : T;
type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | boolean
// 결과에 never가 포함되면 never는 사라짐

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

/* 2단계
never |
string |
never

즉, B의 타입은 string */
