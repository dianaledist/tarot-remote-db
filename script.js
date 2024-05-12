document.addEventListener("DOMContentLoaded", function() {
    // URL de la API de tarot
    const apiUrl = "https://tarot-api-es.vercel.app/api/v1/cards/type/mayor";
  
    // Función para obtener una carta aleatoria del tarot
    function obtenerCartaAleatoria() {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // Seleccionar una carta aleatoria del conjunto de cartas devueltas por la API
          const randomIndex = Math.floor(Math.random() * data.cards.length);
          const randomCard = data.cards[randomIndex];
          
          // Mostrar la carta aleatoria en el HTML
          const output = document.getElementById("output");
          output.innerHTML = `
            <h2>${randomCard.name}</h2>
            <div class="card"><img src="${randomCard.image}" alt="${randomCard.name}"></div>
            <p>${randomCard.meaning_up}</p>
          `;
  
          // Mostrar la carta
          output.style.display = "flex";
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  
    // Generar una carta aleatoria al cargar la página
    obtenerCartaAleatoria();
  
    // Agregar evento de clic al botón de generación
    document.getElementById('generateButton').addEventListener('click', () => {
      obtenerCartaAleatoria();
    });
  });
  