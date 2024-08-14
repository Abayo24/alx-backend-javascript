interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Kenya"
};

const student2: Student = {
  firstName: "Ann",
  lastName: "Doey",
  age: 22,
  location: "Canada"
};

const studentList: Student[] = [student1, student2];

