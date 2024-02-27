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
