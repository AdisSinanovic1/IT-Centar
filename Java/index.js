

// let num1 = 1;
// let num2 = 2;

// if ( num1 < num2) {
//     console.log (num1)
//     num1++;
//     console.log (num1)
// }

// console.log (num1);



// let br = Number;




// let imeprezime = 'Pera';
// let godine = 30;

// if(godine >= godine ) {
//     console.log ('punoletan');
// } else{
//     console.log ('Maloletan');
// }

// let broj = '1';

// let parse = Number;
// let parse2 = parseInt;

// if (parse2 % 3 !== 0) {
//     console.log ('broj je deljiv sa 3')
// } else {
//     console.log ('broj nije deljiv sa 3')
// }




// let ime = prompt ('unesite ime');
// let prezime = prompt ('unesite prezime');
 

// if(ime === 'Adis' && prezime === 'Sinanovic' ) {
//     console.log ('uneli ste tacno')
// }else if(ime !== 'Adis' && prezime === 'Sinanvovi') {
//     console.log ('Ime nije ispravno')
// }else if(ime === 'Adis' && prezime !== 'Sinanovic') {
//     console.log  ('Prezime nije ispravno')
// } else if(ime !== 'Adis' && prezime !== 'Sinanovic') {
//     console.log ('Uneli ste pogresne podatke')
// }



// let password = prompt ('Unesite sifru')


// let ocenaIzMat = Number ( prompt('Unesite ocenu iz Matematike'));
// let ocenaIzFiz = Number ( prompt('Unesite ocenu iz Fizike'));
// let ocenaIzHem = Number ( prompt('Unesite ocenu iz Hemije'));

// let prosek = (ocenaIzFiz, ocenaIzHem, ocenaIzMat);

// console.log(prosek);

// if (prosek === 5) {
//     console.log ('skroz odlican');
// } else if ( prosek >=4,5) {
//     console.log ('odlican');
// }
// else if( prosek >=3) {
//     console.log ('vrlo dobar');
// }



// let ime = 'Adis';

// console.log (ime.substring(0,1));
// let celoIme = 'AdisSinanovic'

// console.log (
//     celoIme.substring(4, celoIme.length)
//     celoIme.substring(0,4)
// )



// function calcuklator(num1, num2, operaciju) {
//     switch (operaciju) {
//         case '+':
//             return num1 + num2;
//         break;
//         case '-':
//             return num1 - num2;
//         break;
//         case '*':
//             return num1 * num2;
//             break;
//         case '/':
//             return num1 / num2;
//             break;
//         default:
//             console.log('niste uneli valindu operaciju');
        
//     }
// }
// let unos_korisnika = prompt ('Unesi operaciju +,-,*,/');

// let varijabla = console.log(calcuklator)
// calcuklator(7, 3, '*')

// let plus = calcuklator(num1, num2, unos_korisnika);



// let ime = prompt ('unesite ime');
// let prezime = prompt ('unesite prezime');
 

// if(ime === 'Adis' && prezime === 'Sinanovic' ) {
//     console.log ('uneli ste tacne podatke')
// }else if(ime !== 'Adis' && prezime === 'Sinanvovi') {
//     console.log ('Ime nije ispravno')
// }else if(ime === 'Adis' && prezime !== 'Sinanovic') {
//     console.log  ('Prezime nije ispravno')
// } else if(ime !== 'Adis' && prezime !== 'Sinanovic') {
//     console.log ('Uneli ste pogresne podatke')
// }


// const fizzBuzz = (broj) => {
//     for (let i = 0; i <= broj; i++) {
// if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz') 
//     }
//     if (i % 3 === 0) {
//           console.log('Fizz')
//   } if  (i % 5 === 0) {
//           console.log('Buzz')
//   } else {
//         console.log(iteracija)
//   }
// }
// }

// fizzBuzz(100)

// let nekiNiz = [1, 2, '21', '23232', true, false];

// for (let i = 0; i <= nekiNiz.length; i++) {
//     console.log (typeof nekiNiz[i]);
// }






// let unis1;
// let unos2;
// let unos3;




//  for (let i = 0; i < 3; i++) {
    
//  } 



//  const prazanNiz = []; // definisali smo prazan niz

// let izabraniBroj = prompt("Molimo vas unesite broj elemenata");


