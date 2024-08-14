//Task1
interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: true | false,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any;
}

//Task2
interface Directors extends Teacher {
  numberOfReports: number,
}

//Task 3
interface printTeacherFunction {
  (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`
}

//Task4
interface studentClass {
  firstName: string;
  lastName:string;
}

class StudentClass {
  firstName: string;
  lastName: string;

  constructor({firstName, lastName}: studentClass) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework = (): string => "Currently working";

  displayName = (): string => `${this.firstName}`
}

//Task 5
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getToWork(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

//Task 6
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return (employee as Teacher).workTeacherTasks();
  }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
