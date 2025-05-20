const car = {
  model: "Rio",
  manufacturer: "Kia",
  age: "2018",
  speed: "60",
};

function showCars() {
  const carElement = document.createElement("div");
  carElement.className = "car";

  //   const model = document.createElement("span");
  //   model.textContent = car.model;

  for (const property in car) {
    console.log(`${property}: ${car[property]}`);
    const item = document.createElement("div");
    item.textContent = `${property}: ${car[property]}`;
    carElement.appendChild(item);
  }
  document.body.append(carElement);
}
showCars();

function calculateTravelTime(distance, speed) {
  const timeWithoutBreaks = distance / speed;
  const breaksCount = Math.floor(timeWithoutBreaks / 4);
  const totalTime = timeWithoutBreaks + breaksCount;
  return totalTime;
}

function showTravelTime() {
  const decimalHours = calculateTravelTime(50, car.speed);
  const totalMinutes = decimalHours * 60;

  // Получаем целые минуты
  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);

  // Остаток секунд
  const seconds = Math.round((totalMinutes - hours * 60 - minutes) * 60);

  console.log(`Время: ${hours} часов, ${minutes} минут, ${seconds} секунд`);
  const totalTime = document.createElement("div");
  totalTime.textContent = `Общее время: ${hours} часов, ${minutes} минут, ${seconds} секунд`;
  document.body.append(totalTime);
}
showTravelTime();
