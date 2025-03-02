function setInnerTextByIdWithValue(id, value) {
  const setInnerValue = (document.getElementById(id).innerText = value);
}

function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseInt(value);
  return convertedValue;
}
