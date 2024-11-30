// script.js
document.addEventListener("DOMContentLoaded", function () {
  const lines = document.querySelectorAll('.line');
  let currentLine = 0;

  const timing = [
    4000, // Waktu untuk "Hai sayangg" - 4 detik
    4000, // Waktu untuk "Lagi apaa kamuuu" - 4 detik
    6000  // Waktu untuk "Apapun yang kamu lakukan sekarang..." - 6 detik
  ];

  function showNextLine() {
    if (currentLine < lines.length) {
      lines[currentLine].classList.add('show');
      setTimeout(() => {
        currentLine++;
        showNextLine();
      }, timing[currentLine]);
    }
  }

  showNextLine(); // Mulai menampilkan lirik
});
