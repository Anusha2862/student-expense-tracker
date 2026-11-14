alert("javascript is working");
let foodTotal = 0;
let travelTotal = 0;
let educationTotal = 0;
let otherTotal = 0;

document.querySelector("button").addEventListener("click", function () {

    let expenseName = document.querySelector('input[type="text"]').value;
    let amount = Number(document.querySelector('input[type="number"]').value);
    let category = document.querySelector("select").value;
    if (expenseName === "" || amount === 0) {
    alert("Please enter expense name and amount");
    return;
}

    let expenseList = document.querySelector("#expenseList");

    let newExpense = document.createElement("li");

    newExpense.textContent =
        expenseName + " - ₹" + amount + " - " + category + " ";

    // Create Delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    newExpense.appendChild(deleteButton);
    expenseList.appendChild(newExpense);

    let totalExpense = document.querySelector("#totalExpense");

    totalExpense.textContent =
        Number(totalExpense.textContent) + amount;
        if (category === "Food") {
    foodTotal = foodTotal + amount;
}
else if (category === "Travel") {
    travelTotal = travelTotal + amount;
}
else if (category === "Education") {
    educationTotal = educationTotal + amount;
}
else {
    otherTotal = otherTotal + amount;
}
document.querySelector("#foodTotal").textContent = foodTotal;
document.querySelector("#travelTotal").textContent = travelTotal;
document.querySelector("#educationTotal").textContent = educationTotal;
document.querySelector("#otherTotal").textContent = otherTotal;

    // Delete expense
   deleteButton.addEventListener("click", function () {

    newExpense.remove();

    totalExpense.textContent =
        Number(totalExpense.textContent) - amount;

    if (category === "Food") {
        foodTotal = foodTotal - amount;
    }
    else if (category === "Travel") {
        travelTotal = travelTotal - amount;
    }
    else if (category === "Education") {
        educationTotal = educationTotal - amount;
    }
    else {
        otherTotal = otherTotal - amount;
    }

    document.querySelector("#foodTotal").textContent = foodTotal;
    document.querySelector("#travelTotal").textContent = travelTotal;
    document.querySelector("#educationTotal").textContent = educationTotal;
    document.querySelector("#otherTotal").textContent = otherTotal;
});
    alert("Expense Added Successfully!");
    document.querySelector('input[type="text"]').value = "";
document.querySelector('input[type="number"]').value = "";
document.querySelector("select").selectedIndex = 0;
});