const userInputSeconds = prompt("Введите количество секунд:");

function formatTime(userInputSeconds) {
  const hours = Math.floor(userInputSeconds / 3600);
  const minutes = Math.floor((userInputSeconds % 3600) / 60);
  const remainingSeconds = userInputSeconds % 60;

  // Форматируем с добавлением ведущих нулей, если необходимо

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

alert(`Время: ${formatTime(userInputSeconds)}`);
