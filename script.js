function updateExpensesAndBalance(){

    //Expenses calculation
    const Rent =document.getElementById("rentCost-input") ;
    const rentCost = parseFloat(Rent.value) ;

    const Food =document.getElementById("foodCost-input") ;
    const foodCost = parseFloat(Food.value) ;

    const Others =document.getElementById("othersCost-input") ;
    const othersCost = parseFloat(Others.value) ;

    const Expenses = document.getElementById('expensesAmount');
    Expenses.innerText = foodCost + rentCost + othersCost ;
    const ExpensesAmount = Expenses.innerText;

    //balance calculation
    const Income = document.getElementById("income-input") ;
    const IncomeAmount = parseFloat(Income.value) ;

    let Balance = document.getElementById('totalBalance');
    Balance.innerText = IncomeAmount - ExpensesAmount ;

    // error handling
    if(ExpensesAmount > IncomeAmount){
        window.alert('Expenses cannot be more than Income');
        Balance.innerText = ''
    }
    else{
        return Balance;
    }

}

//Saving calculation
function getSavingPercentage(){

const Income = document.getElementById("income-input") ;
const IncomeAmount = parseFloat(Income.value) ;

const SavingInput = document.getElementById("SavingInput") ;
const SavingPercentage = parseFloat(SavingInput.value) ;

const SavingAmount = IncomeAmount * SavingPercentage / 100 ;
document.getElementById('SavingAmount').innerText = SavingAmount ;

return SavingAmount;

}

//button click events
document.getElementById("calculateButton").addEventListener("click",function(){

    updateExpensesAndBalance()

})


document.getElementById("savingButton").addEventListener("click",function(){
const Savings = getSavingPercentage()
const previousBalance = document.getElementById('totalBalance').innerText

    // error handling
    if(Savings > previousBalance){

        window.alert('Savings cannot be more than Balance')
        document.getElementById("RemainingBalance").innerText = ''
    }

    else if (Savings <= previousBalance){

        const RemainingBalance = previousBalance - Savings ;
        document.getElementById("RemainingBalance").innerText = RemainingBalance ;

    }

})

//  error handling(string & negNumber)

document.getElementById('calculateButton').addEventListener('click',function(){

    let InputField = document.getElementsByClassName('Input-Field').value ;
    
    if(isNaN(InputField) || InputField < 0){
       alert('Input should be 0 or positive number')
    }

})

document.getElementById('savingButton').addEventListener('click',function(){

    let InputField = document.getElementsByClassName('Input-Field').value ;
    
    if(isNaN(InputField) || InputField < 0){
       alert('Input should be 0 or positive number')
    }

})




// function validation(){
//     debugger

//     let InputField = document.getElementsByClassName('Input-Field').value ;
    
//     if(isNaN(InputField) || InputField < 0){
//        alert('Input should be 0 or positive number');
//     }
//     else{
//         return InputField ;
//     }
// }