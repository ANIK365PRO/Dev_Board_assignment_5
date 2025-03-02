function setInnerTextByIdWithValue(id, value) {
  const setInnerValue = (document.getElementById(id).innerText = value);
}

function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseInt(value);
  return convertedValue;
}

//** update history box **//
function historyBoxContainer(id) {
  const historyBox = document.getElementById('history_box');

  //** update current date **//
  let now = new Date();
  const currentTime = now.toLocaleTimeString();

  const p = document.createElement('p');

  p.classList.add('bg-[#F4F7FF]', 'font-normal', 'p-3', 'rounded-lg');

  p.innerText = ` You have Complete The Task Add Dark Mode at ${currentTime}.`;
  historyBox.appendChild(p);
}
function getDate(id) {
  let newDay = new Date();
  let dayName = newDay.toLocaleString('en-US', { weekday: 'long' });
  let day = newDay.getDate();
  let monthName = newDay.toLocaleString('en-US', { month: 'long' });
  let year = newDay.getFullYear();

  let dayMonthYear = `${monthName} ${day} ${year}`;

  document.getElementById('updateDay').innerText = dayName + ', ';
  document.getElementById(id).innerText = dayMonthYear;
}
getDate('dateUpdate');
