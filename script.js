function updateDateTime() {
  const now = new Date();

  const hours = now.getHours();
  let greeting;
  if (hours >= 5 && hours < 12) {
    greeting = 'Доброе утро';
  } else if (hours >= 12 && hours < 18) {
    greeting = 'Добрый день';
  } else if (hours >= 18 && hours < 23) {
    greeting = 'Добрый вечер';
  } else {
    greeting = 'Доброй ночи';
  }

  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];
  const dayOfWeek = days[now.getDay()];

  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  const timeString = now.toLocaleTimeString('ru-RU', options);

  const nextYear = now.getFullYear() + 1;
  const newYear = new Date(nextYear, 0, 1);
  const daysUntilNewYear = Math.ceil((newYear - now) / (1000 * 60 * 60 * 24));

  document.getElementById('greeting').textContent = greeting;
  document.getElementById('date').textContent = `Сегодня: ${dayOfWeek}`;
  document.getElementById('time').textContent = `Текущее время: ${timeString}`;
  document.getElementById(
    'newYearCountdown',
  ).textContent = `До нового года осталось ${daysUntilNewYear} дней`;
}

function createElements() {
  const container = document.createElement('div');
  container.id = 'dateTimeContainer';

  const greeting = document.createElement('div');
  greeting.id = 'greeting';

  const date = document.createElement('div');
  date.id = 'date';

  const time = document.createElement('div');
  time.id = 'time';

  const newYearCountdown = document.createElement('div');
  newYearCountdown.id = 'newYearCountdown';

  container.appendChild(greeting);
  container.appendChild(date);
  container.appendChild(time);
  container.appendChild(newYearCountdown);

  document.body.appendChild(container);
}

createElements();
updateDateTime();
setInterval(updateDateTime, 1000);
