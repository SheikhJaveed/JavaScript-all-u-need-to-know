document.addEventListener('DOMContentLoaded', () => {
    const expenseForm=document.getElementById('expense-form')
    const expenseNameInput=document.getElementById('expense-name')
    const expenseAmountForm=document.getElementById('expense-amount')
    const expenseLists=document.getElementById('expense-list')
    const totalAmountDisplay=document.getElementById('total-amount')

    let expenses=JSON.parse(localStorage.getItem('expenses')) || [];

    renderExpense();
    updateTotal();

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name=expenseNameInput.value.trim();
        console.log(typeof expenseAmountForm.value.trim()); //note that even when the input type is number, the value is still a string
        const amount=parseFloat(expenseAmountForm.value.trim());

        if(name!=="" && !isNaN(amount) && amount>0){
            const newExpense={
                id:Date.now(),
                name:name,
                amount:amount
            }
            expenses.push(newExpense);
           saveExpenesToLocalStorage();
           renderExpense();
           updateTotal();

           expenseNameInput.value="";
           expenseAmountForm.value="";
        }
    });

    function renderExpense(){
        expenseLists.innerHTML='';
        expenses.forEach(expense=>{
            const li=document.createElement('li');
            li.innerHTML=`${expense.name} - $${expense.amount}
            <button id="deleteBtn" data-id=${expense.id}>Delete</button>`;
            expenseLists.appendChild(li);
        })
    }
    function calculateTotal(){
        return expenses.reduce((sum,expense)=>sum+=expense.amount,0); //0 is the initial value of sum
    }

    function updateTotal(){
        totalAmount=calculateTotal();
        totalAmountDisplay.textContent=totalAmount.toFixed(2);
    }
    function saveExpenesToLocalStorage(){
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    expenseLists.addEventListener('click', (e) => {
        if(e.target.tagName==='BUTTON'){
            const expenseID=parseInt(e.target.getAttribute('data-id'));
            expenses=expenses.filter(expense=>expense.id!==expenseID); //filter out the expense with the id that matches the id of the button clicked   
            saveExpenesToLocalStorage();
            renderExpense();
            updateTotal();
        }
    })

  
})