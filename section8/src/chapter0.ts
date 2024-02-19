// 인덱스트 엑세스 타입

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}
