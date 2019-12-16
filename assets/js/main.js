 
//  EXO1
//   console.log("Bonjour,ca va commencer")

// EXO2

// let a = Number (prompt ('entrez un nombre entier'));
// let b = Number (prompt ('entrez un nombre entier'));
// let c = Number (prompt ('entrez un nombre entier'));

// console.log(a+b);

// console.log(b*c);

// console.log((a+b)+(b*c));

// console.log((a+b)*(b*c));

// console.log (3/a+b);


// --------------------------------------------------------------------------------

// IF/ELSE

// EXO1

// let year = Number( prompt ('entrez un nombre entier'));

// if(year%100 == 0){
//     console.log('C est une année séculaire');
// }
// else{
//     console.log ('Ce n est pas une année séculaire');
// }



// EXO2

// let a = Number( prompt ('entrez le premier nombre entier '));
// let b = Number( prompt ('entrez le deuxieme un nombre entier '));
// let choix = (prompt(' donnez moi un pour la premiere soustraction et deux pour la deuxieme soustration'));

// if( choix == a-b ){
//     console.log('la premiere soustraction');
// }
// else{
//     console.log('la deuxieme soustraction');
// }


// EXO3

// let a = Number ( prompt ('entrez un nombre entier'));

//     console.log(Math.abs(a));


// EXO4

// let a = (prompt('Entrez un caractère'));

// if( a== a.toUpperCase() && a.toLowerCase() ){
//     console.log('le caractère est majuscule et minuscule');
// }
// else if( a== a.Number){
//     console.log('le caractère est un nombre');
// }

// ---------------------------------------------------------------------------------------------------------------


//  BIS

// EXO1

// let a = Number(prompt ('entrez un nombre entier '));

// if(0 <= a ){
//     console.log('le nombre entier est positif');
// }
// else{
//     console.log('le nombre enier est negatif')
// }


// EXO2

// let a = Number(prompt ('entrez un nombre entier'));
// let b = Number(prompt ('entrez un nombre entier'));
// let c = Number(prompt ('entrez un nombre entier'));

// if( a>b && c){
//     console.log(' la plus grande valeur est : '+ a )
// }
// else{
//     console.log('affichez rien ')
// }


// EXO3

// let a = Number(prompt ('entrez premier nombre entier'));
// let b = Number(prompt ('entrez deuxieme nombre entier'));
// let c = Number(prompt ('entrez troisieme nombre entier'));


// if( a>b && c ){
//     console.log(' la valeur la plus grande');
    
// }
// else if( c < b && a ){
//     console.log('la valeur la plus petite');
// }
// else{
//     console.log('choix incorrect');
// }


// EXO4

// let a = Number(prompt ('entrez un nombre entier'));
// let b = Number(prompt ('entrez un nombre entier'));
// let c = Number(prompt ('entrez un nombre entier'));
// let d = Number(prompt ('entrez un nombre entier'));

// if((a+b) < (c+d) ||(a+b) > (c+d)){
//     console.log(' la somme des deux premier est inferieur ou superieur a la somme des deux derniers');
// }
// else if ((a+b) == (c+d)){
//     console.log('la somme des deux premier est egale a la somme des deux  derniers');
// }


// EXO5

//  let a = Number(prompt ('entrez un nombre entier'));
//  let b = Number(prompt ('entrez un nombre entier'));
//  let c = Number(prompt ('entrez un nombre entier'));
//  let d = Number(prompt ('entrez un nombre entier'));


//  if(0< a,b && 10>a,b  ){
//      console.log('tu as raté  2 matieres');
//  }
//  else if (10<= c,d && 20>c,d){
//      console.log('tu as réussi 2 matieres');
//  } 
//  else{
//     console.log('il n y a rien');
//  }


// A VOIR DEMAIN




// BONUS DE L EXO5

// let note = 15;
// let note = 10;
// let note = 4;
// let note = 9;

