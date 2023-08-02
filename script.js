document.getElementById('convert').onclick=tempconvert;
document.getElementById('clear').onclick=clear;

function tempconvert(){
    var degree = document.getElementById("degree").value;
    var type = document.getElementById("type").value;

    if(type == "Celcius"){
       var celcius = (parseFloat(degree)-32)/1.8;
        document.getElementById('result').value = parseFloat(celcius).toFixed(1);
    }else{
       var fahrenheit = (parseFloat(degree)*1.8)+32;
        document.getElementById('result').value = parseFloat(fahrenheit).toFixed(1);
    }   
    
}

function clear(){
    document.getElementById('degree').value='Degree';

    document.getElementById('result').value='Result';
}