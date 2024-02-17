// 타입추론

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let {id, name, profile} = c;

let[one, two, three] = [1, 'hello', true];

function func(message='hello'){
  return "hello";
}

let d; // 암묵적 any 타입
d = 10; // any -> number
d.toFixed();

d = 'hello'; // number -> string
d.toUpperCase();

const num = 10;
const str = 'hello';

let arr = [1, "string"];