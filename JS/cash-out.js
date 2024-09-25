document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOutAmount = getInputFieldValueById("add-cash-out-amount");
    const cashOutPin = getInputFieldValueById("cash-out-pin");

    if(isNaN(cashOutAmount)){
        alert('Failed to Cash Out');
        return;
    }

    if (cashOutPin === 1234) {
      const mainBalance = getTextFieldValueById("main-amount");

        if(cashOutAmount > mainBalance){
            alert('You do not have enough money');
            return;
        }

      const updateBalance = mainBalance - cashOutAmount;
      console.log(cashOutAmount,cashOutPin,updateBalance);
      document.getElementById("main-amount").innerText = updateBalance;
      
      const div = document.createElement('div');
      div.classList.add('bg-yellow-300');
      div.innerHTML=`
      <h4 class="text-2xl font-bold ">Cash Out</h4>
      <p>${cashOutAmount}Tk. withdraw,  New Balance ${updateBalance}</p>
      `
      document.getElementById('history-container').appendChild(div);

    } else {
      alert("Failed to Cash out");
    }
    
  });
