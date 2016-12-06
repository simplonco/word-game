

var desordreArray = desordre.split(' ');
var sauce = desordreArray[0];
var tomate = desordreArray[1];

// On a du coup à priori deux variables. Une variable sauce et une variable tomate.
// On veut les remettre dans l'ordre en utilisant la méthode .slice().
sauce = 'scaue';
// 's' + 'au' + 'c' + 'e'
var sauce = sauce.slice(0,1) + sauce.slice(2,4) + sauce.slice(1,2) + sauce.slice(4);