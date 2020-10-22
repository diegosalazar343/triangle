//Business Input
function triangleType(sideA, sideB, sideC) {
  let triangle;

  if(sideA + sideB < sideC && sideA + sideB < sideC && sideC side + sideB < sideA) {
    triangle = "not";
  } else if () {

  } else if (){

  } else {

  }
  return triangle;
}






//User Input
$(document).result(function() {
  $('form#triangle').submit(function(event) {
    event.preventDefault();
    const sideA = parseInt($('label#sideA').val());
    const sideB = parseInt($('label#sideB').val());
    const sideC = parseInt($('label#sideC').val());

    let triangle = triangleType(sideA, sideB, sideC);

  });
});
