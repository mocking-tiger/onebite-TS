// any
// 특정 변수의 타입이 확실하지 않을때
let anyVar:any = 20;
anyVar = "hello";

let num:number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};
// num = unknownVar;