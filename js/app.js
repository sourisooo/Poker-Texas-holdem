

let visueldé = document.createElement('div');
visueldé.classList.add("dice");

let boxcard = document.createElement('div');
boxcard.style.display = "flex";
boxcard.style.flexWrap = "wrap";
boxcard.style.justifyContent = 'center';
boxcard.setAttribute('id', "playercardbox");
document.querySelector('#player').append(boxcard);

console.log(visueldé);
console.log(document.querySelector('#player'));

let adv = document.createElement('div');
adv.classList.add("board");
adv.setAttribute('id','dealer');
document.querySelector('#app').append(adv);

let pot = document.createElement('output');
pot.setAttribute('id','pot');
pot.textContent = "pot:";
document.querySelector('#dealer').append(pot);


let playerz = '#player';
let adversaire = '#dealer';
let box = '#boxui';
const deck = [];
const throwcard = [];
let turn = 0;
const yourenemy = [];
let potvalue=0;
let gameover=false;
let hide = '';
let reveal ='';
let savethetarget="";
let deckgame = [];
let nboppo = 0;



class Card {

    constructor(number,color,figure,positionX,index){

        this.number = number ;
        this.color = color;
        this.figure = figure;
        this.image = fulldeck;
        this.positionX = positionX;
        this.index = index;
  

    }

};


class Player {

    constructor(){

        this.name="player";
        this.money=1000;

    }

    getpot(potvalue){

        this.money= this.money+potvalue;
  

    }


}


class Enemy {

    constructor(name,id){

        this.name=name;
        this.money=1000;
        this.id=id;
 
    }

    allin(){

        this.money=0;
        return this.money;

    }


    double(){

        this.money=this.money-200;
        return this.money;

    }

    suivre(){

        this.money=this.money-100;
        return this.money;

    }

    coucher(){

        alert("adversaire "+this.name+"has coucher!")
        return this.money;


    }

    hidecard(){

        // console.log(this.id,this.id+"cards");

        // console.log(document.querySelector('#dealer1'));

        // console.log(document.querySelector('#dealer1card.dice'));

        // console.log(document.querySelector(this.id+"cards"));

      hide = document.querySelector(this.id+"cards"+0) ;

      hide.style.display = 'none';

      hide = document.querySelector(this.id+"cards"+1) ;

      hide.style.display = 'none';

        return hide;

    }

    revealcard(){

     

        reveal = document.querySelector(this.id+"cards"+0);

        reveal.style.display  = '';

        reveal = document.querySelector(this.id+"cards"+1);

        reveal.style.display  = '';

        return reveal;

    }

    getpot(potvalue){

        this.money= this.money+potvalue;


    }

}



function initUI(adversaire,box){

    const output = document.createElement('output');
    output.textContent = "1000";
    output.style.marginTop = '1em';
    output.style.border = "solid";
    output.style.padding = "1em";
    output.setAttribute('id',adversaire+'output');
  

    const coucher = document.createElement('buttom');
    coucher.textContent = "coucher";
    coucher.style.marginTop = '1em';
    coucher.style.border = "solid";
    coucher.style.padding = "1em";
    coucher.setAttribute('id',adversaire+'coucher');
  
    
    const suivre = document.createElement('buttom');
    suivre.textContent = "suivre";
    suivre.style.marginTop = '1em';
    suivre.style.border = "solid";
    suivre.style.padding = "1em";
    suivre.setAttribute('id',adversaire+'suivre');

    
    const relancer = document.createElement('buttom');
    relancer.textContent = "relancer";
    relancer.style.marginTop = '1em';
    relancer.style.border = "solid";
    relancer.style.padding = "1em";
    relancer.setAttribute('id',adversaire+'relancer');

    
    const allin = document.createElement('buttom');
    allin.textContent = "allin";
    allin.style.marginTop = '1em';
    allin.style.border = "solid";
    allin.style.padding = "1em";
    allin.setAttribute('id',adversaire+'allin');

    const claimpot = document.createElement('buttom');
    claimpot.textContent = "claimpot";
    claimpot.style.marginTop = '1em';
    claimpot.style.border = "solid";
    claimpot.style.padding = "1em";
    claimpot.setAttribute('id',adversaire+'claimpot');

    const boxcard = document.createElement('div');
    boxcard.style.display = "flex";
    boxcard.style.flexWrap = "wrap";
    boxcard.style.justifyContent = 'center';
    boxcard.setAttribute('id',adversaire+"cardbox");

    const boxui = document.createElement('div');
    boxui.style.display = "flex";
    boxui.style.flexWrap = "wrap";
    boxui.style.justifyContent = 'center';
    boxui.setAttribute('id',box.replace('#', ''));

    console.log(adversaire);
    console.log( document.querySelector(adversaire));
    console.log(box,box.replace('#', ''));
    
    document.querySelector(adversaire).append(boxcard);
    document.querySelector(adversaire).append(boxui);
    document.querySelector(box).append(output);
    document.querySelector(box).append(coucher);
    document.querySelector(box).append(suivre);
    document.querySelector(box).append(relancer);
    document.querySelector(box).append(allin);
    document.querySelector(box).append(claimpot);

console.log(boxcard);

}


