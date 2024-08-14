//Task 7
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") {
    return 'Teaching Math';
  } else if (todayClass === "History") {
    return 'Teaching History';
  }
}