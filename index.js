
const btn = document.querySelector('#btn');
const text = document.querySelector('.show');


function checkMatch(){
    let male = document.querySelector('#male').value.toUpperCase();
    let feMale = document.querySelector('#female').value.toUpperCase();

    let matchNumber = Math.floor(Math.random() * 100) + 1 ;
   
   
    if(feMale == ""){
        alert( "Please enter the female's name");
    }
    else if(male == ""){
        alert( "Please enter the male's name");
    }
    else{
        alert( male + " " + "and" + " "+  feMale + " " + "your match percentage is : " + "" + matchNumber + "%");
        
    }

}

btn.addEventListener('click', checkMatch);