// switch(note){
//     case 0:
//         console.log('tu es nul');
//         break;
//     case 10:
//         console.log('tu es pas mal');
//         break;
//     case 15:
//         console.log('tu es bon');
//         break;
//     case 20:
//         console.log('tu es parfait');
//         break;           
//     default:
//         console.log('I don t know');
//         break     
// }



// EXO6

// let a = Number(prompt('entrez un nombre entier'));

// if( a%3 == 0 ){
//     console.log( a + ' est divisible par 3 ');
// }
// else if(a%5 == 0 ){
//     console.log (a + 'est divisible par 5');
// }


// EXO7

// let a = Number(prompt (' entrez un nombre entier'));
// let b = Number(prompt ('entrez un nombre entier '));

// if( a >= 100 && a <= 200 ){
//     console.log ( a +'est entre 100 et 200');
// }
// else if ( b >=  100 && a<=200){
//     console.log ( b +'est entre 100 et 200');
// }
// else {
//     console.log( 'le nombre est plus petit que  100 ou plus grand que 200')
// }


//  A VOIR COMMENT FAIRE EN SORTE QUE LES 2 NOMBRES SOIT DANS LA CONSOLE 


// EXO8

// let a = Number(prompt ('entrez un nombre entier'));
// let b = Number(prompt ('entrez un nombre entier'));

// if (b%2 ==0 &&  b >= a && b <= a*2){
//     (b + 'est entre a est le double de a ')
// }
// else if( b >= a )







// BOUCLE FOR 

// EXO1

// let tableau = [1,2,3,4,5,6,7,8,9,10];
// let somme=0

// for( i=0;i< 10 ;i++){
//     somme+=tableau[i]
//     console.log(somme)
// }


// EXO2

// let tableau = [1,2,3,4,5,6,7,8,9,10];

// for (i=0; i<10;i++){
//     if (i%3 == 0){
//         console.log(i)
//     }
// }


// EXO3

// let tableau =[1,2,3,4,5];

// for (i=0;i< tableau.length;i++){
//     console.log("Salut")
// }

// A REVOIR




// let tableau = [ "zaka ","momo" , "lili", "rere"];

// for(i=0;i<10;i++){
//     console.log ( "salut" + tableau[0])
// }






// WHILE 


// EXO1

// let a = Number (prompt ('entrez un nombre entier'));
// let b = Number (prompt ('entrez un nombre entier'));
// let c = Number (prompt ('entrez un nombre entier'));
// let d = Number (prompt ('entrez un nombre entier'));
// let e = Number (prompt ('entrez un nombre entier'));
// let somme=0;
// let i=0;

// while(i<=10){
//     if(a< b,c,d,e ){
//       somme+=a
//       console.log(somme)
//       i++
//     }
//     else if(a>b,c,d,e){
//         console.log('on arrete!')
//     }
// }

// A REVOIR 


// EXO2

// let a = Number(prompt("entrez un nombre entier"));
// let b = Number(prompt('entrez un nombre entier'));
// let c = Number(prompt('entrez un nombre entier'));
// let somme = 0;
// let i=0;

// while(i<=10){
//     if(a,b,c >= -10 && a,b,c <= 10 ){
//         somme+=a
//         console.log(somme)
//         i++

//     }
//     else{
//         console.log('il n y a rien')
//     }
// }




// MINI EXO 

// CREATION D UN MODULE



//  export default class personne {
//      construction(name, age, sex, height, weight) {
//          this.name = name,
//              this.age = age,
//              this.sex = sex,
//              this.height = height,
//              this.weight = weight,

//      }

//      talk() {

//      }
//      sleep() {

//      }
//      run() {

//      }
//      walk() {

//      }

//  }




// let personne ={
//     nom : 'zak',
//     age : 26,
//     adresse:' rue lulu ',

// }

// console.log(personne.age)

// class personne{
//     constructor(nom,prenom,poids,taille){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.poids = poids ;
//         this.taille = taille;
//     }
// }
//  let homme = new personne('liok','chi',76,176);


// class personne{
//     constructor(prenom, nom,adresse){

