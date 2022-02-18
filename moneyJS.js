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
    
        const Save = document.getElementById('SavingAmount');
        Save.innerText =  IncomeAmount * Saving/ 100 ;
        const SavingAmount = Save.innerText;
    
        const RemainingBalance = document.getElementById('remainingBalance');
        RemainingBalance.innerText = IncomeAmount - SavingAmount ;
    
    })



// error conditions

// if(foodCost | rentCost | othersCost == String ){
//     window.alert('You cannot give string , only numbers')
// }

// if(foodCost | rentCost | othersCost < 0){
//     window.alert('You can give only 0 or positive numbers')
// }

// if(Balance < Expenses){
//     window.alert('Expenses cannot be more than Balance')
// }


if(Balance < Expenses){
    window.alert('Expenses cannot be more than Balance')
}
 else{
    const Balance = document.getElementById('totalBalance');
    Balance.innerText = IncomeAmount - ExpensesAmount ; 
 }