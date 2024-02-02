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

const mammifères=[
  {type:"Endémique", part:336},
  {type:"Venu d'ailleurs", part: 50}
  ];

document.querySelector(".mammifères").innerHTML = camembert(mammifères);

const reptiles=[
  {type:"Endémique", part:853},
  {type:"Venu d'ailleurs", part: 64}
  ];

document.querySelector(".reptiles").innerHTML = camembert(reptiles);

const amphibiens=[
  {type:"Endémique", part:213},
  {type:"Venu d'ailleurs", part: 14}
  ];

document.querySelector(".amphibiens").innerHTML = camembert(amphibiens);

const serpent=[
  {type:"Non venimeux", part: 74},
  {type:"", part: 0},
  {type:"Venimeux", part:139}
  ];

document.querySelector(".serpent").innerHTML = camembert(serpent);


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
  let toutes_les_coordonnées=[];
  let point= '';
  let code="";
  let boule="";
  let icones="";


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
    point+=`L${((coordonnées[0]*1094)/100)+6} ${((coordonnées[1]*401)/100)}`;  // point de la courbe svg
    toutes_les_coordonnées.push({x:((coordonnées[0]*1094)/100),y:(((100-coordonnées[1])*401)/100)});
    boule+=`<div style=" left:${coordonnées[0]}%;  top:${coordonnées[1]}%"><div class='cursor' id="cursor"><div class='année'>${element.année}</div><div class='nblapin'>${ajout_espace(element.nb)} lapin</div></div></div>`
  });

  console.log(toutes_les_coordonnées);
  for ( let i=0 ; i <toutes_les_coordonnées.length-1; i++ ){   // attention au -1 qui peut tout casser
    if(toutes_les_coordonnées[i+1].y>toutes_les_coordonnées[i].y && 42<(toutes_les_coordonnées[i+1].y-toutes_les_coordonnées[i].y)){
        icones+=`    <svg  class="lapin" xmlns="http://www.w3.org/2000/svg" width="8vw" height="6.4vw" viewBox="0 0 312 249" fill="none" style="--angleL: ${angle(i,toutes_les_coordonnées)}deg; ${positionL(i,toutes_les_coordonnées)}"><path stroke="#FFCD05" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
        console.log(icones);
    }
    
  };



  let courbe = `<div class="population"><div>${grandNombre(nb_max)}</div> <div>${grandNombre(nb_max*0.75)}</div> <div>${grandNombre(nb_max*0.5)}</div> <div>${grandNombre(nb_max*0.25)}</div> <div>0</div></div>
                <div class="années"><div>${année_min}</div>  <div>${Math.round((année_min+(plage_année*0.2))/10)*10}</div> <div>${Math.round((année_min+(plage_année*0.4))/10)*10}</div> <div>${Math.round((année_min+(plage_année*0.6))/10)*10}</div> <div>${Math.round((année_min+(plage_année*0.8))/10)*10}</div>   <div>${année_max}</div></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="70vw" height="26.2vw" viewBox="0 0 1106 400" fill="none">
                  <path d="M6 401H6${point}"stroke="#FFCD05" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="icone">${icones}</div>
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

function ajout_espace(nbr){
  let affichage='';
  nb=String(nbr);
  for ( let i=0 ; i <nb.length; i++ ){
    if((i%3)==0){
      affichage+=" "+nb[i];
    }
    else{
      affichage+=nb[i];
    }
  }
  return affichage;
}


function angle(i,liste){
  let AC=liste[i+1].x - liste[i].x;        // C est un point qui prend la valeur X de B et la valeur y de A ce qui permet d'avoir un triangle rectangle en C pour calculer l'angle CÂB 
  let BC=(liste[i+1].y)-(liste[i].y);
  return 90-(Math.atan(AC/BC) * (180 / Math.PI));
}

function positionL(i,liste){
  let Dx= liste[i+1].x - ((liste[i+1].x - liste[i].x)/2); // D est le point au centre d'une droite pour positionner les icones
  let Dy= liste[i+1].y - ((liste[i+1].y - liste[i].y)/2);
  return ` left:${(Dx*100)/1094}%; top:${100-((Dy*100)/401)}%;`
}


/* animation Monomètre */


function gererApparition() {
  var rect = document.querySelector(".img_monomètres").getBoundingClientRect();

  // Vérifiez si l'élément est entièrement visible dans la fenêtre
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) {
    // Ajoutez la classe à l'élément
    document.querySelector(".img_monomètres").classList.add("img_monomètres_petit");
    document.querySelector(".monoAustralie>img").classList.add("monoAustralie_grand");
    document.querySelector(".monoAustralie2>img").classList.add("monoAustralie_grand");
  }
}

// Ajoutez un écouteur d'événements pour détecter le défilement de la page
window.addEventListener("scroll", gererApparition);

// Appelez la fonction une fois au chargement initial de la page
gererApparition();

document.querySelector(".mammifères>.cursor").innerHTML+="<div class='Nom_Animal chauve-sourisC'>Chauve souris géantes d'australie </div> <div class='Nom_Animal dingosC'> Dingos </div><div class='Nom_Animal dugongC'> Dugong </div><div class='Nom_Animal lion-de-merC'> Lion de mer australien </div>";
document.querySelector(".reptiles>.cursor").innerHTML+=" <div class='Nom_Animal crocodileC'> Crocodile de johnston </div> <div class='Nom_Animal lezardC'> Lézard à collerette </div> <div class='Nom_Animal taipanC'> Taipan du désert </div> <div class='Nom_Animal tortueC'> Tortue caouanne </div> <div class='Nom_Animal varanC'> Varanperenti </div>";
document.querySelector(".poisson_insect>.cursor").innerHTML+=" <div class='Nom_Animal guepeC'> Guêpe maçonne </div> <div class='Nom_Animal poissonC'> Poisson papillon </div> <div class='Nom_Animal PhyllopteryxC'> Phyllopteryx </div>";
document.querySelector(".amphibiens>.cursor").innerHTML+=" <div class='Nom_Animal rainetteC'> Rainette de white </div> ";
document.querySelector(".marsupiales>.cursor").innerHTML+=" <div class='Nom_Animal AcrobateC NomVert'> Acrobate pygmée </div>  <div class='Nom_Animal KoalaC NomVert'> Koala </div>   <div class='Nom_Animal quokkasC NomVert'> Quokkas </div>   <div class='Nom_Animal wallabyC NomVert'> Wallaby </div>   <div class='Nom_Animal KangourouC NomVert'> Kangourou </div>   <div class='Nom_Animal wombat_vombatusC NomVert'> Wombat vombatus ursinus </div>   <div class='Nom_Animal wambat_nez_poiluC NomVert'> Wambat à nez poilu du nord </div>   <div class='Nom_Animal Bandicoot_brun_sudC NomSable'> Bandicoot brun du sud </div>   <div class='Nom_Animal bandicoot_lapinC NomSable'> bandicoot lapin </div>   <div class='Nom_Animal bandicoot_rayé_estC NomSable'> Bandicoot rayé de l'est </div>   <div class='Nom_Animal chat_marsupialC NomJaune'> Chat marsupial moucheté </div>   <div class='Nom_Animal taupeC NomJaune'> Taupe marsupiale </div>   <div class='Nom_Animal tigre_de_tasmani2C NomJaune'> Tigre de tasmanie </div>    <div class='Nom_Animal diable_de_tasmanieC NomJaune'> Diable de tasmanie </div>";



document.querySelector(".graph").innerHTML += graphique(évolution_lapin);



