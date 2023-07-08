// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const display = document.querySelector('.display');

  
  let deg = 0;
  let zoneSize = 25.714; // deg
  


  // Counter clockwise
  const symbolSegments = {
    1: "Mystery Charm + Pick 2Pks Eng",
	2: "4Pks Battle Region Bundle",
	3: "VStar Universe + Shiny Star V",
	4: "Mystery Charm + Pick 2Pks Eng",
	5: "4pk Eng Paldea Evolved",
	6: "VMax Charm + Pick 2Pks JPN",
	7: "Nanoblock + Pick 1Pk JPN",
	8: "2Pks Battle Region + 25th Anniversary Pk",
	9: "Gachapon + Pick 2Pks ENG",
	10: "Pokeball Plush + 1Pk ENG",
	11: "4pk Eng Paldea Evolved",
	12: "VStar Universe + Violet",
	13: "VStar Universe + Scarlet",
	14: "4pk Eng Paldea Evolved",
  }

  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = symbolSegments[winningSymbolNr];
  }

  startButton.addEventListener('click', () => {
    // Reset display
    display.innerHTML = "-";
    // Disable button during spin
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    wheel.style.transition = 'all 5s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    // Calculate and display the winning symbol
    handleWin(actualDeg);
  });
})();
