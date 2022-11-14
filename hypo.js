var sideInput = document.querySelectorAll('.side-input')
var hypotenuseBtn = document.querySelector('#hypotenuse-btn');
var output1 = document.querySelector('#output')


function calculateSumOfSquares(a,b){
    
    if(b>0){

        if(a>0){

    const sumOfSquares = a * a + b * b
    
    return sumOfSquares}

    else {
        output1.innerText = "Please Provide Value more than 0" 
        return }

    }
    else if(a>0){

        if(b>0){

    const sumOfSquares = a * a + b * b
   
    return sumOfSquares}

    else {
        output1.innerText = "Please Provide Value more than 0" 
        return }

    }
    
    else {
        output1.innerText = "Please Provide Value more than 0" 
        return
    }

}




function calculateHypotenuse() {
    const sumOfSquare = calculateSumOfSquares(Number(sideInput[0].value),Number(sideInput[1].value));
    const lengthofhypo = Math.sqrt(sumOfSquare)

    if(lengthofhypo<=0){
        output1.innerText = "Please Provide Value more than 0 " 
        
    } else if(lengthofhypo>0) {
        output1.innerText = "The Length of Hypotenuse :" + lengthofhypo; 
        
    } else {
        
        output1.innerText = "Please Provide Value more than 0"
    }



    // output1.innerText = "The Length of Hypotenuse : " + lengthofhypo;

}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);