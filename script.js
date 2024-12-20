// Tugma va audio elementlarini olish
const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

// Tugmani bosganda audio ijro etish funksiyasi
playButton.addEventListener('click', () => {
  audioPlayer.play(); // Audio ijro etish
  playButton.style.display = 'none'; // Tugmani yashirish
});