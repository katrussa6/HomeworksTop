const classrooms = [
  { name: "Аудитория 101", seats: 15, faculty: "Факультет информатики" },
  { name: "Кабинет 102", seats: 20, faculty: "Факультет математики" },
  { name: "Лаборатория 106", seats: 12, faculty: "Факультет физики" },
  { name: "Компьютерный зал 116", seats: 18, faculty: "Факультет информатики" },
  { name: "Лаборатория 105", seats: 10, faculty: "Факультет биологии" },
];

// 1. Функция для вывода всех аудиторий
function displayAllClassrooms() {
  let output = "<h2>Все аудитории:</h2>";
  classrooms.forEach((classroom) => {
    output += `<p>Название: ${classroom.name}, Мест: ${classroom.seats}, Факультет: ${classroom.faculty}</p>`;
  });
  document.getElementById("output").innerHTML += output;
}

//2. Функция для вывода аудиторий для указанного факультета
function displayClassroomsByFaculty(faculty) {
  let output = `<h2>Аудитории для факультета "${faculty}":</h2>`;
  const filteredClassrooms = classrooms.filter(
    (classroom) => classroom.faculty === faculty
  );
  if (filteredClassrooms.length === 0) {
    output += "<p>Нет аудиторий для данного факультета.</p>";
  } else {
    filteredClassrooms.forEach((classroom) => {
      output += `<p>Название: ${classroom.name}, Мест: ${classroom.seats}</p>`;
    });
  }
  document.getElementById("output").innerHTML += output;
}

// 3. Функция для вывода аудиторий, подходящих для группы
function displayClassroomsForGroup(group) {
  let output = `<h2>Аудитории для группы "${group.name}" (Студентов: ${group.students}):</h2>`;
  const suitableClassrooms = classrooms.filter(
    (classroom) =>
      classroom.seats >= group.students && classroom.faculty === group.faculty
  );
  if (suitableClassrooms.length === 0) {
    output += "<p>Нет подходящих аудиторий для данной группы.</p>";
  } else {
    suitableClassrooms.forEach((classroom) => {
      output += `<p>Название: ${classroom.name}, Мест: ${classroom.seats}</p>`;
    });
  }
  document.getElementById("output").innerHTML += output;
}

// Пример использования функций
displayAllClassrooms();
displayClassroomsByFaculty("Факультет информатики");

const group = {
  name: "Группа 1",
  students: 15,
  faculty: "Факультет информатики",
};
displayClassroomsForGroup(group);

const ClassroomSeatsSort = classrooms.sort(function (a, b) {
  if (a.seats > b.seats) {
    return 1;
  }
  if (a.seats < b.seats) {
    return -1;
  }
  // a должно быть равным b
  return 0;
});

console.log(ClassroomSeatsSort);

const classroomNameSort = classrooms.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a должно быть равным b
  return 0;
  
});
console.log(classroomNameSort)
