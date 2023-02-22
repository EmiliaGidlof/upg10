// Hämta referens till "theBox" elementet och alla länkar (a)
const theBox = document.querySelector('.theBox');
const links = document.querySelectorAll('.selectColor a');

// Kolla om det finns en tidigare färginställning sparad i LocalStorage
const storedColor = localStorage.getItem('boxColor');

if (storedColor) {
  // Om det finns en sparad färginställning, sätts "theBox" till den färgen
  theBox.classList.add(storedColor);
}

// Lägg till klickhändelselyssnare för varje länk (a ref)
links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Förhindra att länkarna laddar om eller tar dig till en ny sida
    const color = this.getAttribute('class'); // Hämta färgen från länkens klassattribut
    theBox.className = 'theBox ' + color; // Ändra "theBox"s klassattribut till inkludera den valda färgen
    localStorage.setItem('boxColor', color); // Spara den valda färgen till LocalStorage
  });
});