function init (){

let delay = -68;

const c2CO = new Card(2,"red","coeur","0px",1);
const c2CA = new Card(2,"red","carreau", delay+"px",2);
const c2PI = new Card(2,"black","pique", 2*delay+"px",3);
const c2TR = new Card(2,"black","trefle", 3*delay+"px",4);

deck.push(c2CO,c2CA,c2PI,c2TR);

const c3CO = new Card(3,"red","coeur", 4*delay+"px",5);
const c3CA = new Card(3,"red","carreau", 5*delay+"px",6);
const c3PI = new Card(3,"black","pique", 6*delay+"px",7);
const c3TR = new Card(3,"black","trefle", 7*delay+"px",8);

deck.push(c3CO,c3CA,c3PI,c3TR);

const c4CO = new Card(4,"red","coeur", 8*delay+"px",9);
const c4CA = new Card(4,"red","carreau", 9*delay+"px",10);
const c4PI = new Card(4,"black","pique", 10*delay+"px",11);
const c4TR = new Card(4,"black","trefle", 11*delay+"px",12);

deck.push(c4CO,c4CA,c4PI,c4TR);

const c5CO = new Card(5,"red","coeur", 12*delay+"px",13);
const c5CA = new Card(5,"red","carreau", 13*delay+"px",14);
const c5PI = new Card(5,"black","pique", 14*delay+"px",15);
const c5TR = new Card(5,"black","trefle", 15*delay+"px",16);

deck.push(c5CO,c5CA,c5PI,c5TR);

const c6CO = new Card(6,"red","coeur", 16*delay+"px",17);
const c6CA = new Card(6,"red","carreau", 17*delay+"px",18);
const c6PI = new Card(6,"black","pique", 18*delay+"px",19);
const c6TR = new Card(6,"black","trefle", 19*delay+"px",20);

deck.push(c6CO,c6CA,c6PI,c6TR);

const c7CO = new Card(7,"red","coeur", 20*delay+"px",21);
const c7CA = new Card(7,"red","carreau", 21*delay+"px",22);
const c7PI = new Card(7,"black","pique", 22*delay+"px",23);
const c7TR = new Card(7,"black","trefle", 23*delay+"px",24);

deck.push(c7CO,c7CA,c7PI,c7TR);

const c8CO = new Card(8,"red","coeur", 24*delay+"px",25);
const c8CA = new Card(8,"red","carreau", 25*delay+"px",26);
const c8PI = new Card(8,"black","pique", 26*delay+"px",27);
const c8TR = new Card(8,"black","trefle", 27*delay+"px",28);

deck.push(c8CO,c8CA,c8PI,c8TR);

const c9CO = new Card(9,"red","coeur", 28*delay+"px",29);
const c9CA = new Card(9,"red","carreau", 29*delay+"px",30);
const c9PI = new Card(9,"black","pique", 30*delay+"px",31);
const c9TR = new Card(9,"black","trefle", 31*delay+"px",32);

deck.push(c9CO,c9CA,c9PI,c9TR);

const c10CO = new Card(10,"red","coeur", 32*delay+"px",33);
const c10CA = new Card(10,"red","carreau", 33*delay+"px",34);
const c10PI = new Card(10,"black","pique", 34*delay+"px",35);
const c10TR = new Card(10,"black","trefle", 35*delay+"px",36);

deck.push(c10CO,c10CA,c10PI,c10TR);

const c14CO = new Card(14,"red","coeur", 36*delay+"px",37);
const c14CA = new Card(14,"red","carreau", 37*delay+"px",38);
const c14PI = new Card(14,"black","pique", 38*delay+"px",39);
const c14TR = new Card(14,"black","trefle", 39*delay+"px",40);

deck.push(c14CO,c14CA,c14PI,c14TR);

const c11CO = new Card(11,"red","coeur", 40*delay+"px",41);
const c11CA = new Card(11,"red","carreau", 41*delay+"px",42);
const c11PI = new Card(11,"black","pique", 42*delay+"px",43);
const c11TR = new Card(11,"black","trefle", 43*delay+"px",44);

deck.push(c11CO,c11CA,c11PI,c11TR);

const c12CO = new Card(12,"red","coeur", 44*delay+"px",45);
const c12CA = new Card(12,"red","carreau", 45*delay+"px",46);
const c12PI = new Card(12,"black","pique", 46*delay+"px",47);
const c12TR = new Card(12,"black","trefle", 47*delay+"px",48);

deck.push(c12CO,c12CA,c12PI,c12TR);

const c13CO = new Card(13,"red","coeur", 48*delay+"px",49);
const c13CA = new Card(13,"red","carreau", 49*delay+"px",50);
const c13PI = new Card(13,"black","pique", 50*delay+"px",51);
const c13TR = new Card(13,"black","trefle", 51*delay+"px",52);

deck.push(c13CO,c13CA,c13PI,c13TR);

}


