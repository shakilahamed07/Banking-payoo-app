document.getElementById('money-trensfer-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        let number = document.getElementById('transfer-agent-no').value;
        let amount = getIdToInputValue('transfer-money');
        let pin = getIdToInputValue('money-transfer-pin');
        let mainBalance = getIdToTextValue('main-balance');

        if(pin === 1234 && number.length == 11){
            let sub = mainBalance - amount;
            document.getElementById('main-balance').innerText = sub;

            let transactions = document.getElementById("transactions-history");

            let div = document.createElement('div');
            div.innerHTML = `
                <div class="flex justify-between mt-3 py-2 px-4 items-center bg-white rounded-xl shadow-lg">
            <div class="flex items-center gap-3">
              <div class="bg-gray-200 p-2 rounded-full">
                <img src="./all-img/wallet.png" alt="">
              </div>
              <div>
                <h3 class="text-xl font-semibold">Transfer Money   <span class="text-lg">: ${amount} TK</span> </h3>
                <p>Number: ${number}</p>
              </div>
            </div>
            <div>
              <p>:</p>
            </div>
        </div>`;

            transactions.appendChild(div);
        }
        else{
            if(number.length !== 11){
                alert('enter 11 digit number.')
            }
            else{
                alert('Wrong pin..');
            }
        }
    })