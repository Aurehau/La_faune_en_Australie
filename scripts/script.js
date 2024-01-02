const régime=[
  {type:"Carnivores", part:10},
  {type:"Omnivores", part: 7},
  {type:"Herbivore", part:90}
  ];

//10 ; 4 ; espèces

function camembert(table) {
  let total= 0;
  let totalDegré= 0;
  let pourcentage= 0;
  let degré= 0;
  let code="";
  let coordonnéesABC=[0,0,100,100,0,0] ;
  let n = 0;
  let info ="";

  table.forEach((element) => 
  total+=element.part);

  table.forEach(function(element) { 
    pourcentage=(element.part*100)/total; 
    degré=(element.part*360)/total;

    n+=1;

    totalDegré+=degré;

    coordonnéesABC[0]=coordonnéesABC[4];
    coordonnéesABC[1]=coordonnéesABC[5];

    if((totalDegré>=0) && (totalDegré<=90)){
      coordonnéesABC[4]=(totalDegré*100)/90;
      coordonnéesABC[5]=0;

    } else if(totalDegré>90 && totalDegré<=180){
      coordonnéesABC[4]=100;
      coordonnéesABC[5]=((totalDegré-90)*100)/90;

    } else if(totalDegré>180 && totalDegré<=270){
      coordonnéesABC[4]=100-(((totalDegré-180)*100)/90);
      coordonnéesABC[5]=100;

    } else if(totalDegré>270 && totalDegré<=360){
      coordonnéesABC[4]=0;
      coordonnéesABC[5]=100-(((totalDegré-270)*100)/90);

    }

    if((coordonnéesABC[4]>0 && coordonnéesABC[5]==0)||(coordonnéesABC[4]==100 && coordonnéesABC[5]<100)){
      coordonnéesABC[2]=coordonnéesABC[4];
      coordonnéesABC[3]=coordonnéesABC[5];
    } else if((coordonnéesABC[0]>0 && coordonnéesABC[1]==100)||(coordonnéesABC[0]==0 && coordonnéesABC[1]>0)){
      coordonnéesABC[2]=coordonnéesABC[0];
      coordonnéesABC[3]=coordonnéesABC[1];
    } else{
      coordonnéesABC[2]=100;
      coordonnéesABC[3]=100;
    }

    code+=`<div style="--pointAX: ${coordonnéesABC[0]}%; --pointAY: ${coordonnéesABC[1]}%; --pointBX: ${coordonnéesABC[2]}%; --pointBY: ${coordonnéesABC[3]}%; --pointCX: ${coordonnéesABC[4]}%; --pointCY: ${coordonnéesABC[5]}%; " class="part part${n}" onmousemove="curseur(this)" ></div>`; 
    info+=`<div class='info info${n}'><div class='type'>${element.type}</div><div class='pourcentage'>${Math.round(pourcentage)}%</div><div class='nbespeces'><span class='nb'>${element.part}</span> espèces</div></div>`;
  });

  return code+`<div class='cursor' id="cursor">`+info+`</div>`;
}

document.querySelector(".marsupiales").innerHTML = camembert(régime);

const poisson_insect=[
  {type:"Endémique", part:90},
  {type:"Venu d'ailleurs", part: 10}
  ];

document.querySelector(".poisson_insect").innerHTML = camembert(poisson_insect);


const évolution_lapin=[
  {année: 1859, nb:24},
  {année: 1865, nb: 220000000},
  {année: 1950, nb: 600000000},
  {année: 1957, nb: 100000000},
  {année: 1967, nb: 100000000},
  {année: 1991, nb: 230000000},
  {année: 2023, nb: 300000000}
  ];


function graphique(table) {
  let année_min= table[0].année;
  let année_max= 0;
  let nb_max= 0;
  let degré= 0;
  let code="";
  let n = 0;
  let info ="";

  table.forEach(function(element){
    if(element.nb>nb_max){
      nb_max=element.nb;
    } 
    if(element.année>année_max){
      année_max=element.année;
    } 
    if(element.année<année_min){
      année_min=element.année;
    }   
  });
 
  année_min = Math.floor1O(année_min , 1);
  année_max = Math.ceil10(année_max , 1);
  nb_max = Math.ceil10(nb_max, decimale(nb_max));
}

function decimale(nbr){
  let compteur= 0;
  for ( ;nbr>10; ){
    compteur+=1;
    nbr=nbr/10;
  }
  return Math.pow(10, compteur);
}


console.log(decimale(18000));
console.log(Math.ceil(18000/ decimale(18000))*decimale(18000));