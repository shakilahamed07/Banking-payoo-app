togol('cash-out-page', 'none');
togol('transactions-page', 'none');
togol('momey-transfer-page', 'none');
togol("get-bonus-page", 'none');

//card 1
document.getElementById('card1')
    .addEventListener('click', function(){
        togol('add-momey-page', 'block');
        togol('cash-out-page', 'none');
        togol('transactions-page', 'none');
        togol('momey-transfer-page', 'none');
        togol("get-bonus-page", 'none');
    })

//card 2
document.getElementById('card2')
    .addEventListener('click', function(){
        togol('add-momey-page', 'none');
        togol('cash-out-page', 'block');
        togol('transactions-page', 'none');
        togol('momey-transfer-page', 'none');
        togol("get-bonus-page", 'none');
    })

// transactioon page
document.getElementById('card6')
    .addEventListener('click', function(){
        togol('add-momey-page', 'none');
        togol('cash-out-page', 'none');
        togol('transactions-page', 'block');
        togol('momey-transfer-page', 'none');
        togol("get-bonus-page", 'none');
    })

// transfer money
document.getElementById('card3')
    .addEventListener('click', function(){
        togol('add-momey-page', 'none');
        togol('cash-out-page', 'none');
        togol('transactions-page', 'none');
        togol('momey-transfer-page', 'block');
        togol("get-bonus-page", 'none');
    })
// get bonus
document.getElementById('card4')
    .addEventListener('click', function(){
        togol('add-momey-page', 'none');
        togol('cash-out-page', 'none');
        togol('transactions-page', 'none');
        togol('momey-transfer-page', 'none');
        togol("get-bonus-page", 'block');
    })