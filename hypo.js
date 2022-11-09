var sideInput = document.querySelectorAll('.side-input')
var hypotenuseBtn = document.querySelector('#hypotenuse-btn');
var output1 = document.querySelector('#output')


function calculateSumOfSquares(a, b) {

    const sumOfSquares = a * a + b * b;
    return sumOfSquares;

}




function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sideInput[0].value), Number(sideInput[1].value));
    const lengthofhypo = Math.sqrt(sumOfSquares)
    output1.innerText = "The Length of Hypotenuse : " + lengthofhypo;

}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);