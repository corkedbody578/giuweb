const toggleButton = document.getElementById("toggle-stats");
const statsSection = document.getElementById("estadisticas");

toggleButton.addEventListener("click", () => {
  if (statsSection.style.display === "none") {
    statsSection.style.display = "block";
  } else {
    statsSection.style.display = "none";
  }
});
// script.js

// Datos de ejemplo: Progresión de goles de Messi en la Champions
const data = {
    labels: [
      "2006", "2007", "2008", "2009", "2010", "2011", 
      "2012", "2013", "2014", "2015", "2016", "2017", 
      "2018", "2019", "2020", "2021", "2022", "2023"
    ],
    datasets: [{
      label: "Goles por Temporada",
      data: [1, 6, 9, 10, 12, 14, 8, 5, 10, 10, 11, 6, 12, 3, 4, 5, 7, 4],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2
    }]
  };
  
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      }
    },
  };
  
  const ctx = document.getElementById('chart').getContext('2d');
  new Chart(ctx, config);
  