//         this.prenom=prenom;
//         this.nom=nom;
//         this.adresse=adresse;
      
//     }
//     Saluer(){
//         return 'salut '+ this.nom + ''+this.prenom ;
//     }

    
// }
// class coach extends personne{
//     constructor( prenom,nom, adresse){
//         this.prenom=prenom;
//         this.nom=nom;
//         this.adresse=adresse;
//     }
//         DonneCour(){
//             console.log  (this.nom +' donne cours a'+ this.adresse);
//         }
// }

// let homme = new personne ('mala','moula','Bruxelles');



// CODEPITAL

// class patient{
//     constructor(nom,maladie,argent,poche,santé){
//         this.nom=nom;
//         this.maladie=maladie;
//         this.argent=argent;
//         this.poche=poche;
//         this.santé=santé;
      

//     }

//     lieu(param){
//         param.push(this);
//     }

//     TakeCare(){
//         this.poche= 'vide';
//         this.santé = 'bonne santé';
//     } 

//     payer(prix){
//         this.argent-= prix;
//     }

//     patient(){
//         console.log(this.nom + this.maladie + this.argent + this.poche + this.santé );
//     }

// }

// SalleAttente = [];

// SalleAttente.push(new patient('Marcus','mal indente',100,'vide','malade'));
// SalleAttente.push(new patient('Optimus','unsave',200,'vide','malade'));
// SalleAttente.push(new patient('DarthVader','azmatique',110,'vide','malade'));
// SalleAttente.push(new patient('Sangoku','404',80,'vide','malade'));
// SalleAttente.push(new patient('Semicolon','syntaxError',60,'vide','malade'));


//  class doctor{
//      constructor(nom,argent,cabinet){
//          this.nom=nom;
//          this.argent=argent;
//          this.cabinet=cabinet;
//      }
    
//      paye(){
//         this.argent=50;
//      }
   
    
//     diagnostique(param){
//         param.paye(50);
//         this.argent+=50;
//         switch(param.maladie){
//          case "mal indenté":
//             param.poche="ctrl+maj+f";
//             break
//          case "unsave":
//             param.poche="saveOnFocusChange";
//             break
//          case "404":
//             param.poche="CheckLinkRelation";
//          case "azmatique":
//             param.poche="ventoline";
//          case "syntaxError":
//             param.poche="f112+doc";  
//         default:
//             console.log("Au revoir");          
//         }
//     }

//      patientIn(param){
//          if (param.cabinet.lenght=1){
//              this.cabinet.push(param)
//          }
//          else{
//              console.log('c est occupé !')
//          }

//      }
//      patientOut(param,pharmacie){
//          if (param.goTo(pharmacie)){
//              this.cabinet.pop(param)
//          }
//          else{
//              console.log("c'est occupé !")
//          }


//      }
//  }

//  class pharmacie{
//      constructor( traitement, prix,pharmacie){
//          this.traitement=traitement;
//          this.prix=prix;
//          this.pharmacie=pharmacie;

//      }

//      patientIn(param){
//         if(param.pharmacie.lenght=1){
//             param.pharmacie.push(param)
//         }
//      }

//      traitement(param){
//         param.paye(prix);
//         this.argent+= prix;
//         switch(param.prix){
//          case " ctrl+maj+f":
//             param.prix= 50;
//             break
//          case "saveOnChange":
//             param.prix= 100;
//             break
//          case "CheckLinkRelation":
//             param.prix= 35;
//          case  "ventoline" :
//             param.prix= 40;
//          case "f12+doc":
//             param.prix= 20;  
//         default:
//             console.log(" Il va au cimetiere");          
//         }
//     }

     
//  }




// JEU DE MONSTRE 

  let joueur = prompt(' premier joueur');

