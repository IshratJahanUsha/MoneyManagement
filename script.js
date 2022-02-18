// handle calculation button event

document.getElementById('calculateButton').addEventListener('click',function(){

// variables

    // income 
    const Income = document.getElementById('income-input');
    const IncomeAmount = parseInt(Income.value);

    // expenses field
    const Food = document.getElementById('foodCost-input');
    const foodCost =parseInt(Food.value) ;

    const Rent = document.getElementById('rentCost-input');
    // const rentAmount = Rent.value;
    const rentCost =parseInt(Rent.value) ;

    const Others = document.getElementById('othersCost-input');
    const othersCost =parseInt(Others.value) ;


// calculation

    // update total expenses & balance Cost

    const Expenses = document.getElementById('expensesAmount');
    Expenses.innerText = foodCost + rentCost + othersCost ;
    const ExpensesAmount = Expenses.innerText;

    const Balance = document.getElementById('totalBalance');
    Balance.innerText = IncomeAmount - ExpensesAmount ;
 
})


// handle save button event

document.getElementById('savingButton').addEventListener('click',function(){
    // variables
    const Income = document.getElementById('income-input');
    const IncomeAmount = parseInt(Income.value);
    
    // calculation 
    const SavingInput = document.getElementById('SavingInput');
    const Saving = parseInt(SavingInput.value) ;

    // update saving amount
    const Save = document.getElementById('SavingAmount');
    Save.innerText =  IncomeAmount * Saving/ 100 ;
    const SavingAmount = Save.innerText;


    // update remaining balance
    const BalanceAmount = document.getElementById('totalBalance').innerText;

    const RemainingBalance = document.getElementById('RemainingBalance');
    RemainingBalance.innerText = BalanceAmount - SavingAmount ;

})