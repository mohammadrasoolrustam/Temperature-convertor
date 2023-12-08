const celcius=document.querySelector("#celcius >input");
const fahrenheit=document.querySelector("#fahrenheit >input ");
const kelvin=document.querySelector("#kelvin >input");
function roundNumber(num){
    return Math.round(num*100)/100;
}
function celciusToOthers(){

    const ctemp=parseFloat(celcius.value);
    const ftemp=(ctemp*(9/5))+32;
    const ktemp=ctemp+273.15;
    fahrenheit.value=roundNumber(ftemp);
    kelvin.value=roundNumber(ktemp);
}
function fahrenheitToOthers(){
    const ftemp=parseFloat(fahrenheit.value);
    const ctemp=(ftemp-32)*(5/9);
    const ktemp=(ftemp+459.67)*(5/9);
    kelvin.value=roundNumber(ktemp);
    celcius.value=roundNumber(ctemp);
}

function kelvinToOthers(){
    const ktemp=kelvin.value;
    const ctemp=ktemp-273.15;
    const ftemp=(9/5)*(ktemp-273)+32;
    celcius.value=roundNumber(ctemp);
    fahrenheit.value=roundNumber(ftemp);
}

celcius.addEventListener("input",celciusToOthers);
fahrenheit.addEventListener("input",fahrenheitToOthers);
kelvin.addEventListener("input",kelvinToOthers);