// console.log("Salut Younes! Tu vas devoir affronter plusieurs monstres durant cette aventure, juge bien tes actions ! 
// Tu peux attaquer le monstre contre qui tu te trouves en utilisant la méthode swordAttack() dans la console. Tu peux aussi te soigner en écrivant healingSpell() dans la console également (celà te soignera de 15Pv à chaque utilisation). 
// Il n'y aura pas que des monstres durant ton aventure, tu trouveras 3 coffres tout au long de ton parcours.
// Amuse toi bien et essaie de survivre !
// ```");
 

class hero{
    constructor(nom,nombreDePointDevie,nombreDePointDevieMax, degats,vitesse){
        this.nom=nom;
        this.nombreDePointDevie=nombreDePointDevie;
        this.nombreDePointDevieMax=nombreDePointDevieMax;
        this.degats=degats;
        this.vitesse=vitesse;
    }

    swordAttack(monstre){
      this.degats-=monstre.nombreDePointDevie;
    }

    healinSpell(hero){
        this.nombreDePointDevie+= hero.nombreDePointDevie;
    }
}

let supermans = [];

 let superman = (new hero ("superman",100,100,10,10));
 supermans.push(superman)
 
 console.log(supermans)


class monstre{
    constructor(nom,nombreDePointDevie,nombreDePointDevieMax, degats,vitesse){
        this.nom=nom;
        this.nombreDePointDevie=nombreDePointDevie;
        this.nombreDePointDevieMax=nombreDePointDevieMax;
        this.degats=degats;
        this.vitesse=vitesse;
    }

    swordAttack(hero){
        this.degats-=hero.nombreDePointDevie;
    }
}

let monstres = [];

let monstre1 = new monstre ("monstre1",30,30,10,10);
monstres.push(monstre1)

let monstre2 = (new monstre ("monstre2",30,30,10,10));
monstres.push(monstre2)

let monstre3 = (new monstre ("monstre3",30,30,10,10));
monstres.push(monstre3)

let monstre4 = (new monstre ("monstre4",30,30,10,10));
monstres.push(monstre4)

let monstre5 = (new monstre ("monstre5",30,30,10,10));
monstres.push(monstre5)

let monstre6 = (new monstre ("monstre6",30,30,10,10));
monstres.push(monstre6)




class coffre{
    constructor(nom,boostdegats,boostvitesse,boostnombreDePointDevie){
        this.nom=nom;
        this.boostdegats=boostdegats;
        this.boostvitesse=boostvitesse;
        this.boostnombreDePointDevie=boostnombreDePointDevie;
    }
     
    augmenter(hero){
        this.boostdegats+=hero.degats;
        this.boostvitesse+=hero.vitesse;
        this.boostnombreDePointDevie+=hero.nombreDePointDevie;

    }
}

coffres=[];

let coffre1= (new coffre("coffre1",15,5,0));
coffres.push(coffre1)

let coffre2= (new coffre("coffre2",0,5,10));
coffres.push(coffre2)
 
let coffre3= (new coffre("coffre3",0,5,30));
coffres.push(coffre3)




class stage {
    constructor(monstre,coffre){
        this.monstre=monstre;
        this.coffre=coffre;
    }
    
}

let stages = [...monstres,...coffres];


console.log(stages);








// class dead{
//     constructor(nombreDePointDevie){
//        this.nombreDePointDevie=nombreDePointDevie;
//     }

//     mourir(hero){
//         this.nombreDePointDevie-=hero.nombreDePointDevie;
//         if(this.nombreDePointDevie <= 0){
//             console.log('vous avez perdu');
//         }
//         else if(this.nombreDePointDevie >0){
//            console.log('vous pouvez continuer');
//         }
            
//     }
    
// }

class game{
    constructor(stages,hero){
        this.stages=stages;
        this.hero=hero;

    }
    lancer(){
        while(this.hero.nombreDePointDevie > 0 && this.stages.length == 0){
            let random=Math.floor(Math.random() * this.stages.length)
            let level = this.stages[random]
            this.stages.splice(random,1)
            while(level.nombreDePointDevie<0 && this.hero.nombreDePointDevie>0){
                
            }
        }


    }
   
}

 console.log(Math.floor(Math.random() * stages.length))






