// const unesiBrojElemenata = (brojElemenata) => {
  
//   for (let i = 1; i <= brojElemenata; i++) {
//     prazanNiz.push(i)
//   }
//   console.log(prazanNiz)
// }


// unesiBrojElemenata(izabraniBroj)


// const nekiNiz = [3, 7, 5, 10, 4, 9, 8, 2];

// for (let i = 0; i < nekiNiz.length; i++){
//     console.log(i);
// }


// const matrica = [
//     [5, 4, 6],
//     [3, 2, 1],
//     [7, 8, 9],
// ]

// for (let i = 0; i < matrica.length; i++){
//     console.log(matrica[i]);
//     for (let j = 0; j < matrica.length [i]; j++) {
//         if ( matrica[i][j] % 2 === 0)
//         console.log (matrica[i][j], 'je paran') 
//     } else (
//         console.log(matrica [i][j], 'neparan')
//     )
// }

// const recenica = 'Mama ima Momu';
 
// let broj = 0;


// for (let i = 0; i < recenica.length; i++) {
//     console.log(recenica[i].includes(m)  || recenica[i].includes(M)) {
//         broj++;
//     }
// }

// console.log (broj);




// const reci = ['rec', 'telefon', 'laptop', 'fakultet', 'ispit', 'zub', 'casa', 'noga', 'patika'];

//  const reci2 = [];

//  for (let i = 0; i < reci.length; i++) {
//     if (reci[i][1] === 'a') {
//         reci2.push(reci[i]);
//     }
//  }

//  console.log(reci2)



// const nekaRecenoica = 'Flasa je Providna I IMA MAXI logo';
// let malaSlova = 0;

// for ( let i = 0; i < nekaRecenoica.length; i++)


// const firstPractice = [6, 7, 9, 3, 13, 5, 32, 1, 8]

// let parni = [];

// for (let i = 0; i < firstPractice.length; i++){
//     if (firstPractice[i] % 2 === 0) {
//         parni.push(firstPractice[i])
//     }
// }

// console.log(parni);

// const firstPractice = [6, 7, 9, 3, 13, 5, 32, 1, 8]

// let parni = [];

// for (let i = 0; i < firstPractice.length; i++){
//     parni.push(firstPractice[i] * 3)
// }

// console.log (parni);



// const firstPractice = [6, 7, 9, 3, 13, 5, 32, 1, 8]

// let parni = [];

// for (let i = 0; i < firstPractice.length; i++){
//     if ( firstPractice[i] > 20 && firstPractice[i] < 30 ){
//         parni.push(firstPractice[i] * 8 / 4);
//     } else if ( firstPractice[i] > 20 ) {
//         parni.push(firstPractice[i] *4);
//     }
// }

// console.log(parni);



// const nekaMatrica = [
//     [3, 4, 9, 10],
//     [13, 17, 20, 65],
//     [25, 92],
// ]
// let novaMatrica = [];

// for (let i = 0; i < nekaMatrica.length; i++){
//         console.log(nekaMatrica[i]);
//         for (let j = 0; j < nekaMatrica.length [i]; j++) {
//             if ( matrica[i][j] % 2 === 0)
//             novaMatrica.push (nekaMatrica[i][j]); 
      
//         }
//       }

//       console.log(novaMatrica);




// let ArrTarget = [1, 2, 3, 4, 5, 6, 7, 8];

// let = najveciBroj;

// ArrTarget.forEach ((el, index) => {
//     if (ArrTarget[index] % 2 === 0) ArrTarget[index] = el +2;
//     else {
//         ArrTarget[index] = el -1;
//     }
// });

// console.log(ArrTarget, 'ovo je resenje');


// let ArrTarget = [1, 2, 3, 4, 5, 6, 7, 8];

// let = mapArr;

// let NewArr = ArrTarget.map((el) => {
//     if(el)
// });




// const niz_ =[
//     [10, 20, 30, 40, 50],
//     [23, 12, 32, 53, 90],];




const testArr_ = [true, false, [1, 23, 4, 5], 'string', 2, 23, 4, 'jos jedan'];

Boolean = 0;
String = 0;
Niz = 0; 
Number = 0;

for (let i = 0; i < testArr_.length; i++) {
    if (typeof testArr_);

}











