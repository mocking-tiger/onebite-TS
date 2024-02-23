// 인덱스트 엑세스 타입

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfo(
  author: PostList[number]['author'] /*이 인덱스는 값이 아니고 타입임*/,
) {
  console.log(`${author.name}: ${author.id}`);
}

const post: PostList[number] = {
  title: '제목',
  content: '본문',
  author: {
    id: 1,
    name: '이정환',
    age: 27,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];
type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
