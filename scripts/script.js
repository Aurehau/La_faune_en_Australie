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
        '#B3907B'
      ],
      hoverOffset: 40,
      borderWidth: 0
    }]
  };

  const plugin = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
      const {ctx} = chart;
      ctx.save();
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = options.color || '#99ffff';
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    }
  };

  const config = {
    type: 'pie',
    data: data,
    rotation : '200',
    options: {
      plugins: {
        customCanvasBackgroundColor: {
          color: 'rgba(255, 0, 0, 0)',
        },
        legend: {
          display: false,
          labels: {
              color: 'rgb(255, 99, 132)'
          }
        }
      }
    },
    plugins: [plugin]
  };

  
new Chart(ctx,config);

  new Chart(ctx2,config);