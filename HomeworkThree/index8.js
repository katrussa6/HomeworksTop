const userInputHours = prompt("Введите количество часов:");
const userInputMinutes = prompt("Введите количество минут:");
const userInputSeconds = prompt("Введите количество секунд:");

function formatTime(userInputHours, userInputMinutes, userInputSeconds) {

  // Убедимся, что часы, минуты и секунды являются неотрицательными числами

  if (userInputHours < 0 || userInputMinutes < 0 || userInputSeconds < 0) {
    return "Время не может быть отрицательным.";
  }
  return userInputHours * 3600 + userInputMinutes * 60 + userInputSeconds;
}

alert(
  `Время в секундах: ${formatTime(userInputHours,userInputMinutes,userInputSeconds)}`);
