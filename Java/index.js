

let num1 = 1;
let num2 = 2;

if ( num1 < num2) {
    console.log (num1)
    num1++;
    console.log (num1)
}

console.log (num1);



let br = Number;




let imeprezime = 'Pera';
let godine = 30;

if(godine >= godine ) {
    console.log ('punoletan');
} else{
    console.log ('Maloletan');
}

let broj = '1';

let parse = Number;
let parse2 = parseInt;

if (parse2 % 3 !== 0) {
    console.log ('broj je deljiv sa 3')
} else {
    console.log ('broj nije deljiv sa 3')
}




let ime = prompt ('unesite ime');
let prezime = prompt ('unesite prezime');
 

if(ime === 'Adis' && prezime === 'Sinanovic' ) {
    console.log ('uneli ste tacno')
}else if(ime !== 'Adis' && prezime === 'Sinanvovi') {
    console.log ('Ime nije ispravno')
}else if(ime === 'Adis' && prezime !== 'Sinanovic') {
    console.log  ('Prezime nije ispravno')
} else if(ime !== 'Adis' && prezime !== 'Sinanovic') {
    console.log ('Uneli ste pogresne podatke')
}



let password = prompt ('Unesite sifru')


let ocenaIzMat = Number ( prompt('Unesite ocenu iz Matematike'));
let ocenaIzFiz = Number ( prompt('Unesite ocenu iz Fizike'));
let ocenaIzHem = Number ( prompt('Unesite ocenu iz Hemije'));

let prosek = (ocenaIzFiz, ocenaIzHem, ocenaIzMat);

console.log(prosek);

if (prosek === 5) {
    console.log ('skroz odlican');
} else if ( prosek >=4,5) {
    console.log ('odlican');
}
else if( prosek >=3) {
    console.log ('vrlo dobar');
}



let ime = 'Adis';

console.log (ime.substring(0,1));
let celoIme = 'AdisSinanovic'

console.log (
    celoIme.substring(4, celoIme.length)
    celoIme.substring(0,4)
)



function calcuklator(num1, num2, operaciju) {
    switch (operaciju) {
        case '+':
            return num1 + num2;
        break;
        case '-':
            return num1 - num2;
        break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            console.log('niste uneli valindu operaciju');
        
    }
}
let unos_korisnika = prompt ('Unesi operaciju +,-,*,/');

let varijabla = console.log(calcuklator)
calcuklator(7, 3, '*')

let plus = calcuklator(num1, num2, unos_korisnika);



let ime = prompt ('unesite ime');
let prezime = prompt ('unesite prezime');
 

if(ime === 'Adis' && prezime === 'Sinanovic' ) {
    console.log ('uneli ste tacne podatke')
}else if(ime !== 'Adis' && prezime === 'Sinanvovi') {
    console.log ('Ime nije ispravno')
}else if(ime === 'Adis' && prezime !== 'Sinanovic') {
    console.log  ('Prezime nije ispravno')
} else if(ime !== 'Adis' && prezime !== 'Sinanovic') {
    console.log ('Uneli ste pogresne podatke')
}


const fizzBuzz = (broj) => {
    for (let i = 0; i <= broj; i++) {
if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz') 
    }
    if (i % 3 === 0) {
          console.log('Fizz')
  } if  (i % 5 === 0) {
          console.log('Buzz')
  } else {
        console.log(iteracija)
  }
}
}

fizzBuzz(100)

let nekiNiz = [1, 2, '21', '23232', true, false];

for (let i = 0; i <= nekiNiz.length; i++) {
    console.log (typeof nekiNiz[i]);
}






let unis1;
let unos2;
let unos3;




 for (let i = 0; i < 3; i++) {
    
 } 



 const prazanNiz = []; // definisali smo prazan niz

let izabraniBroj = prompt("Molimo vas unesite broj elemenata");


const unesiBrojElemenata = (brojElemenata) => {
  
  for (let i = 1; i <= brojElemenata; i++) {
    prazanNiz.push(i)
  }
  console.log(prazanNiz)
}


unesiBrojElemenata(izabraniBroj)


const nekiNiz = [3, 7, 5, 10, 4, 9, 8, 2];

for (let i = 0; i < nekiNiz.length; i++){
    console.log(i);
}

if nekiNiz(i) 