init();
console.log(deck);



function random(){

    lancer = Math.floor(Math.random()*(deck.length)+1);

while (throwcard.includes(lancer)) {lancer = Math.floor(Math.random()*(deck.length)+1)}
 
console.log(throwcard);

// console.log(lancer);

return lancer;
}


function ask(playerz,adversaire){


nbj = prompt("Combien d'opposant voulez-vous jouer? (min 1, max 10)");
nboppo=nbj;
nbde = 2;

eco(nbde,playerz);   
box = '#boxui';
initUI(playerz,box);

nbde = 3;
adversaire= '#dealer'; // river, card in the center

let boxcard = document.createElement('div');
boxcard.style.display = "flex";
boxcard.style.flexWrap = "wrap";
boxcard.style.justifyContent = 'center';
boxcard.setAttribute('id', "dealercardbox");
document.querySelector('#dealer').append(boxcard);

eco(nbde,adversaire);// river, card in the center

for (let compt = 0; compt<nbj; compt++){


    const adv = document.createElement('div');
    adv.classList.add("board");
    adv.setAttribute('id','dealer'+compt);
    document.querySelector('#app').append(adv);
    adversaire= '#dealer'+compt;
    nbde = 2;
    box = '#boxui'+compt;

    let boxcard = document.createElement('div');
    boxcard.style.display = "flex";
    boxcard.style.flexWrap = "wrap";
    boxcard.style.justifyContent = 'center';
    boxcard.setAttribute('id', "dealer"+compt+"cardbox");
    document.querySelector(adversaire).append(boxcard);


    eco(nbde,adversaire);
    initUI(adversaire,box);
    let enemtemp = "enemy"+compt;
    const enem = new Enemy(enemtemp,'#dealer'+compt);
    yourenemy.push(enem);

    yourenemy.forEach(e => e.hidecard());

}


return nbde; 

}


