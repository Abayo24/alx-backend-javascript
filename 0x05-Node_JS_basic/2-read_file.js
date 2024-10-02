const fs = require('fs');

function constStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    // Split the file content by new lines and remove any empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const headers = lines[0].split(',');
    const students = lines.slice(1);

    const fields = {};

    students.forEach((student) => {
      const details = student.split(',');

      if (details.length === headers.length) {
        const firstName = details[0];
        const field = details[3];

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstName);
      }
    });

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    for (const field in fields) {
      const studentList = fields[field];
      console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
