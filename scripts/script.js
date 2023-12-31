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
 