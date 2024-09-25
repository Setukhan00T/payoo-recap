document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById("add-money-amount");
    const pinNumber = getInputFieldValueById("add-money-pin");

    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }

    if (pinNumber === 1234) {
      const mainBalance = getTextFieldValueById("main-amount");
      const updateBalance = mainBalance + addMoney;

      document.getElementById("main-amount").innerText = updateBalance;
      console.log(updateBalance);
      const p =document.createElement('p');
      p.innerText =`added: ${addMoney} Tk. New Balance:${updateBalance}`;
      document.getElementById('history-container').appendChild(p);
    } else {
      alert("Failed to add money.");
    }
  });
