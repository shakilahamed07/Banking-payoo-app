document.getElementById('Withdraw-btn')
    .addEventListener('click', function(event){
        event.preventDefault();
        let agentNo = document.getElementById('agent-no').value;
        let convatOutMoney = getIdToInputValue('out-money');
        let convatPin = getIdToInputValue('cashout-pin');
        let convatBalance = getIdToTextValue('main-balance');


        if(convatPin === 1234 && agentNo.length === 11){
            let sub = convatBalance - convatOutMoney;
            document.getElementById('main-balance').innerText = sub;

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
                <h3 class="text-xl font-semibold">Cash Out  <span class="text-lg">: ${convatOutMoney} TK</span> </h3>
                <p>Number: ${agentNo}</p>
              </div>
            </div>
            <div>
              <p>:</p>
            </div>
        </div>`;

            transactions.appendChild(div);
        }
        else{
            if(agentNo.length !== 11){
                alert('enter 11 digit number.')
            }
            else{
                alert('Wrong pin..');
            }
        }
    })