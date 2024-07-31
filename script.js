const face = document.querySelector(".face");
const h1s = face.querySelectorAll("h1");
const radius = face.offsetWidth / 2;
const secondHand = face.querySelector(".sec");
const minuteHand = face.querySelector(".min");
const hourHand = face.querySelector(".hour");

h1s.forEach((h1, index) => {
  const angle = (index / h1s.length) * 2 * Math.PI;
  const x = radius + (radius - 20) * Math.cos(angle);
  const y = radius + (radius - 20) * Math.sin(angle);

  h1.style.left = `${x}px`;
  h1.style.top = `${y}px`;
});

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setDate, 1000);
setDate();