const ctx = document.getElementById('myChart');

const ctx2 = document.getElementById('myChart2');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        '#FFCD05',
        '#002858',
        '#FFCD05'
      ],
      hoverOffset: 4,
      borderColor: '#000',
      borderWidth: 6
    }]
  };

  const config = {
    type: 'pie',
    data: data,
  };

  new Chart(ctx2,config);