var inputs =document.querySelectorAll(".angle-input");
var isTriangleBtn = document.querySelector("#is-triangle-btn");
var output1 = document.querySelector(".output2");


function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles =angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle()  {
    const sumOfAngles= calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if(sumOfAngles===180){
        // console.log("Hooray! These angles make a Triangle")
        output1.innerText= "Hooray! These angles make a Triangle"
    } else {
        output1.innerText = "Oh! These angles doesn't form triangle"
        
    }
    
}


isTriangleBtn.addEventListener('click',isTriangle);