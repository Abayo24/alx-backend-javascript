/* eslint-disable linebreak-style */
export default function createIteratorObject(report) {
  let employees = [];
  for (const employee of Object.keys(report.allEmployees)) {
    employees = employees.concat(report.allEmployees.employee);
  }
  return employees;
}
