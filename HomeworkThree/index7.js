const userInputHours = prompt("Введите количество часов:");
const userInputMinutes = prompt("Введите количество минут:");
const userInputSeconds = prompt("Введите количество секунд:");

function formatTime(userInputHours, userInputMinutes, userInputSeconds) {

  // Убедимся, что часы, минуты и секунды являются неотрицательными числами

  if (userInputHours < 0 || userInputMinutes < 0 || userInputSeconds < 0) {
    return "Время не может быть отрицательным.";
  }

  // Форматируем время с ведущими нулями

  const formattedTime =
    String(userInputHours).padStart(2, "0") + ":" +
    String(userInputMinutes).padStart(2, "0") + ":" +
    String(userInputSeconds).padStart(2, "0");

  return formattedTime;
}

alert(
  `Время: ${formatTime(userInputHours, userInputMinutes, userInputSeconds)}`
);
