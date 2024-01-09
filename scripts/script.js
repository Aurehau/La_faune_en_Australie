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
  {année: 1865, nb: 22000000},
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
  let coordonnées=[0,0] ;
  let point= '';
  let code="";
  let boule="";
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
 
  let plage_année=année_max-année_min;
  nb_max = Math.ceil(nb_max / decimale(nb_max)*decimale(nb_max));

  table.forEach(function(element){
    coordonnées[0]=((element.année-année_min)*100)/plage_année;
    coordonnées[1]=100-((element.nb*100)/nb_max);
    code+=`<div class='point' style="--axe_anné:${coordonnées[0]}%; --axe_nb:${coordonnées[1]}%;></div>`;
    point+=`L${((coordonnées[0]*1094)/100)+6} ${((coordonnées[1]*401)/100)}`;
    boule+=`<div style=" left:${coordonnées[0]}%;  top:${coordonnées[1]}%"></div>`
  });

  let courbe = `<div class="population"><div>${grandNombre(nb_max)}</div> <div>${grandNombre(nb_max*0.75)}</div> <div>${grandNombre(nb_max*0.5)}</div> <div>${grandNombre(nb_max*0.25)}</div> <div>0</div></div>
                <div class="années"><div>${année_min}</div>  <div>${Math.round((année_min+(plage_année*0.2))/10)*10}</div> <div>${Math.round((année_min+(plage_année*0.4))/10)*10}</div> <div>${Math.round((année_min+(plage_année*0.6))/10)*10}</div> <div>${Math.round((année_min+(plage_année*0.8))/10)*10}</div>   <div>${année_max}</div></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="70vw" height=25vw" viewBox="0 0 1106 400" fill="none">
                  <path d="M6 401H6${point}"stroke="#FFCD05" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="points">${boule}</div>`;
  return courbe;

}

function decimale(nbr){
  let compteur= 0;
  for ( ;nbr>10; ){
    compteur+=1;
    nbr=nbr/10;
  }
  return Math.pow(10, compteur);
}

function grandNombre(nbr){
  if(decimale(nbr)>100000000){
    return nbr/1000000000+' B';
  }
  else if(decimale(nbr)>100000){
    return nbr/1000000+' M';
  }
  else if(decimale(nbr)>100){
    return nbr/1000+' k';
  }
}


document.querySelector(".graph").innerHTML += graphique(évolution_lapin);
console.log(graphique(évolution_lapin));
console.log(decimale(500005890));
console.log(Math.ceil(500005890/ decimale(500005890))*decimale(500005890));