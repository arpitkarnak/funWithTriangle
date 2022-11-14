var inputValue = document.querySelectorAll('.input-value');
var checkBtn = document.querySelector('#check-btn');
var output1 = document.querySelector('#output');



function findarea(a,b){
    if(a>=0,b>=0){
    const baseHeight = (a*b)/2
    return baseHeight}
    else {
        output1.innerText = "You need to provide value more than 0"
        

    }
    
}


function final(){
    const finalValue = findarea(Number(inputValue[0].value),Number(inputValue[1].value))

    if(finalValue<=0){
        output1.innerText = "Please Provide Value more than 0 "  
    } else if(finalValue=" ") {
        output1.innerText = "Provide value more than 0"
        
    } else {
        output1.innerText = "The Area of Triangle is " + finalValue 
    }
    
}


checkBtn.addEventListener('click',final);