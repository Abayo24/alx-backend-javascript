const fs = require('fs').promises;

const countStudents = (path) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Read the file asynchronously
      const fileContent = await fs.readFile(path, 'utf-8');

      const fileLines = fileContent.trim().split('\n');

      if (fileLines.length < 2) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const studentGroups = {};
      const dbFieldNames = fileLines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      for (const line of fileLines.slice(1)) {
        if (line.trim() === '') continue; // Skip empty lines

        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }

        const studentEntries = studentPropNames
          .map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object
        .values(studentGroups)
        .reduce((pre, cur) => (pre || []).length + cur.length, 0);

      console.log(`Number of students: ${totalStudents}`);

      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }

      resolve();
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
};

module.exports = countStudents;