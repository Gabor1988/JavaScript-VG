let name = 'Gabor';

//Console-ba iratás
console.log(name + "'s apples");

console.log('Hello World!');

//Vmi kiválasztása / action utána
//$('selector').action()

// H1 kiválasztása és a text-t megváltoztatása
$('h1').text('We are having a break!');

//$('p').text('Megváltoztatom a paragraph értékét erre a szövegre')

//text action-el kiírná a spam-t / HTML-el kódnak veszi és nem írj ki. Hanem lefordítja
$('p').html('Megváltoztatom a paragraph értékét erre a szövegre. Like:<strong>13</strong>');

$('strong').css('background', 'lime');
$('strong').css('padding', '10px');

//deklarálás - változó létrehozás / definiálás
let color = 'blue';

//ezzel blue lesz a színe / fent megadtuk a color változót és annak értékét
$('h2').toggleClass('color');

//másodjára kiírva leveszi a formázást...
$('h2').toggleClass('color');

//hozzáad a listához
$('ul').append('<li>My name is '+ name +'</li>');
$('ul').append('<li id="special">Removeable '+ name +'</li>');

//mindegyik li-t törölné, ezért ID-t vagy CLASS-t kell rá csinálni
//$('<li>').remove();

//ID esetén ugyanaz kell mint a css-ben --> #IDname / CLASS esetén .CLASSname
$('#special').remove();


//Klikkelésre így csinál vmit a button!
//IF megoldás arra, hogy 5nél többet ne szúrjon be a listába. Lehetne else is még, de arra nem akarunk csinálni semmit.
$('#add-button').click(() => {
    if($('li').length < 5)
    {
    $('ul').append('<li>My name is '+ name +'</li>');
    }
});

/*új változó a létrehozásra és a buttonnál a click-be ezt adjuk meg...

let addButtonHandler = () => {
    $('ul').append('<li>My name is '+ name +'</li>');
};

$('#add-button').click(addButtonHandler);

*/

//Remove button, eltávolít valamit a listából
//last-child --> ez az utolsó elem...
$('#remove-button').click(() => {
    $('li:last-child').remove();
});

//IF és ELSE folyamat
/*
if(condition){

} else{

}
*/

//This is the fourth part

let age = 12;

console.log('Starting the if');
console.log('This Is a Sentence'.toUpperCase());

//Egyenlőség -> == vagy === / egy egyenlőség jel az értékadás.
//Nem egyenlő -> != vagy !== vagy !===
if(age < 18){
    console.log('Not old enough to Drink');
} else{
    console.log('Old enough to Drink');
}

console.log('This is after the if');

/* Szöveg összehasonlítás

if('hello' === 'hello')
*/


//This a JavaScript comment

/*
    This is a multiline
    JavaScript comment.
*/

// This is the first part:

// 12+3
// 15
// 12-5
// 7
// 12*4
// 48
// 12/4
// 3
// let age
// undefined
// age=33
// 33
// age/3
// 11
// age=12
// 12
// age/3
// 4
// let legs = 4
// undefined
// legs*2
// 8
// find=4
// 4
// find/2
// 2
// legs=5
// 5
// let anotherAge = age
// undefined
// anotherAge
// 12
// let name = 'Gabor'
// undefined
// name
// "Gabor"
// name = "Peti"
// "Peti"
// name
// "Peti"
// "Gabor's apples"
// "Gabor's apples"
// true
// true
// false
// false
// let oldEnoughToDrive = false
// undefined
// oldEnoughToDrive
// false
// oldEnoughToDrive = true
// true
// oldEnoughToDrive
// true
// name + 'else'
// "Petielse"
// name + 'else' + name + age
// "PetielsePeti12"
// name + 'else' + 14+ name + age
// "Petielse14Peti12"
// 'Adam' - 'apple'
// NaN
// true && true
// true
// false && true
// false
// false && false
// false
// true||false
// true
// false || true
// true
// false || false
// false
// true||true
// true
// true&&false
// false
