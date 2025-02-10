const start = {
  x: 0,
  y: 100,
};

const end = {
  x: 500,
  y: 500,
};

let animationId = null; // Переменная для хранения ID анимации

const animate = (item, coords) => {
  if (animationId) {
    cancelAnimationFrame(animationId); // Отменяем предыдущую анимацию
  }

  const step = () => {
    const currCoords = {
      x: parseInt(item.style.left, 10),
      y: parseInt(item.style.top, 10),
    };

    // Если координаты совпали, завершаем анимацию
    if (
      Math.abs(currCoords.x - coords.x) <= 1 &&
      Math.abs(currCoords.y - coords.y) <= 1
    ) {
      item.style.left = `${coords.x}px`;
      item.style.top = `${coords.y}px`;
      animationId = null;
      return;
    }

    // Вычисляем направление движения
    const speed = 2; // Скорость движения (можно изменить)
    const newX = currCoords.x + Math.sign(coords.x - currCoords.x) * speed;
    const newY = currCoords.y + Math.sign(coords.y - currCoords.y) * speed;

    item.style.left = `${newX}px`;
    item.style.top = `${newY}px`;

    animationId = requestAnimationFrame(step);
  };

  animationId = requestAnimationFrame(step);
};

const createElement = (tag, textContent) => {
  const element = document.createElement(tag);
  element.textContent = textContent;
  return element;
};

const div = document.createElement('div');
div.classList.add('box');
div.style = `position: absolute; top: ${start.y}px; left: ${start.x}px; width: 100px; height: 100px; background-color: red;`;

const startBtn = createElement('button', 'Start');
startBtn.onclick = () => animate(div, end);

const endBtn = createElement('button', 'End');
endBtn.onclick = () => cancelAnimationFrame(animationId);

const resetBtn = createElement('button', 'Reset');
resetBtn.onclick = () => {
  div.style.left = `${start.x}px`;
  div.style.top = `${start.y}px`;
  cancelAnimationFrame(animationId);
};

document.body.append(endBtn);
document.body.append(startBtn);
document.body.append(resetBtn);
document.body.append(div);
