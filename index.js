//Checked property 

const mycheckbox = document.getElementById("mycheckbox")

const boyradio = document.getElementById("boy-radio")

const girlradio = document.getElementById("girl-radio")

const gendersubmit = document.getElementById("gender-submit")

const h51 = document.getElementById("myh51")

const h52 = document.getElementById("myh52")

 gendersubmit.onclick=function() {

    if(mycheckbox.checked){
        h51.textContent="you are 18+"
    }
    else{
        h51.textContent="you are not 18+"
    }

    if(boyradio.checked){

        h52.textContent="You are a boy"
    }
    else if(girlradio.checked){
        h52.textContent="You are a girl"
    }

    else{
        h52.textContent="Please select your gender"
    }

    

 }