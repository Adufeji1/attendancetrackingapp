document.addEventListener('DOMContentLoaded', () => {
  const presentButtons = document.querySelectorAll('.present-btn');
  const absentButtons = document.querySelectorAll('.absent-btn');
  const excusedButtons = document.querySelectorAll('.excused-btn');
  
  const presentCount = document.getElementById('present-count');
  const absentCount = document.getElementById('absent-count');
  const excusedCount = document.getElementById('excused-count');
  
  presentButtons.forEach(button => {
    button.addEventListener('click', () => updateCount(presentCount));
  });
  
  absentButtons.forEach(button => {
    button.addEventListener('click', () => updateCount(absentCount));
  });
  
  excusedButtons.forEach(button => {
    button.addEventListener('click', () => updateCount(excusedCount));
  });
  
  function updateCount(element) {
    element.textContent = parseInt(element.textContent) + 1;
  }
});
