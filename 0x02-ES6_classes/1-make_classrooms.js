import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classroom = [];
  const classroom1 = new ClassRoom(19);
  classroom.push(classroom1);

  const classroom2 = new ClassRoom(20);
  classroom.push(classroom2);

  const classroom3 = new ClassRoom(34);
  classroom.push(classroom3);

  return classroom;
}
