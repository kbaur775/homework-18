transactions = [];

function saveRecord(transaction) {
  transactions.push(transaction);
}

function persist() {
  fetch("/api/transaction/bulk", { method: "POST", body: JSON.stringify(transactions)})
    .then(response => response.json())
    .then(() => transactions = []);
}

window.addEventListener("online", persist);