function eco (nbde,playerz,adversaire) {


for (let compt=0; compt<nbde; compt++) {

     let visueldé = document.createElement('div');
    
    visueldé.classList.add("dice");

    visueldé.setAttribute('id',playerz.substring(1)+"cards"+compt)

    deckgame.push(visueldé);

    // console.log(player,adversaire);

    console.log(playerz);

    console.log(document.querySelector(playerz+"cardbox"));

    document.querySelector(playerz+"cardbox").append(visueldé);

    let delay = -68;


    switch (random()) {

        case 1: visueldé.style.backgroundPositionX = '0px';throwcard.push(lancer);
            
            break;
    
            case 2: visueldé.style.backgroundPositionX = 1*delay+'px';throwcard.push(lancer);
            
            break;
        
            case 3: visueldé.style.backgroundPositionX = 2*delay+'px';throwcard.push(lancer);
            
            break;

            case 4: visueldé.style.backgroundPositionX = 3*delay+'px';throwcard.push(lancer);
            
            break;

            case 5: visueldé.style.backgroundPositionX = 4*delay+'px';throwcard.push(lancer);
            
            break;

            case 6: visueldé.style.backgroundPositionX = 5*delay+'px';throwcard.push(lancer);
            
            break;

            case 7: visueldé.style.backgroundPositionX = 6*delay+'px';throwcard.push(lancer);
            
            break;

            case 8: visueldé.style.backgroundPositionX = 7*delay+'px';throwcard.push(lancer);
            
            break;

            case 9: visueldé.style.backgroundPositionX = 8*delay+'px';throwcard.push(lancer);
            
            break;

            case 10: visueldé.style.backgroundPositionX = 9*delay+'px';throwcard.push(lancer);
            
            break;

            case 11: visueldé.style.backgroundPositionX = 10*delay+'px';throwcard.push(lancer);
            
            break;

            case 12: visueldé.style.backgroundPositionX = 11*delay+'px';throwcard.push(lancer);
            
            break;

            case 13: visueldé.style.backgroundPositionX = 12*delay+'px';throwcard.push(lancer);
            
            break;

            case 14: visueldé.style.backgroundPositionX = 13*delay+'px';throwcard.push(lancer);
            
            break;

            case 15: visueldé.style.backgroundPositionX = 14*delay+'px';throwcard.push(lancer);
            
            break;

            case 16: visueldé.style.backgroundPositionX = 15*delay+'px';throwcard.push(lancer);
            
            break;

            case 17: visueldé.style.backgroundPositionX = 16*delay+'px';throwcard.push(lancer);
            
            break;

            case 18: visueldé.style.backgroundPositionX = 17*delay+'px';throwcard.push(lancer);
            
            break;

            case 19: visueldé.style.backgroundPositionX = 18*delay+'px';throwcard.push(lancer);
            
            break;

            case 20: visueldé.style.backgroundPositionX = 19*delay+'px';throwcard.push(lancer);
            
            break;

            case 21: visueldé.style.backgroundPositionX = 20*delay+'px';throwcard.push(lancer);
            
            break;

            case 22: visueldé.style.backgroundPositionX = 21*delay+'px';throwcard.push(lancer);
            
            break;

            case 23: visueldé.style.backgroundPositionX = 22*delay+'px';throwcard.push(lancer);
            
            break;

            case 24: visueldé.style.backgroundPositionX = 23*delay+'px';throwcard.push(lancer);
            
            break;

            case 25: visueldé.style.backgroundPositionX = 24*delay+'px';throwcard.push(lancer);
            
            break;

            case 26: visueldé.style.backgroundPositionX = 25*delay+'px';throwcard.push(lancer);
            
            break;

            case 27: visueldé.style.backgroundPositionX = 26*delay+'px';throwcard.push(lancer);
            
            break;

            case 28: visueldé.style.backgroundPositionX = 27*delay+'px';throwcard.push(lancer);
            
            break;

            case 29: visueldé.style.backgroundPositionX = 28*delay+'px';throwcard.push(lancer);
            
            break;

            case 30: visueldé.style.backgroundPositionX = 29*delay+'px';throwcard.push(lancer);
            
            break;

            case 31: visueldé.style.backgroundPositionX = 30*delay+'px';throwcard.push(lancer);
            
            break;

            case 32: visueldé.style.backgroundPositionX = 31*delay+'px';throwcard.push(lancer);
            
            break;

            case 33: visueldé.style.backgroundPositionX = 32*delay+'px';throwcard.push(lancer);
            
            break;

            case 34: visueldé.style.backgroundPositionX = 33*delay+'px';throwcard.push(lancer);
            
            break;

            case 35: visueldé.style.backgroundPositionX = 34*delay+'px';throwcard.push(lancer);
            
            break;

            case 36: visueldé.style.backgroundPositionX = 35*delay+'px';throwcard.push(lancer);
            
            break;

            case 37: visueldé.style.backgroundPositionX = 36*delay+'px';throwcard.push(lancer);
            
            break;

            case 38: visueldé.style.backgroundPositionX = 37*delay+'px';throwcard.push(lancer);
            
            break;

            case 39: visueldé.style.backgroundPositionX = 38*delay+'px';throwcard.push(lancer);
            
            break;

            case 40: visueldé.style.backgroundPositionX = 39*delay+'px';throwcard.push(lancer);
            
            break;

            case 41: visueldé.style.backgroundPositionX = 40*delay+'px';throwcard.push(lancer);
            
            break;

            case 42: visueldé.style.backgroundPositionX = 41*delay+'px';throwcard.push(lancer);
            
            break;
 
            case 43: visueldé.style.backgroundPositionX = 42*delay+'px';throwcard.push(lancer);
            
            break;

            case 44: visueldé.style.backgroundPositionX = 43*delay+'px';throwcard.push(lancer);
            
            break;

            case 45: visueldé.style.backgroundPositionX = 44*delay+'px';throwcard.push(lancer);
            
            break;

            case 46: visueldé.style.backgroundPositionX = 45*delay+'px';throwcard.push(lancer);
            
            break;

            case 47: visueldé.style.backgroundPositionX = 46*delay+'px';throwcard.push(lancer);
            
            break;

            case 48: visueldé.style.backgroundPositionX = 47*delay+'px';throwcard.push(lancer);
            
            break;

            case 49: visueldé.style.backgroundPositionX = 48*delay+'px';throwcard.push(lancer);
            
            break;

            case 50: visueldé.style.backgroundPositionX = 49*delay+'px';throwcard.push(lancer);
            
            break;

            case 51: visueldé.style.backgroundPositionX = 50*delay+'px';throwcard.push(lancer);
            
            break;

            case 52: visueldé.style.backgroundPositionX = 51*delay+'px';throwcard.push(lancer);
            
            break;
            
        default:visueldé.style.backgroundColor = 'black';
            break;
    }

        console.log(deck.length);

}

return visueldé;


}


