function showItem(item) {
  const el = document.getElementById(item).style.display;

  let display = 'none';

  if (el !== 'flex') {
    display = 'flex';
  }

  document.getElementById(item).style.display = display;
}