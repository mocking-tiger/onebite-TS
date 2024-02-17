// 접근 제어자
// access modifier
// => public private protected

class Employee {
  // 필드

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string,
  ) {}

  // 메서드
  work() {
    console.log('일함');
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number,
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.name; // private은 파생클래스에서도 접근X (protected는 O)
  }
}

const employee = new Employee('이정환', 27, 'developer');
// employee.name = '홍길동';
// employee.age = 30;
employee.position = '일용직노동자';

console.log(employee);
