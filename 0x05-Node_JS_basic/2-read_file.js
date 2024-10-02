/* eslint-disable no-console */
const fs = require('fs');

function constStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    if (!data) {
      throw new Error('Cannot load the database');
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1);

    const fields = {};

    let totalStudents = 0;
    students.forEach((student) => {
      const details = student.split(',');

      if (details.length === headers.length) {
        totalStudents += 1;
        const firstName = details[0];
        const field = details[3];

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstName);
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const studentList = fields[field];
        console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
      }
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

module.exports = constStudents;
