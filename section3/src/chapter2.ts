// unknown 타입

function unknownExam(){
  // 업캐스팅 가능
  let a : unknown = 1;
  let b : unknown = "hello";
  let c : unknown = true;
  let d : unknown = null;
  let e : unknown = undefined;

  let unknownVar: unknown;

  //다운캐스팅 불가능
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

// never 타입

function neverExam(){

  function neverFunc():never{
    while(true){}//반환하는 값의 종류가 없다.
  }

  let num:number = neverFunc();
  let str:string = neverFunc();
  let bool:boolean = neverFunc();

  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
  // 아무런 값도 저장할 수가 없음
}

// void 타입

function voidExam(){

  function voidFunc():void{
    console.log('hi');
  }

  let voidVar: void = undefined;
}

// any 타입

function anyExam(){
  let unknownVar:unknown;
  let anyVar:any;
  let undefinedVar:undefined;
  let neverVar:never;

  anyVar = unknownVar; //any는 다운캐스팅 가능

  undefinedVar = anyVar; // any는 업캐스팅도 가능
  //위험하기 때문에 사용하지 않는것이 권장 됨.

  // neverVar = anyVar;
  // never에는 할 수 없음.
}