document.getElementById('login-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        let number = document.getElementById('number').value;
        let pin = document.getElementById('pin').value;

        if(number.length === 11 ){
            if(pin === '1234'){
                window.location.href="main.html";
            }
            else{
                alert('Your password is wrong.')
            }
        }
        else{
            alert('Please type valid number.\n Give me 11 degit number.\n Thank you.')
        }
    })



