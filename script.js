const flags = [
  { country: 'Polska', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg' },
  { country: 'Niemcy', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg' },
  { country: 'Francja', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg' },
  { country: 'Wielka Brytania', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom.svg' }, 
  { country: 'Węgry', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Hungary.svg' },
  { country: 'Estonia', flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Estonia.svg' },
  // Dodaj więcej flag tutaj
];

let currentFlagIndex = 0;
let currentFlag = flags[currentFlagIndex];

function loadFlag() {
  const flagContainer = document.getElementById('flag-container');
  flagContainer.innerHTML = `<img src="${currentFlag.flagUrl}" alt="Flaga" style="width: 100px; height: auto;">`;
}

document.getElementById('submit-answer').addEventListener('click', function () {
  const answer = document.getElementById('answer').value.trim().toLowerCase();
  const message = document.getElementById('message');
  
  if (answer === currentFlag.country.toLowerCase()) {
    message.textContent = 'Brawo! Odgadłeś flagę.';
    message.style.color = 'green';
    setTimeout(nextFlag, 2000);  // Przejdź do następnej flagi po 2 sekundach
  } else {
    message.textContent = 'Spróbuj ponownie!';
    message.style.color = 'red';
  }
});

function nextFlag() {
  currentFlagIndex = (currentFlagIndex + 1) % flags.length;
  currentFlag = flags[currentFlagIndex];
  document.getElementById('answer').value = '';
  document.getElementById('message').textContent = '';
  loadFlag();
}

loadFlag();
