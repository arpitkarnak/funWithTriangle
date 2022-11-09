var inputValue = document.querySelectorAll('.input-value');
var checkBtn = document.querySelector('#check-btn');
var output1 = document.querySelector('#output');



function findarea(a,b){
    const baseHeight = (a*b)/2
    return baseHeight
    
}


function final(){
    const finalValue = findarea(Number(inputValue[0].value),Number(inputValue[1].value))
    output1.innerText = "The Area of Triangle is " + finalValue 
}


checkBtn.addEventListener('click',final);