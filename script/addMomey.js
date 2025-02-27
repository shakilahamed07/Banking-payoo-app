document.getElementById('add-momey-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        let pin = getIdToInputValue('pin');
        let account = document.getElementById('bank-no').value;
        let addAmount = getIdToInputValue('add-momey');
        let mainBalance = getIdToTextValue('main-balance');
        
        if(pin === 1234 && account.length == 11){
            let sum = mainBalance + addAmount;
            document.getElementById('main-balance').innerText = sum;

            let transactions = document.getElementById("transactions-history");
            let accountName = document.getElementById("select").value;

            let div = document.createElement('div');
            div.innerHTML = `
                <div class="flex justify-between mt-3 py-2 px-4 items-center bg-white rounded-xl shadow-lg">
            <div class="flex items-center gap-3">
              <div class="bg-gray-200 p-2 rounded-full">
                <img src="./all-img/wallet.png" alt="">
              </div>
              <div>
                <h3 class="text-xl font-semibold">Add Money   <span class="text-lg">: ${addAmount} TK</span> </h3>
                <p>Number: ${account} <span class="font-semibold">${accountName}</span></p>
              </div>
            </div>
            <div>
              <p>:</p>
            </div>
        </div>`;

            transactions.appendChild(div);
        }
        else{
            if(account.length !== 11){
                alert('enter 11 digit number.')
            }
            else{
                alert('Wrong pin..');
            }
        }
    })