const régime=[
  {type:"carnivores", part:10},
  {type:"omnivores", part: 7},
  {type:"herbivore", part:90}
  ];

//10 ; 4 ; espèces


function camembert(table) {
  let total= 0;
  let pourcentage= 0;
  let degré= 0;
  let code="";

  table.forEach((element) => 
  total+=element.part);

  table.forEach((element) => 
  pourcentage=(element.part*100)/total;
  degré=(element.part*100)/total;
  code+='<div style="--pointAX: 0%; --pointAY: 0%; --pointBX: 100%; --pointBY: 100%; --pointCX: 100%; --pointCY: 100%; " class="part1" ></div>';
  );

  return table;
}

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

 