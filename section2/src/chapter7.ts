// void
// void : 공허 : 아무것도 없다.
// void : 아무것도 없음을 의미

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log('hello');
}

// never: 존재하지않는: 불가능한타입
// 불가능, 모순을 의미
// never는 null,undefined,any도 담지 못함

function func3():never{
  while(true){}
}

function func4():never{
  throw new Error();
}