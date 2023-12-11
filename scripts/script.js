const ctx = document.getElementById('myChart');

const ctx2 = document.getElementById('myChart2');

  const data = {
    labels: [
      'Endémique',
      "Venu d'ailleurs"
    ],
    datasets: [{
      label: 'Pourcentage poisson et insect ',
      data: [90, 10],
      backgroundColor: [
        '#FFCD05',
        '#002858'
      ],
      hoverOffset: 20,
      borderColor: '#000',
      borderWidth: 6
    }]
  };

  const config = {
    type: 'pie',
    data: data,
    rotation : '200',
  };

  
new Chart(ctx,config);

  new Chart(ctx2,config);