function game () {

    // adbehavior();
    console.log(player.money);
    let turn =0;
    

    if (turn<3){

        console.log(turn);

    document.addEventListener('click', e => {

        savethetarget = e.target.id.replace("#","").replace("claimpot","");

        switch (e.target.id) {
            case '#playercoucher': alert("coucher, you lose this game");checkturn();if(gameover!=true){adbehavior();pot.textContent=potvalue};
                
                break;
                
                case '#playersuivre': checkturn();if(gameover!=true){alert("JOUEUR suivre");adbehavior(); eco(1,adversaire);potvalue=potvalue+100;player.money=player.money-100;let mod = document.getElementById('#player'+"output");mod.textContent=player.money;pot.textContent=potvalue};
                break;
        
                case '#playerrelancer': checkturn();if(gameover!=true){alert("JOUEUR relancer");adbehavior();eco(1,adversaire);potvalue=potvalue+200;player.money=player.money-200;let mod2 = document.getElementById('#player'+"output");mod2.textContent=player.money;pot.textContent=potvalue};
                
                break;
        
                case '#playerallin': checkturn();if(gameover!=true){alert("JOUEUR allin");adbehavior();potvalue=potvalue+player.money;player.money=0;let mod3 = document.getElementById('#player'+"output");mod3.textContent=player.money;console.log(mod3);{eco(1,adversaire)};pot.textContent=potvalue};
                
                break;


        }

        switch (e.target.id.slice(-8)) {
            case "claimpot": 
            eval(savethetarget).getpot(potvalue);potvalue=0;console.log(player);
                
                break;
        
          
        }

        
        turn = turn+1;
        console.log(potvalue);
        console.log(player.money);
        console.log(e.target.id,savethetarget,e.target.id.slice(-8));
        console.log(dealer.childElementCount);

    })} 


}


function adbehavior(){

  
    yourenemy.forEach( e => {

    behav = Math.floor(Math.random()*100);

    console.log(behav,behav<50);

    // e.allin();alert(e.name+"allin!");

        if((behav>95)&&(e.money>0)) (potvalue = potvalue+e.money, e.allin(), mod = document.getElementById(e.id+"output"),mod.textContent=e.money.toString(),alert(e.name+"allin!")); else if

         ((behav<50)&&(e.money>20))(potvalue= potvalue+200, e.double(),mod = document.getElementById(e.id+"output"),mod.textContent=e.money.toString(), alert(e.name+"double!")); else if

        ((behav<10)&&(e.money>10))(potvalue= potvalue+100, e.suivre(),mod = document.getElementById(e.id+"output"),mod.textContent=e.money.toString(), alert(e.name+"suis!")); else if

    (11>behav)(e.coucher(),alert(e.name+"coucher!"));

        console.log(e.money,e.name);

        console.log(hide);

    })
}


function checkturn (){

    console.log(savethetarget);

  if  (dealercardbox.childElementCount==6) return (gameover=true,yourenemy.forEach( e => e.revealcard()) ,alert("fin de partie, redistribution des cartes dans 3 secondes..."),
  
    console.log(document.querySelector('#dealer1cards1')),console.log(document.querySelector('#dealer1')),
    

    setTimeout(function() {
        deletet(), gameover=false, eco(2,playerz), eco(3,adversaire);yourenemy.forEach(e => e.hidecard());
      }, 3000)

          
     )
    
}


function deletet(){


    test = document.querySelector('#playercardbox'), 

     test.innerHTML="";

     test = document.querySelector('#dealercardbox'), 

     test.innerHTML="";


        for (let compt=0; compt<nboppo; compt++) {


            test = document.querySelector('#dealer'+compt+'cardbox'), 

            test.innerHTML="";
       

        }

        for (let compt=0; compt<nboppo; compt++) {


            eco(2,adversaire+compt); 
       

        }

}


player = new Player();
ask(playerz,adversaire);
console.log(dealer.childElementCount<5)
console.log(yourenemy);


game();




