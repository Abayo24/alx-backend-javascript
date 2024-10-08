export default function getListStudentIds(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) {
    return [];
  }
  const arrayOfIds = arrayOfObjects.map((student) => student.id);
  return arrayOfIds;
}
