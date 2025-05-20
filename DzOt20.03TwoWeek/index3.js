function Time(hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
}

// Функция для вывода времени в формате HH:MM:SS
function displayTime(time) {
  const hh = String(time.hours).padStart(2, '0');
  const mm = String(time.minutes).padStart(2, '0');
  const ss = String(time.seconds).padStart(2, '0');
  console.log(`${hh}:${mm}:${ss}`);
}

// Вспомогательная функция для нормализации времени
function normalizeTime(time) {
  // Переводим всё в секунды
  let totalSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds;

  // Общее количество секунд в сутки
  const secondsInDay = 24 * 3600;

  // Округляем и берем по модулю для получения времени внутри суток
  totalSeconds = ((totalSeconds % secondsInDay) + secondsInDay) % secondsInDay;

  // Возвращаем часы, минуты и секунды
  time.hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  time.minutes = Math.floor(totalSeconds / 60);
  time.seconds = totalSeconds % 60;
}

// Функция изменения времени на переданное количество секунд
function changeTimeBySeconds(time, deltaSeconds) {
  let totalSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds;
  
  totalSeconds += deltaSeconds;

  // Нормализуем время внутри суток
  const secondsInDay = 24 * 3600;
  
  totalSeconds = ((totalSeconds % secondsInDay) + secondsInDay) % secondsInDay;

  time.hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  time.minutes = Math.floor(totalSeconds / 60);
  time.seconds = totalSeconds % 60;
}

// Функция изменения времени на переданное количество минут
function changeTimeByMinutes(time, deltaMinutes) {
    changeTimeBySeconds(time, deltaMinutes * 60);
}

// Функция изменения времени на переданное количество часов
function changeTimeByHours(time, deltaHours) {
    changeTimeBySeconds(time, deltaHours * 3600);
}


const myTime = new Time(20,30,45);
displayTime(myTime); // Выводит: "20:30:45"

changeTimeBySeconds(myTime,30); // Добавляем 30 секунд
displayTime(myTime); // "20:31:15"

changeTimeByMinutes(myTime,-45); // Убираем -45 минут (то есть вычитаем)
displayTime(myTime); // Время скорректируется

changeTimeByHours(myTime,5); // Добавляем еще часов
displayTime(myTime);