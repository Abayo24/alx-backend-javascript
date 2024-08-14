interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: true | false,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
