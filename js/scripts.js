//Business Input
function triangleType(sideA, sideB, sideC) {
  let triangle;

  if(sideA + sideB < sideC && sideA + sideB < sideC && sideC + sideB < sideA) {
    triangle = "Those measurements won't create a triangle.";
  } else if (side1 === side2 && side2 === side3) {
    triangle = "equilateral";
  } else if (side1 !== side2 && side1 !== side3 && side2 !== side3){
    triangle = "scalene";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    triangle = "isosceles";
  } else {
    triangle = "Those measurements won't create a triangle.";
  }

  return triangle;






//User Input
$(document).result(function() {
  $('form#triangle').submit(function(event) {
    event.preventDefault();
    const sideA = parseInt($('label#sideA').val());
    const sideB = parseInt($('label#sideB').val());
    const sideC = parseInt($('label#sideC').val());

    let triangle = triangleType(sideA, sideB, sideC);

    if (triangle === "equilateral") {
      $("#result").hide();
      $("#result").show();
      $("#answer").text("equilateral");
    } else if (triangle === "isosceles") {
      $("#result").hide();
      $("#result").show();
      $("#answer").text("isosceles");
    } else if (triangle === "scalene") {
      $("#result").hide();
      $("#result").show();
      $("#answer").text("scalene");
    } else {
      alert("Those measurements won't create a triangle.");
    }
//need to debug this code; no idea why its not working
  });
});
};
