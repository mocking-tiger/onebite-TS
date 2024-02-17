// 접근 제어자
// access modifier
// => public private protected
class Employee {
    // 필드
    name;
    age;
    position;
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    work() {
        console.log('일함');
    }
}
const employee = new Employee('이정환', 27, 'developer');
employee.name = '홍길동';
employee.age = 30;
employee.position = '일용직노동자';
console.log(employee);
export {};
