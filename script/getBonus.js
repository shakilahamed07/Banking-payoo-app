document.getElementById("get-bonus-btn")
    .addEventListener('click', function(event){
        event.preventDefault();
        let mainBalance = getIdToTextValue("main-balance");
        let coupon = document.getElementById("coupon-code").value;
        if(coupon === "shakil07"){
            let total = mainBalance + 500;
            document.getElementById("main-balance").innerText=total;
            document.getElementById("get-bonus-btn").style.display = 'none';
        }
        else{
            alert(`Don't mach coupon`);
        }
    })

    //log oout 

    document.getElementById('logout')
        .addEventListener('click', function(){
            window.location.href="index.html";
        })